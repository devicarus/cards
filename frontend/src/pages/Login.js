import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useParams, useHistory } from 'react-router-dom'

import { setToken } from '../store/reducers/user'

import { Flex, Box, Button, Text } from 'theme-ui'
import Field from '../components/wrappers/Field'
import Link from '../components/wrappers/Link'


function Login() {
    const dispatch = useDispatch()
    const { mode } = useParams()
    const history = useHistory()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [notice, setNotice] = useState({
        fields: [],
        text: "",
        type: ""
    })

    const login = async (form) => {
        const response = await fetch("/api/auth/login", {
            method: 'POST',
            body: new URLSearchParams(form)
        })

        const data = await response.json()

        if (response.status === 200) {
            dispatch(setToken(data.token))
        } else {
            switch (data.message) {
                case "Wrong email or password":
                    setNotice({ fields: ["email", "password"], text: data.message, type: "Error" })
                    break;

                case "Email not verified":
                    setNotice({ fields: [], text: data.message, type: "Error" })
                    break;

                default:
                    setNotice({ fields: [], text: "Something went wrong, please try again later", type: "Error" })
                    break;
            }
        }
    }

    const register = async (form) => {
        const response = await fetch("/api/auth/register", {
            method: 'POST',
            body: new URLSearchParams(form)
        })

        const data = await response.json()

        if (response.status === 200) {
            history.push("/signin")
            setNotice({ fields: [], text: "Verify your email please", type: "Info" })
        } else {
            switch (data.message) {
                case "Not an email":
                    setNotice({ fields: ["email"], text: "Please enter an email", type: "Error" })
                    break;

                case "Email already used":
                    setNotice({ fields: [], text: data.message, type: "Error" })
                    break;

                case "Empty password":
                    setNotice({ fields: ["password"], text: "Please enter a password", type: "Error" })
                    break;

                default:
                    setNotice({ fields: [], text: "Something went wrong, please try again later", type: "Error" })
                    break;
            }
        }
    }

    return (<>
        {useSelector(state => state.user.token) &&
            <Redirect to='/' />
        }

        <Flex
            sx={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    background: "white",
                    boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                    borderRadius: "10px"
                }}
                p="30px"
            >
                <Flex mb="30px">
                    <Link
                        sx={{
                            flexGrow: 1,
                            fontSize: 4,
                            color: mode !== "in" ? "muted" : "text",
                            "&:hover": {
                                color: mode !== "in" ? "muted" : "text"
                            },
                            "&:focus": {
                                color: mode !== "in" ? "muted" : "text"
                            }
                        }}
                        as={Link}
                        to="/signin"
                        onClick={() => {
                            setNotice({
                                fields: [],
                                text: ""
                            })
                        }}
                    >
                        <Text sx={{ textAlign: "center" }}>Sign In</Text>
                    </Link>
                    <Link
                        sx={{
                            flexGrow: 1,
                            fontSize: 4,
                            color: mode !== "up" ? "muted" : "text",
                            "&:hover": {
                                color: mode !== "up" ? "muted" : "text"
                            },
                            "&:focus": {
                                color: mode !== "up" ? "muted" : "text"
                            }
                        }}
                        as={Link}
                        to="/signup"
                        onClick={() => {
                            setNotice({
                                fields: [],
                                text: ""
                            })
                        }}
                    >
                        <Text sx={{ textAlign: "center" }}>Sign Up</Text>
                    </Link>
                </Flex>
                <Box as="form" onSubmit={e => {
                    if (mode === "in") {
                        e.preventDefault()
                        login(form)
                    } else {
                        e.preventDefault()
                        register(form)
                    }
                }}>
                    <Text mb={3} color={notice.type === "Error" ? "danger" : "primary"} sx={{ fontWeight: "bold", textAlign: "center" }}>{notice.text}</Text>

                    <Field icon="Mail" placeholder="Email" invalid={notice.fields.includes("email")} onChange={e => setForm({ ...form, email: e.target.value })} containerStyle={{ marginBottom: "5px" }} />
                    <Field icon="Lock" placeholder="Password" invalid={notice.fields.includes("password")} onChange={e => setForm({ ...form, password: e.target.value })} type="password" />

                    <Button type="submit" sx={{ width: "100%" }} mt="30px">Sign {mode}</Button>
                </Box>
            </Box>
        </Flex>
    </>)
}

export default Login
