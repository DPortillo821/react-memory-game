import React from 'react'

import styled from 'styled-components'

import Stopwatch from './Stopwatch'

const Wrapper = styled.div`
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

const StatBar = ({ isStopwatchActive, message, score }) => {
    return (
        <Wrapper>
            <Stopwatch isActive={isStopwatchActive} />
            <Message>{message}</Message>
            <Score>Score: {score}</Score>
        </Wrapper>
    )
}

export default StatBar
