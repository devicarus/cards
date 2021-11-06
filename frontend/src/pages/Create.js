import React, { useState, useReducer } from 'react'

import { Box, Image, Heading, Input, Flex, Button } from 'theme-ui'
import { Plus, Image as ImageIcon } from 'react-feather'

import Page from '../components/Page'

import Field from '../components/wrappers/Field'

const initialState = [{ front: "", back: "" }]

function reducer(state, action) {
    switch(action.type) {
        case "add":
            return state.concat({ front: "", back: "" })
        case "change":
            return state.map((card, index) => {
                if (index === action.index) {
                    let newCard = {
                        front: card.front,
                        back: card.back
                    }
                    newCard[action.side] = action.value
                    return newCard
                } else {
                    return card
                }
            })
    }
}

function Create() {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [cards, setCards] = useReducer(reducer, initialState)

    return (
        <Page title="Create">
            <Flex sx={{ flexDirection: ["column", "row"], justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <Box sx={{
                    boxShadow: "0 2px 6px rgba(0,0,0,.1),0 6px 0 -1px #fff,0 7px 6px rgba(0,0,0,.1),0 11px 0 -1px #fff,0 12px 6px rgba(0,0,0,.1)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    height: "166px",
                    marginBottom: "20px",
                    width: "144px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {image ?
                        <Image src={image} sx={{
                            height: "100%",
                            objectFit: "cover"
                        }} />
                        :
                        <ImageIcon size={48} />
                    }

                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "20px" }}>
                    <Field icon="Tag" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <Field icon="Image" placeholder="Thumbnail URL" onChange={e => setImage(e.target.value)} />
                </Box>
            </Flex>
            <Flex sx={{ flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                <table>
                    <thead>
                        <tr>
                            <th><Heading as="h3" sx={{ textAlign: "center" }} >Front</Heading></th>
                            <th><Heading as="h3" sx={{ textAlign: "center" }} >Back</Heading></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) =>
                            <tr key={index}>
                                <td><Input value={card.front} placeholder="Front" variant="plain" sx={{ padding: "4px 6px" }} onChange={e => setCards({ type: "change", index, side: "front", value: e.target.value })} /></td>
                                <td><Input value={card.back} placeholder="Back" variant="plain" sx={{ padding: "4px 6px" }} onChange={e => setCards({ type: "change", index, side: "back", value: e.target.value })} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button sx={{ borderRadius: "100%", padding: "10px", lineHeight: 0 }} onClick={() => setCards({ type: "add" })}><Plus /></Button>
            </Flex>
        </Page>)
}

export default Create
