const readline = require('readline');
let rl = readline.createInterface(
    process.stdin, process.stdout);

const minerals = [
  { id: 1, name: 'Coal' },
  { id: 2, name: 'Iron' },
  { id: 3, name: 'Diamond' },
  { id: 4, name: 'Stone' }
];


function minerGame(currentMinerals, callback){


    callback(currentMinerals)

    if(!currentMinerals.length){
        console.log(`Congratulations, you've mined everything!`)
        rl.close()
        return
    }

    rl.question('Which mineral do you want to mine?', (option) => {

        option = Number(option)
        let validMinerals = currentMinerals.map(mineral => {
            return mineral.id
        })
        
        let isValid =  validMinerals.includes(option)

        if(isValid){
            currentMinerals = currentMinerals.filter(mineral => {
               return mineral.id !== option
            })
            minerGame(currentMinerals, callback)
        }else{
            console.log(`Choose a valid option.`)
            minerGame(currentMinerals, callback)
        }
    })
}

const printOptions = (options) => {
    let string = '';
    options.forEach(option => {
        string += `${option.id}: ${option.name} \n`
    });
    console.log(string)
}

minerGame([...minerals], printOptions)
