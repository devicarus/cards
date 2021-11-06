import React, { useState } from 'react'

import { Container, Box, Image, Heading, Input, Flex, Button } from 'theme-ui'
import { Plus, Image as ImageIcon } from 'react-feather'

import NavBar from '../components/NavBar'

import Field from '../components/wrappers/Field'

function Create() {
    const [image, setImage] = useState()

    return (<>
        <NavBar />
        <Container>
            <Heading mt={4} ml={3} mb={2} as="h1">Create</Heading>
            <Box sx={{
                boxShadow: "0 0 25px 0 rgba(0,0,0,.04)",
                background: "white",
                borderRadius: [null, "10px"],
                padding: "30px"
            }}>
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
                        <Field icon="Tag" placeholder="Name" />
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
                            {[{ front: "Front", back: "Back" }, { front: "", back: "" }].map(card =>
                                <tr>
                                    <td><Input value={card.front} placeholder="Front" variant="plain" sx={{ padding: "4px 6px" }} /></td>
                                    <td><Input value={card.back} placeholder="Back" variant="plain" sx={{ padding: "4px 6px" }} /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Button sx={{ borderRadius: "100%", padding: "10px", lineHeight: 0 }}><Plus /></Button>
                </Flex>
            </Box>
        </Container>
    </>)
}

export default Create
