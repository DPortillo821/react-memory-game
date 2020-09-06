import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    background-color: #162447;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 1rem;

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

const Card = ({ imgUri, onCardClick }) => {
    return <Container onClick={onCardClick}>{<Image src={imgUri} />}</Container>
}

export default Card
