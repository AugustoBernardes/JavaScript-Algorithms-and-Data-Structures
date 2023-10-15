

// Creating arrays
const avgTemp = []

avgTemp[0] = 39.7;
avgTemp[1] = 42.2;
avgTemp[2] = 45;
avgTemp[3] = 48.5;
avgTemp[4] = 52.1;

console.log({avgTemp})

const daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');


for(let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}


// Accessing  arrays through interaction
const fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log([fibonacci])


// Inserting and removing elements
const numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[numbers.length] = 10
numbers[numbers.length] = 11
numbers.push(12)
numbers.unshift(-1)

// Remove last element
numbers.pop()
// Remove first element
numbers.shift()

// With splice you choose when you want cut your array and amount of number
numbers.splice(3,3)
console.log({numbers})

// With splice we can add new elements too , we select the position , set 0 to say will not be deleted any number, and after set the values
numbers.splice(3,0,3,4,5)
console.log({numbers})

// Bidimensional Arrays
const avgTempWeek = []

const avgTempWeek1  = [33, 25.2, 19, 27, 23.4, 41.6, 25]
const avgTempWeek2  = [41, 49, 29, 33, 21.2, 19.5, 17]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

console.log({avgTempWeek:avgTempWeek[1][4]})

// Print all results

// My Solution:
for(let i = 0; i < avgTempWeek.length; i++){
    const currentArray = avgTempWeek[i]
    currentArray.forEach(element => {
        console.log(element)
    });
}

// Course Solution
for(let i = 0; i < avgTempWeek.length; i++){
  
    for(let j = 0; j < avgTempWeek[i]; j++){
        console.log(avgTempWeek[i][j])
    }
}

// Three-dimensional arrays

let month = []

let firstWeeks = []
let lastWeeks = []

const avgTempWeek3  = [13, 25.2, 19, 89, 23.4, 12.4, 25]
const avgTempWeek4  = [55, 49, 29, 10, 21.2, 13.3, 17]

const avgTempWeek5  = [11, 12.2, 98, 89, 23.4, 76.4, 25]
const avgTempWeek6  = [64, 49, 22, 10, 32.2, 9.3, 26]

firstWeeks = [avgTempWeek3, avgTempWeek4]
lastWeeks = [avgTempWeek5, avgTempWeek6]

month = [firstWeeks, lastWeeks]

console.log({month})
console.log({choosenValue: month[1][1][5]})

// Exercise - Read all values from a three-dimensional array

// My Solution
for(let i = 0; i < month.length; i++){
    const weekRange = month[i]
    weekRange.forEach(week => {
        week.forEach(day => {
            console.log(day)
        })
    });
}

// Course Solution
for(let x = 0; x < month.length;  x++){
    for(let y = 0; y < month[x].length; y++){
        for(let z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}