import React, { useContext } from 'react'

import styled from 'styled-components'

import { GameContext } from '../contexts/GameContext'

const MessageContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    justify-content: center;
    align-content: center;
    background-color: #1f4068;
    min-height: 100%;
`

const Message = styled.p`
    color: white;
    font-size: 1rem;
`

const MessageBar = () => {
    const [state] = useContext<any>(GameContext)

    return (
        <MessageContainer>
            <Message>{state.message}</Message>
        </MessageContainer>
    )
}

export default MessageBar
