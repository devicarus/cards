import React from 'react'

import { Box, Text } from 'theme-ui'

function WordChoice() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: ["column", "row"],
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box>
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
        </Box>
    )
}

export default WordChoice
