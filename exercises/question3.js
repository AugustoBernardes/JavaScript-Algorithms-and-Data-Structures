const validPokemon  = [
    {
        id: 1,
        name: 'Bulbasaur'
    },{
        id: 2,
        name: 'Charmander'
    },{
        id: 4,
        name: 'Pikachu'
    },{
        id: 5,
        name: 'Mewtwo'
    },

]

function choosePokemon(option){

    const currentPokemon = validPokemon.filter(pokemon => {
        return pokemon.id === option
    })

    if(!currentPokemon[0]){
        return 'Choose only valid options'
    }

    return `You chose ${currentPokemon[0].name} as your starting Pokemon.`

}

console.log({response: choosePokemon(5)})
