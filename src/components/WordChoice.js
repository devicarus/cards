import React from 'react'

import { Box, Button, Text } from 'theme-ui'

function WordChoice() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: ["column", "row"],
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flex: [1.5, "unset"],
                    alignItems: "center",
                    marginRight: [null, "40px"]
                }}
            >
                <Box
                    sx={{
                        minWidth: "150px",
                        width: "250px",
                        height: "300px",
                        minHeight: "150px",
                        boxShadow: "rgba(0, 0, 0, 0.20) 0px 4px 10px",
                        borderRadius: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        sx={{
                            fontWeight: "bold",
                            fontSize: 3
                        }}
                    >Word</Text>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flex: [1, "unset"],
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: ["300px", "auto"],
                        justifyContent: "center"
                    }}
                >
                    <Button variant="outline.default">Option 1</Button>
                    <Box
                        sx={{
                            width: "20px",
                            height: "20px"
                        }}
                    />
                    <Button variant="outline.default">Option 2</Button>
                    <Box
                        sx={{
                            width: "20px",
                            height: "20px"
                        }}
                    />
                    <Button variant="outline.default">Option 3</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default WordChoice
