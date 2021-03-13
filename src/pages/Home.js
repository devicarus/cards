import React from 'react'

import { Flex, Container, Box, Image, Text } from 'theme-ui'
import { Plus } from 'react-feather'

import NavLink from '../components/wrappers/NavLink'

const decks = [{
    "name": "tristique tortor eu",
    "image": "http://dummyimage.com/144x166.png/ff4444/ffffff"
}, {
    "name": "sit amet eros suspendisse",
    "image": "http://dummyimage.com/144x166.png/cc0000/ffffff"
}, {
    "name": "et tempus semper",
    "image": "http://dummyimage.com/144x166.bmp/cc0000/ffffff"
}, {
    "name": "leo odio",
    "image": "http://dummyimage.com/144x166.jpg/cc0000/ffffff"
}, {
    "name": "velit eu est",
    "image": "http://dummyimage.com/144x166.jpg/cc0000/ffffff"
}, {
    "name": "potenti cras in purus",
    "image": "http://dummyimage.com/144x166.png/cc0000/ffffff"
}, {
    "name": "orci pede venenatis non",
    "image": "http://dummyimage.com/144x166.bmp/5fa2dd/ffffff"
}, {
    "name": "sed augue",
    "image": "http://dummyimage.com/144x166.png/dddddd/000000"
}, {
    "name": "cubilia curae",
    "image": "http://dummyimage.com/144x166.png/5fa2dd/ffffff"
}, {
    "name": "nisi venenatis",
    "image": "http://dummyimage.com/144x166.png/5fa2dd/ffffff"
}]

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
                borderRadius: [null, "10px"],
                marginTop: "40px",
                padding: "30px"
            }}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(144px, 1fr))",
                    gridGap: "20px",
                    justifyItems: "center"
                }}>
                    {decks.map(deck =>
                        <Box sx={{ width: "144px", cursor: "pointer" }}>
                            <Box sx={{
                                boxShadow: "0 2px 6px rgba(0,0,0,.1),0 6px 0 -1px #fff,0 7px 6px rgba(0,0,0,.1),0 11px 0 -1px #fff,0 12px 6px rgba(0,0,0,.1)",
                                borderRadius: "18px",
                                overflow: "hidden",
                                height: "166px",
                                marginBottom: "20px"
                            }}>
                                <Image src={deck.image} />
                            </Box>
                            <Text sx={{ fontFamily: "medium" }}>{deck.name}</Text>
                        </Box>
                    )}
                    <Box sx={{ width: "144px", cursor: "pointer" }}>
                        <Flex sx={{
                            boxShadow: "0 2px 6px rgba(0,0,0,.1)",//"0 6px 0 -1px #fff,0 7px 6px rgba(0,0,0,.1),0 11px 0 -1px #fff,0 12px 6px rgba(0,0,0,.1)",
                            borderRadius: "18px",
                            overflow: "hidden",
                            height: "166px",
                            marginBottom: "20px",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Plus color="lightgray" size="30%" />
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Container>
    </>)
}

export default Home
