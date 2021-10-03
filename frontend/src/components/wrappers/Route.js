import React from 'react'
import { useSelector } from 'react-redux'

import { Route as RouterRoute, Redirect } from 'react-router-dom'

function Route(props) {
    const token = useSelector(state => state.user.token)

    return (
        <>
            { props.protected && !token &&
                <Redirect to="/signin" />
            }
            <RouterRoute {...props} />
        </>
    )
}

export default Route
