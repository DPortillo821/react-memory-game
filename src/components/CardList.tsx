import React from 'react'

import styled from 'styled-components'

import Card from './Card'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, minmax(auto, 250px));
    row-gap: 1rem;
    column-gap: 1rem;
    justify-content: center;
    align-content: center;
    background-color: #121212;
    padding: 1rem;
`

const CardList = ({ characters, onCardClick }) => {
    return (
        <Wrapper>
            {characters.map((character) => (
                <Card
                    key={character.id}
                    imgUri={character.imgUri}
                    onCardClick={() => onCardClick(character)}
                />
            ))}
        </Wrapper>
    )
}

export default CardList
