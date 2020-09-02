import React, { useContext } from 'react'

import styled from 'styled-components'

import Card from './Card'

import { GameContext } from '../contexts/GameContext'

import useCard from '../hooks/useCard'

const CardListContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(3, minmax(auto, 250px));
    row-gap: 1rem;
    column-gap: 1rem;
    justify-content: center;
    align-content: center;
    background-color: #121212;
    padding: 1rem;
`

const CardList = () => {
    const [state] = useContext<any>(GameContext)
    const { tapCard } = useCard()

    return (
        <CardListContainer>
            {state.characters.map((character) => (
                <Card
                    key={character.id}
                    imgUri={character.imgUri}
                    onCardClick={() => tapCard(character)}
                />
            ))}
        </CardListContainer>
    )
}

export default CardList
