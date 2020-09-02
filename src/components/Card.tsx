import React from 'react'

import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: #162447;
    display: grid;
    justify-items: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`

const Image = styled.img`
    object-fit: cover;
    max-width: 95%;
    max-height: 95%;
`

const Card = ({ imgUri, onCardClick }) => {
    return (
        <CardContainer onClick={onCardClick}>
            {<Image src={imgUri} />}
        </CardContainer>
    )
}

export default Card
