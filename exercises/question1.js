function heroJourney(initialPosition, stepsLeft){
    return initialPosition + stepsLeft
}

const response = heroJourney(10,6)
console.log(`Hero's final position: ${response}`)
