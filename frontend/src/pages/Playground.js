import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Box, Button, Progress, Heading } from 'theme-ui'
import { X } from 'react-feather'

import WordShow from '../components/WordShow'

function Playground() {
    const navigate = useNavigate()
    const token = useSelector(state => state.user.token)
    const { id } = useParams()

    const [cards, setCards] = useState([])
    const [cursor, setCursor] = useState(0)

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    useEffect(() => {
        fetch('/api/deck/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(json => {
                setCards(shuffle(json.cards))
            })
    }, [id, token])

    return (
        <Box
            sx={{
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <Button
                variant="icon"
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 20
                }}
                onClick={() => navigate("/", { replace: true })}
            >
                <X size={48} />
            </Button>
            {cursor}/{cards.length}
            <Progress max={cards.length} value={cursor} mb={3} sx={{ width: "250px", height: "12px" }} />
            {cursor < cards.length ?
                <WordShow
                    front={cards[cursor]?.front}
                    back={cards[cursor]?.back}
                    nextFunc={() => { setCursor(cursor + 1) }}
                />
                :
                <Heading as="h1">Deck finished!</Heading>
            }

        </Box>
    )
}

export default Playground
