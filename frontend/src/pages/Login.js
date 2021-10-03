import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useParams, useHistory, useLocation } from 'react-router-dom'

import { setToken } from '../store/reducers/user'

import { Flex, Box, Button, Text, NavLink } from 'theme-ui'
import Field from '../components/wrappers/Field'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Login() {
    const dispatch = useDispatch()
    const { mode } = useParams()
    const history = useHistory()
    const query = useQuery()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        fields: [],
        text: ""
    })

    const token = useSelector(state => state.user.token)

    const login = async (form) => {
        const response = await fetch("/api/auth/login", {
            method: 'POST',
            body: new URLSearchParams(form)
        })

        const data = await response.json()

        switch (response.status) {
            case 200:
                dispatch(setToken(data.token))
                break;

            case 400:
                setError({ fields: ["email", "password"], text: "Wrong email or password" })
                break;

            default:
                setError({ fields: [], text: "Something went wrong, please try again later" })
                break;
        }
    }

    const register = async (form) => {
        const response = await fetch("/api/auth/register", {
            method: 'POST',
            body: new URLSearchParams(form)
        })

        switch (response.status) {
            case 200:
                history.push("/signin?notice=registered")
                break;

            case 400:
                setError({ fields: ["email"], text: "Email already used" })
                break;

            default:
                setError({ fields: [], text: "Something went wrong, please try again later" })
                break;
        }
    }

    return (<>
        {token &&
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
                    <NavLink
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
                            setError({
                                fields: [],
                                text: ""
                            })
                        }}
                    >
                        <Text sx={{ textAlign: "center" }}>Sign In</Text>
                    </NavLink>
                    <NavLink
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
                            setError({
                                fields: [],
                                text: ""
                            })
                        }}
                    >
                        <Text sx={{ textAlign: "center" }}>Sign Up</Text>
                    </NavLink>
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
                    <Field icon="Mail" placeholder="Email" invalid={error.fields.includes("email")} onChange={e => setForm({ ...form, email: e.target.value })} containerStyle={{ marginBottom: "5px" }} />
                    <Field icon="Lock" placeholder="Password" invalid={error.fields.includes("password")} onChange={e => setForm({ ...form, password: e.target.value })} type="password" />

                    <Text mt={2} color="#FF3C38" sx={{ fontWeight: "bold", textAlign: "center" }}>{error.text}</Text>

                    <Text mt={2} color="#16db65" sx={{ fontWeight: "bold", textAlign: "center" }}>{(() => {
                        switch (query.get("notice")) {
                            case "registered":
                                return "You can now Sign In"

                            default:
                                return
                        }
                    })()}</Text>


                    <Button type="submit" sx={{ width: "100%" }} mt="30px">Sign {mode}</Button>
                </Box>
            </Box>
        </Flex>
    </>)
}

export default Login
