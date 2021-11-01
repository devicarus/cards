import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { Link as ThemedLink } from 'theme-ui'

function Link(props) {
    return (
        <ThemedLink to={props.to} as={RouterLink} sx={props.sx}>
            {props.children}
        </ThemedLink>
    )
}

export default Link
