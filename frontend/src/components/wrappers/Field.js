import React, {useState} from 'react'

import { Flex, Input, IconButton } from 'theme-ui'
import { Eye, EyeOff } from 'react-feather'
import * as Icons from 'react-feather'

function Field(props) {
    const [type, setType] = useState(props.type)

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
            px={props.icon?2:0}
        >
            { props.icon &&
                <Icon size={20} color="gray" />
            }
            <Input {...props} type={type} variant="plain" sx={{ maxWidth: null }} />
            { props.type === "password" &&
                <IconButton
                    onClick={e => {
                        e.preventDefault()

                        if (type === "password") {
                            setType("text")
                        } else {
                            setType("password")
                        }
                    }}
                    type="button"
                >
                    { type === "password" ?
                        <EyeOff size={20} color="gray" />
                        :
                        <Eye size={20} color="gray" />
                    }
                </IconButton>
            }
        </Flex>
    )
}

export default Field
