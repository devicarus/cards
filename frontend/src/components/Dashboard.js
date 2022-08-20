import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Box, Heading } from 'theme-ui'

import NavBar from './NavBar'

function Dashboard() {
    const [title, setTitle] = useState("Page")

    return (<>
        <NavBar />
        <Container>
            <Heading mt={4} ml={3} mb={2} as="h1">{title}</Heading>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: [null, "10px"],
                padding: "30px"
            }}>
                <Outlet context={setTitle}/>
            </Box>
        </Container>
    </>)
}

export default Dashboard
