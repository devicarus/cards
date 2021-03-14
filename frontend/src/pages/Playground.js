import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Box, Button } from 'theme-ui'
import { X } from 'react-feather'

import WordChoice from '../components/WordChoice'
import WordInput from '../components/WordInput'
import WordShow from '../components/WordShow'

function Playground({ match }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: ["stretch", "center"]
            }}
        >
            <Button 
                variant="icon"
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 20
                }}
            >
                <X size={48} />
            </Button>
            <Switch>
                <Route path={match.path + "/choice"} component={WordChoice} />
                <Route path={match.path + "/input"} component={WordInput} />
                <Route path={match.path + "/show"} component={WordShow} />
            </Switch>
        </Box>
    )
}

export default Playground
