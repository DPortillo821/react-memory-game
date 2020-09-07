import React from 'react'

import styled from 'styled-components'

import Stopwatch from './Stopwatch'

import useGame from '../hooks/useGame'

import { formatTime } from '../utils/formattingUtils'

const Container = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    justify-content: space-around;
    align-content: center;
    background-color: #1f4068;
`

const Score = styled.p`
    color: white;
    font-size: 1rem;
`

const FastestTime = styled.p`
    color: white;
    font-size: 1rem;
`

const StatBar = () => {
    const { currentScore, fastestCompletionTime } = useGame()

    return (
        <Container>
            <Stopwatch />
            <FastestTime>
                Fastest Time: {formatTime(fastestCompletionTime)}s
            </FastestTime>
            <Score>Score: {currentScore}</Score>
        </Container>
    )
}

export default StatBar
