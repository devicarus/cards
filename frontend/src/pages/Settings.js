import React from 'react'

import { Container, Box } from 'theme-ui'

import NavBar from '../components/NavBar'

function Settings() {
    return (<>
        <NavBar />
        <Container>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: [null, "10px"],
                marginTop: "40px",
                padding: "30px"
            }}>
                
            </Box>
        </Container>
    </>)
}

export default Settings
