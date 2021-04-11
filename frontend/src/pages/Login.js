import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../store/reducers/user'

import { Flex, Box, Button, Badge } from 'theme-ui'
import Field from '../components/wrappers/Field'

function Login() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const token = useSelector(state => state.user.token)

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
                <Field icon="Mail" placeholder="Email" onChange={e => setEmail(e.target.value)} containerStyle={{ marginBottom: "5px" }} />
                <Field icon="Lock" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Button sx={{ width: "100%" }} mt="30px" onClick={() => dispatch(login({ email, password }))}>Sign In</Button>
            </Box>
        </Flex>
    </>)
}

export default Login
