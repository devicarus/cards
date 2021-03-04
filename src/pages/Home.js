import React from 'react'

import { Link } from 'react-router-dom'

import { Flex, NavLink, Container, Box } from 'theme-ui'

function Home() {
    return (<>
        <Flex as='nav'
            sx={{
                height: "60px",
                alignItems: "center",
                backgroundColor: "primary",
                boxShadow: "inset 0 0 4px rgb(31, 205, 251), 0 0 2px rgba(0,0,0,0.30)",
                textTransform: "uppercase"
            }}
        >
            <Container>
                <NavLink href='#!' p={2}>
                    Home
                </NavLink>
                <NavLink to='/playground/show' as={Link} p={2}>
                    Playground
                </NavLink>
                <NavLink href='#!' p={2}>
                    About
                </NavLink>
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
