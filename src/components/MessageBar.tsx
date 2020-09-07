import React from 'react'

import styled from 'styled-components'

import useGame from '../hooks/useGame'

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: #1f4068;
`

const Message = styled.p`
    color: white;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
`

const MessageBar = () => {
    const { message } = useGame()

    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}

export default MessageBar
