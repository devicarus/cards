import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Box } from 'theme-ui'

import WordChoice from '../components/WordChoice'

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
            <Switch>
                <Route path={match.path + "/choice"} component={WordChoice} />
            </Switch>
        </Box>
    )
}

export default Playground
