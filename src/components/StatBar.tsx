import React, { useContext } from 'react'

import styled from 'styled-components'

import Stopwatch from './Stopwatch'

import { GameContext } from '../contexts/GameContext'

const StatBarContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    justify-content: space-around;
    background-color: #1f4068;
`

const Message = styled.p`
    color: white;
    font-size: 1rem;
`

const Score = styled.p`
    color: white;
    font-size: 1rem;
`

const StatBar = () => {
    const [state] = useContext<any>(GameContext)

    return (
        <StatBarContainer>
            <Stopwatch />
            <Message>{state.message}</Message>
            <Score>Score: {state.score}</Score>
        </StatBarContainer>
    )
}

export default StatBar
