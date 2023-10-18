
// How queue works , so queue are diferente from stacks, it's used the FIFO concept 
// First In First Out

function Queue(){
    let items = []

    this.enqueue = function(element){
        // Add new item
        items.push(element)
    }

    this.dequeue = function(){
        // Remove item
        return items.shift()
    }

    this.front = function(){
        // Return first queue element
        return items[0]
    }

    this.isEmpty = function(){
        //  Verify if queue is empty or not
        return items.length === 0
    }

    this.size = function(){
        // Return queue lenght
        return items.length
    }

    this.print = function(){
        // Print queue on console
        console.log(items.toString())
    }
}

// Exercise Priority Queue
function priorityQueue(){
    let items = []

    function QueueElement(element, priority){
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority)

        let added = false

        for(let i = 0; i < items.length; i++){
            if(queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement)
                added = true
                break
            }
        }

        if(!added){
            items.push(queueElement)
        }
    }

    this.dequeue = function(){
        return items.unshift()
    }

    this.print = function(){
        for(let i = 0; i < items.length; i++){
            console.log(`${items[i].element} ${items[i].priority}`)
        }
    }
}

const pqueue = new priorityQueue()

pqueue.enqueue('Carlos',2)
pqueue.enqueue('Ana',1)
pqueue.enqueue('Lucas',1)

pqueue.print()

// Exercise Hot potato

function hotPotato(nameList,num){
    let queue = new Queue()

    for(let i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i])
    }

    let eliminated = ''

    while(queue.size() > 1){
        for(let i = 0; i < num ; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(`${eliminated} was eliminated from game!`)
    }
    return queue.dequeue( )
}

const names = ['Augusto','Kalleo','Biro','Almeida','Helyas']

const winner = hotPotato(names,6)
console.log(`Winner is ${winner}`)