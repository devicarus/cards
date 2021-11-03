import React, { useReducer, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setToken } from '../store/reducers/user'

import { Container, Box, Button, Heading, Alert } from 'theme-ui'

import NavBar from '../components/NavBar'

import Input from '../components/wrappers/Field'

const initialState = {
    delete: {
        password: null
    },
    changePassword: {
        old_password: null,
        new_password: null
    }
}

function reducer(state, action) {
    let clone = {}
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            clone[key] = state[key];
        }
    }

    clone[action.form][action.field] = action.value
    return clone
}

function Settings() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)

    const [form, setForm] = useReducer(reducer, initialState)
    const [notice, setNotice] = useState("")

    return (<>
        <NavBar />
        <Container>
            <Heading mt={4} ml={3} mb={2} as="h1">Settings</Heading>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: [null, "10px"],
                padding: "30px"
            }}>
                {notice &&
                    <Alert mb={3} bg="danger">{notice}</Alert>
                }
                <Box sx={{
                    display: "flex",
                    flexDirection: ["column", "row"],
                    gap: "30px"
                }}>
                    <Box sx={{ flexGrow: 1 }} as="form" onSubmit={async e => {
                        e.preventDefault()

                        const response = await fetch("/api/auth/delete", {
                            method: 'POST',
                            headers: {
                                Authorization: 'Bearer ' + token
                            },
                            body: new URLSearchParams({ password: form.delete.password })
                        })

                        if (response.status === 200) {
                            dispatch(setToken(null))
                        } else {
                            const data = await response.json()

                            setNotice(data.message)
                        }
                    }}>
                        <Heading sx={{ marginBottom: "10px" }}>Delete Account</Heading>
                        <Input type="password" placeholder="Password" sx={{ maxWidth: "300px" }} onChange={(e) => setForm({ form: "delete", field: "password", value: e.target.value })} />
                        <Button type="submit" mt="10px">Confirm</Button>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} as="form" onSubmit={async e => {
                        e.preventDefault()

                        const response = await fetch("/api/auth/password_change", {
                            method: 'POST',
                            headers: {
                                Authorization: 'Bearer ' + token
                            },
                            body: new URLSearchParams({ old_password: form.changePassword.old_password, new_password: form.changePassword.new_password })
                        })

                        if (response.status === 200) {
                            dispatch(setToken(null))
                        } else {
                            const data = await response.json()

                            setNotice(data.message)
                        }
                    }}>
                        <Heading sx={{ marginBottom: "10px" }}>Change Password</Heading>
                        <Input type="password" placeholder="Old Password" sx={{ maxWidth: "300px" }} onChange={(e) => setForm({ form: "changePassword", field: "old_password", value: e.target.value })} />
                        <Input type="password" placeholder="New Password" sx={{ maxWidth: "300px" }} onChange={(e) => setForm({ form: "changePassword", field: "new_password", value: e.target.value })} />
                        <Button type="submit" mt="10px">Confirm</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    </>)
}

export default Settings
