import React from 'react'

import { Container, Box, Button, Heading, Input } from 'theme-ui'

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
                padding: "30px",
                display: "flex",
                flexDirection: ["column", "row"],
                gap: "30px"
            }}>
                <Box sx={{ flexGrow: 1 }} >
                    <Heading sx={{ marginBottom: "10px" }}>Delete Account</Heading>
                    <Input placeholder="Password" sx={{ maxWidth: "300px" }} />
                    <Button
                        variant="danger"
                        sx={{
                            marginTop: "10px"
                        }}
                
                    >Confirm</Button>
                </Box>
                <Box sx={{ flexGrow: 1 }} >
                    <Heading sx={{ marginBottom: "10px" }}>Change Password</Heading>
                    <Input placeholder="Old Password" sx={{ maxWidth: "300px" }} />
                    <Input placeholder="New Password" sx={{ maxWidth: "300px" }} />
                    <Button sx={{ marginTop: "10px" }}>Confirm</Button>
                </Box>
            </Box>
        </Container>
    </>)
}

export default Settings
