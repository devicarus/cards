import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setToken } from '../store/reducers/user'

import { Flex, Container, Button } from 'theme-ui'
import { LogOut } from 'react-feather'

import NavLink from './wrappers/NavLink'

function Navbar() {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")

    useEffect(() => {
        fetch('/api/auth/info', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => res.json()).then(json => setEmail(json.email))
    }, [token])

    return (
        <Flex as='nav'
            sx={{
                height: "60px",
                backgroundColor: "primary",
                boxShadow: "inset 0 0 4px rgb(31, 205, 251), 0 0 2px rgba(0,0,0,0.30)"
            }}
        >
            <Container sx={{ display: "flex", alignItems: "center" }}>
                <NavLink to='/' label="cards" sx={{ fontSize: 5 }} />
                <NavLink to='/settings' label={email} sx={{ marginLeft: "auto", fontSize: 2 }} />
                <Button onClick={() => dispatch(setToken(""))} variant="navbar" sx={{ display: "flex" }}><LogOut style={{ marginRight: "5px" }} /></Button>
            </Container>
        </Flex>
    )
}

export default Navbar
