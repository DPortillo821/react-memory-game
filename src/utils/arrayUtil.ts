export function shuffleArray(array) {
    let arrayCopy = [...array]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arrayCopy[i]
        arrayCopy[i] = arrayCopy[j]
        arrayCopy[j] = temp
    }
    return arrayCopy
}

export function getRandomSubarray(array, size) {
    return shuffleArray(array).slice(0, size)
}
