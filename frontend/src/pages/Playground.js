import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { Box, Button } from 'theme-ui'
import { X } from 'react-feather'

import WordShow from '../components/WordShow'

function Playground() {
    const history = useHistory()
    const token = useSelector(state => state.user.token)
    const { id } = useParams()

    const [cards, setCards] = useState([])
    const [cursor, setCursor] = useState(0)

    const randomizeCursor = () => {
        const random = Math.floor(Math.random() * cards.length)
        setCursor(random)
    }

    useEffect(() => {
        fetch('/deck/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(json => { 
            setCards(json.cards)
        })
    }, [])

    useEffect(() => {
        randomizeCursor() 
    }, [cards])

    return (
        <Box
            sx={{
                minHeight: "100%",
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
                onClick={() => history.push("/")}
            >
                <X size={48} />
            </Button>
            <WordShow 
                front={cards[cursor]?.front} 
                back={cards[cursor]?.back} 
                nextFunc={() => randomizeCursor()} 
            />
        </Box>
    )
}

export default Playground
