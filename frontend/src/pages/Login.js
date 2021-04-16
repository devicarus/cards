import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setToken } from '../store/reducers/user'

import { Flex, Box, Button, Badge, Text } from 'theme-ui'
import Field from '../components/wrappers/Field'

function Login() {
    const dispatch = useDispatch()

    const [state, setState] = useState({ 
        form: { 
            email: "", 
            password: "" 
        },
        error: "" 
    })

    const token = useSelector(state => state.user.token)

    const login = async (form) => {
        const response = await fetch("/auth/login", {
            method: 'POST',
            body: new URLSearchParams(form)
        })

        const data = await response.json()

        switch (response.status) {
            case 200:
                dispatch(setToken(data.token))
                break;

            case 400:
                setState({ ...state, error: "Wrong email or password"})
                break;

            default:
                setState({ ...state, error: "Something went wrong, please try again later"})
                break;
        }
    }

    return (<>
        { token &&
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
                    <Flex sx={{ flexGrow: 1, alignItems: "flex-start" }} >
                        <Button variant="plain">Sign In</Button>
                    </Flex>
                    <Flex sx={{ flexGrow: 1, flexDirection: "column", alignItems: "center" }}>
                        <Button variant="plainDisabled">Sign Up</Button>
                        <Badge bg="muted" mt="-5px">Closed</Badge>
                    </Flex>
                </Flex>
                <Box as="form" onSubmit={e => {
                    e.preventDefault()
                    login(state.form)
                }}>
                    <Field icon="Mail" placeholder="Email" invalid={state.error} onChange={e => setState({ form: { ...state.form, email: e.target.value }})} containerStyle={{ marginBottom: "5px" }} />
                    <Field icon="Lock" placeholder="Password" invalid={state.error} onChange={e => setState({ form: { ...state.form, password: e.target.value }})} type="password" />
                    { state.error &&
                        <Text mt={2} color="#FF3C38" sx={{ fontWeight: "bold", textAlign: "center" }}>{ state.error }</Text>
                    }
                    <Button sx={{ width: "100%" }} mt="30px">Sign In</Button>
                </Box>
            </Box>
        </Flex>
    </>)
}

export default Login
