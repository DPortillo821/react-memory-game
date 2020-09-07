import React from 'react'

import styled from 'styled-components'

import useGame from '../hooks/useGame'

import { formatTime } from '../utils/formattingUtils'

const RunningTime = styled.p`
    color: white;
    font-size: 1rem;
`

const Stopwatch = () => {
    const { runningTime } = useGame()

    return <RunningTime>{formatTime(runningTime)}s</RunningTime>
}

export default Stopwatch
