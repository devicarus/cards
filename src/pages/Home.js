import React from 'react'

import { Flex, Container, Box } from 'theme-ui'

import NavLink from '../components/NavLink'

function Home() {
    return (<>
        <Flex as='nav'
            sx={{
                height: "60px",
                backgroundColor: "primary",
                boxShadow: "inset 0 0 4px rgb(31, 205, 251), 0 0 2px rgba(0,0,0,0.30)",
                textTransform: "uppercase"
            }}
        >
            <Container sx={{ display: "flex", alignItems: "center" }}>
                <NavLink icon="Home" label="Home" />
                <NavLink to='/playground/show' label="Playground" />
                <NavLink style={{ marginLeft: "auto" }} icon="LogOut" label="Log Out" />
            </Container>
        </Flex>
        <Container>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: "10px",
                marginTop: "40px",
                padding: "30px"
            }}>
                
            </Box>
        </Container>
    </>)
}

export default Home
