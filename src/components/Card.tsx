import React from 'react'

import styled from 'styled-components'

import useGame from '../hooks/useGame'

type ContainerProps = {
    hasLost: boolean
    hasWon: boolean
}

const Container = styled.div<ContainerProps>`
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 1rem;
    background-color: ${(props) => {
        if (props.hasLost) {
            return '#e94560'
        } else if (props.hasWon) {
            return 'green'
        } else {
            return '#162447'
        }
    }};

    &:hover {
        cursor: pointer;
    }
`

const Image = styled.img`
    object-fit: cover;
    border-radius: 1rem;
    max-width: 95%;
    max-height: 95%;
`

const Card = ({ imgUrl, onClick }) => {
    const { hasLost, hasWon } = useGame()
    return (
        <Container hasLost={hasLost} hasWon={hasWon} onClick={onClick}>
            {<Image src={imgUrl} />}
        </Container>
    )
}

export default Card
