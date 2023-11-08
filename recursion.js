function factorial(n) {
    if(n === 1){
        return n
    }else{
        return n * factorial(n - 1)
    }
}

console.log({response : factorial(6)})

// How recursion works ?
// When you use recursion the function need to create a stack to when it receive a value start to work on it example

// f(1) return 1
// f(2) 2 * factorial(1) = 1 -> (2 * 1 = 2)
// f(3) 3 * factorial(2) = 2 -> (3 * 2 = 6)
// f(4) 4 * factorial(3) = 6 -> (4 * 6 = 24)
// f(5) 5 * factorial(4) = 24 -> (5 * 24 = 120)
// f(6) 6 * factorial(5) = 120 -> (6 * 120 = 720)

// Factorial of 6 is 720
// This is how FILO works (Firs in Last Out)