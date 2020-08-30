import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
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
    return <Wrapper onClick={onCardClick}>{<Image src={imgUri} />}</Wrapper>
}

export default Card
