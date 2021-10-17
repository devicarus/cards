import React from 'react'

import { Link } from 'react-router-dom'
import { NavLink as ThemedLink } from 'theme-ui'
import * as Icons from 'react-feather'

function NavLink(props) {
    const Icon = Icons[props.icon]

    return (
        <ThemedLink to={props.to} as={Link} sx={{
            display: "flex",
            ...props.style
        }}>
            {props.icon &&
                <Icon style={{ marginRight: "5px" }} />
            }
            {props.label}
        </ThemedLink>
    )
}

export default NavLink
