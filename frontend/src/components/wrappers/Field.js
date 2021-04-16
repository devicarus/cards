import React from 'react'

import { Flex, Input } from 'theme-ui'
import * as Icons from 'react-feather'

function Field(props) {
    const Icon = Icons[props.icon]

    return (
        <Flex
            sx={{
                alignItems: "center",
                borderBottomColor: props.invalid ? "danger" : "primary",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                ...props.containerStyle
            }}
            pl={2}
        >
            <Icon size={20} color="gray" />
            <Input {...props} variant="plain"/>
        </Flex>
    )
}

export default Field
