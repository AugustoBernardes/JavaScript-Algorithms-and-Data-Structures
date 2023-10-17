// Stacks

// stacks use the LIFO way , First In Last Out
// It's exacly what it means when you put a book first ona  stack
// it will be the last to be removed

function Stack(){
    let items = []

    this.push = function(element){
        // Add new item inside stack
        items.push(element)
    }

    this.pop = function(){
        // Remove item from top of stack
       return items.pop()
    }

    this.peek = function(){
        // Return the element located on top of stack
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        // Say if stack is empty or not
        return items.length === 0 
    }

    this.clear = function(){
        // Clean all stack
        items = []
    }

    this.size = function(){
        // Say the stack length
        return items.length
    }

    this.print = function(){
        // Print stack on console
       console.log(items.toString())
    }
}

const stack = new Stack()

stack.push(10)
stack.push(9)
stack.push(8)
stack.push(7)
stack.push(6)

console.log(stack.isEmpty())

// Exercise decimal number to binary

// Initial Number: 22
function dec2Bin(decNumber){// 1
    let restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2) // 1
        restStack.push(rest) //[0,1, 1, 0, 1]
        decNumber = Math.floor(decNumber / 2) //0
    }

    while(restStack.length > 0){ //5
        binaryString += restStack.pop().toString() // 1 0 1 1 0
    }

    return binaryString
}

console.log(dec2Bin(22))

// Exercise base converter

function baseConverter(decNumber,base){//78
    let restStack = [],
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0){//0
        rest = Math.floor(decNumber % base) // 4
        restStack.push(rest) // [14,4]
        decNumber = Math.floor(decNumber / base) // 0
    }

    while(restStack.length > 0){
        baseString += digits[restStack.pop()] // 4
    }

    return baseString
}

console.log(baseConverter(78, 16))