import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../store/reducers/user'

import { Flex, Container, Box, Image, Text, Button } from 'theme-ui'
import { Plus, LogOut } from 'react-feather'

import NavbarLink from '../components/wrappers/NavbarLink'

function Home() {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()

    const [decks, setDecks] = useState([])

    useEffect(() => {
        fetch('/decks', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => res.json()).then(json => setDecks(json))
    })    

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
                <NavbarLink to='/' icon="Home" label="Home" />
                <Button onClick={() => dispatch(logout())} style={{ marginLeft: "auto", display: "flex" }}><LogOut style={{ marginRight: "5px" }} /> Log Out</Button>
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
                                <Image src={deck.image} sx={{
                                    height: "100%",
                                    objectFit: "cover"
                                }}/>
                            </Box>
                            <Text sx={{ fontFamily: "medium" }}>{deck.name}</Text>
                        </Box>
                    )}
                    <Box sx={{ width: "144px", cursor: "pointer" }}>
                        <Flex sx={{
                            boxShadow: "0 2px 6px rgba(0,0,0,.1)",
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
