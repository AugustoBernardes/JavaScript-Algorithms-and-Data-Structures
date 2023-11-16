function xpCalculator(monsterLevel, battleDifficulty){

    if(battleDifficulty > 0 && battleDifficulty <= 100){
        const xpEarned = (monsterLevel * battleDifficulty) * 100
        return `You earned: ${xpEarned} XP!`
    }
    return  `Battle difficulty must be between 1 and 100`
}

const response = xpCalculator(41, 1)
console.log(response)

