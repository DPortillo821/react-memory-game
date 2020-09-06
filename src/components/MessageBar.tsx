import React, { useContext } from 'react'

import styled from 'styled-components'

import { GameContext } from '../contexts/GameContext'

const Container = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    justify-content: center;
    align-content: center;
    background-color: #1f4068;
`

const Message = styled.p`
    color: white;
    font-size: 1rem;
`

const MessageBar = () => {
    const [state] = useContext<any>(GameContext)

    return (
        <Container>
            <Message>{state.message}</Message>
        </Container>
    )
}

export default MessageBar
