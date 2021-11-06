import React from 'react'

import { Container, Box, Heading } from 'theme-ui'

import NavBar from './NavBar'

function Page(props) {
    return (<>
        <NavBar />
        <Container>
            <Heading mt={4} ml={3} mb={2} as="h1">{props.title}</Heading>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: [null, "10px"],
                padding: "30px"
            }}>
                {props.children}
            </Box>
        </Container>
    </>)
}

export default Page
