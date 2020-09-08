import React from 'react'

import styled from 'styled-components'

import Card from './Card'

import { Character } from '../contexts/GameContext'

import useGame from '../hooks/useGame'

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 250px);
    grid-template-columns: repeat(3, 250px);
    row-gap: 1rem;
    column-gap: 1rem;
    justify-content: center;
    align-content: center;
    background-color: #121212;
    padding: 1rem;
`

const CardList = () => {
    const { selectCard, characters } = useGame()

    return (
        <Container>
            {characters.map((character: Character) => (
                <Card
                    key={character.id}
                    imgUrl={character.imgUrl}
                    onClick={() => selectCard(character)}
                />
            ))}
        </Container>
    )
}

export default CardList
