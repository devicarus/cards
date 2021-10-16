import React, { useState } from 'react'

import { Box, Text, Button } from 'theme-ui'

function WordChoice(props) {
    const initialState = { isFlipped: false, showContinue: false }
    const [{ isFlipped, showContinue }, setState] = useState(initialState)

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box
                sx={{
                    perspective: "1000px",
                }}
                mb={4}
            >
                <Box
                    sx={{
                        minWidth: "150px",
                        width: "250px",
                        height: "300px",
                        minHeight: "150px",
                        boxShadow: "rgba(0, 0, 0, 0.20) 0px 4px 10px",
                        borderRadius: "30px",
                        cursor: "pointer",

                        transformStyle: "preserve-3d",
                        transform: (isFlipped ? "rotateY(180deg)" : ""),

                        userSelect: "none",

                        "&:hover": {
                            transition: "transform 0.4s"
                        }
                    }}
                    onClick={() => setState({ isFlipped: !isFlipped, showContinue: true })}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            backfaceVisibility: "hidden",
                            borderRadius: "30px",

                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        bg="white"
                    >
                        <Text
                            sx={{
                                fontWeight: "bold",
                                fontSize: 3
                            }}
                        >{props.front}</Text>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            borderRadius: "30px",

                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        bg="white"
                    >
                        <Text
                            sx={{
                                fontWeight: "bold",
                                fontSize: 3
                            }}
                        >{props.back}</Text>
                    </Box>
                </Box>
            </Box>
            <Button
                sx={{
                    width: "100%",
                    visibility: showContinue ? "visible" : "hidden"
                }}
                onClick={() => {
                    setState(initialState)
                    props.nextFunc()
                }}
            >Continue</Button>
        </Box >
    )
}

export default WordChoice
