import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Box, Image, Text, Flex } from 'theme-ui'
import { Plus, Image as ImageIcon } from 'react-feather'

import Page from '../components/Page'

import Link from '../components/wrappers/Link'

function Home() {
    const history = useHistory()
    const token = useSelector(state => state.user.token)

    const [decks, setDecks] = useState([])

    useEffect(() => {
        fetch('/api/decks', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => res.json()).then(json => setDecks(json))
    }, [token])

    return (
        <Page title="Home">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(144px, 1fr))",
                gridGap: "20px",
                justifyItems: "center"
            }}>
                {decks.map(deck =>
                    <Box key={deck._id} sx={{ width: "144px", cursor: "pointer" }} onClick={() => history.push("/playground/" + deck._id)}>
                        <Box sx={{
                            boxShadow: "0 2px 6px rgba(0,0,0,.1),0 6px 0 -1px #fff,0 7px 6px rgba(0,0,0,.1),0 11px 0 -1px #fff,0 12px 6px rgba(0,0,0,.1)",
                            borderRadius: "18px",
                            overflow: "hidden",
                            height: "166px",
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {deck.image ?
                                <Image src={deck.image} sx={{
                                    height: "100%",
                                    objectFit: "cover"
                                }} />
                                :
                                <ImageIcon size={48} />
                            }
                        </Box>
                        <Text sx={{ fontFamily: "medium" }}>{deck.name}</Text>
                    </Box>
                )}
                <Box sx={{ width: "144px", cursor: "pointer" }}>
                    <Link to="/create">
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
                    </Link>
                </Box>
            </Box>
        </Page>
    )
}

export default Home
