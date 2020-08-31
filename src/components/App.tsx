import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import CardList from './CardList'
import StatBar from './StatBar'

import { Characters } from '../data/Characters'

import { getRandomSubarray, shuffleArray } from '../utils/arrayUtil'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10% auto;
    grid-template-columns: auto;
    min-height: 80vh;
`

const App = () => {
    const numCharacters = 12

    const [message, setMessage] = useState('')
    const [score, setScore] = useState(0)
    const [hasWon, setHasWon] = useState(false)
    const [hasLost, setHasLost] = useState(false)
    const [characters, setCharacters] = useState(
        getRandomSubarray(Characters, numCharacters)
    )
    const [characterIdsClicked, setCharacterIdsClicked] = useState<
        Array<number>
    >([])
    const [isStopwatchActive, setIsStopwatchActive] = useState(false)

    const reset = () => {
        setCharacters(getRandomSubarray(Characters, numCharacters))
        setCharacterIdsClicked([])
        setScore(0)
        setHasWon(false)
        setHasLost(false)
    }

    useEffect(() => {
        setIsStopwatchActive(false)

        let interval = 0
        if (hasLost || hasWon) {
            interval = setTimeout(() => {
                setMessage('')
                reset()
            }, 2000)
        }
        return () => clearInterval(interval)
    }, [hasLost, hasWon])

    const onCardClick = (character) => {
        if (characterIdsClicked.includes(character.id)) {
            setMessage(`o rip. You already clicked on ${character.name}`)
            setHasLost(true)
        } else if (characterIdsClicked.length === characters.length - 1) {
            setMessage('Oh dang, you won! Starting over...')
            setHasWon(true)
        } else {
            setIsStopwatchActive(true)
            if (message.length > 0) {
                setMessage('')
            }
            setCharacterIdsClicked([...characterIdsClicked, character.id])
            setCharacters(shuffleArray(characters))
            setScore(score + 1)
        }
    }

    return (
        <Wrapper>
            <StatBar
                isStopwatchActive={isStopwatchActive}
                message={message}
                score={score}
            />
            <CardList characters={characters} onCardClick={onCardClick} />
        </Wrapper>
    )
}

export default App
