function rollDie(numRolls, numSides) {
    //this function is a for loop that will roll a (numSides) die (numRoll) times
    let result = 0
    for(let step = 0; step < numRolls; step++){
        result += (1 + Math.floor(Math.random()*numSides))
    }
    console.log(result);
    return result
}
