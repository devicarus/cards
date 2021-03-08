import React from 'react'

import { Flex, Input } from 'theme-ui'

function Field(props) {
    return (
        <Flex
            sx={{
                alignItems: "center",
                borderBottomColor: "primary",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid"
            }}
        >
            <props.icon size={20} color="gray" />
            <Input placeholder={props.placeholder} variant="plain"/>
        </Flex>
    )
}

export default Field
