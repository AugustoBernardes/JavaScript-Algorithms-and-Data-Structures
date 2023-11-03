function LinkedList(){
    const Node = function(element){
        this.element = element
        this.next = null
    }  

    let lenght =   0
    let head = null

    this.append = function(element){
        // Add a element at list end
        let node = new Node(element),
        current

        if(head === null){
            head = node
        }else{
            current = head

            while(current.next){
                current = current.next
            }
            current.next = node
        }

        lenght++
    }

    this.insert =  function(element, position){
        // Add a element at a specific position
        if(position >= 0 && position <= lenght){
            let node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position == 0){
                node.next = head
                head = node
            }else{
                while(index < position){
                    previous = current
                    current = current.next

                    index++
                }
                node.next = current
                previous.next = node
            }
            lenght++
            return true
        }else{
            return false
        }
    }

    this.removeAt = function(position){ // 1 
        // Remove a element froma specific position
        if(position > -1 && position < lenght){ // true
            let current = head,// node1 = { element: joao, next: node2}
            previous,
            index = 0

            if(position === 0){ //false
                head = current.next 
            }else{
                while(index < position){ // 1 < 1 - false
                    previous = current // node1 = { element: joao, next: node2}
                    current = current.next // node 2{ element: Jose, next: node3 }
                    index++
                }
                previous.next = current.next // node1.next = José - node2.next - Ana (Convert node1 next to node2 next )
            }
            lenght--
            return current.element
        }else{
            return null
        }
    }

    this.remove = function(element){
        // Remove the choosen element
        let index = this.indexOf(element)
        console.log({element,index})
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        // return element position
        let current = head,
        index = 0

        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function(){
        // Return if instance is empty or not
        return lenght === 0
    }

    this.size = function(){
        // Return instance lenght
        return lenght
    }

    this.getHead = function(){
        // Return head data
        return head
    }

    this.toString = function(){
        let current = head,
        string = ''

        while(current){

            string += current.element + ' '
            current  = current.next
        }

        return string
    }

    this.print = function(){
        // Print on console
        console.log(this.toString())
    }
}

function HashTable(){
    let table = []

    let ValuePair = function(key,value){
        this.key = key
        this.value = value
        this.toString = function(){
            return `[${this.key} - ${this.value}]`
        }
    }

    this.put  = function(key, value){
        //Inset element 
        let position = loseloseHashCode(key)

        if(table[position] === undefined){
            table[position] = new LinkedList()
        }

        table[position].append(new ValuePair(key, value))
    }


    // this.put  = function(key, value){
    //     //Inset element 
    //     let position = loseloseHashCode(key)
    //     table[position] = value
    //     console.log(`${position} - ${value}`)
    // }

    // this.remove = function(key){
    //     // Remove element by his key
    //     table[loseloseHashCode(key)] = undefined
    // }

    this.remove = function(key){
        // Remove element by his key
        let position = loseloseHashCode(key)

        if(table[position] !== undefined){
            let current = table[position].getHead()

            while(current.next){
                if(current.element.key === key){
                    table[position].remove(current.element)

                    if(table[position].isEmpty()){
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }

            if(current.element.key === key){
                table[position].remove(current.element)

                if(table[position].isEmpty()){
                    table[position] = undefined
                }
                return true
            }
            
        }
        return false
    }

    // this.get = function(key){
    //     // Return a value by his key
    //     return table[loseloseHashCode(key)]
    // }

    this.get = function(key){
        // Return a value by his key
        let position = loseloseHashCode(key)

        if(table[position] !== undefined){
            let current = table[position].getHead()

            while(current.next){
                console.log({current})
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next
            }

            if(current.element.key === key){
                return current.element.value
            }
        }
        return undefined
    }

    let loseloseHashCode = function(key){
        // Return hash (numeric value)

        let hash = 0

        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
            // console.log(`${key[i]} - ${key.charCodeAt(i)}`)
        }
        return hash % 37
    }

    this.size = function(){
        return table.length
    }

    this.print = function(){
        for(let i = 0; i < table.length; i++){
  
            if(table[i] !== undefined){
                console.log(`${i}: ${table[i]} `)
            }
        }
    }
}

let hash = new HashTable()

hash.put('Joao', 'joao@gmail.com')
hash.put('Carlos','carlos@gmail.com')
hash.put('Maria','maria@gmail.com')
hash.put('Kennedy','kennedy@gmail.com')
hash.put('Travis','travis@gmail.com')
hash.put('Ana','ana@gmail.com')
hash.put('Donnie','donnie@gmail.com')
hash.put('Mindy','mindy@gmail.com')
hash.put('Paul','paul@gmail.com')

console.log('.')
console.log({Response: hash.print()})
hash.remove('Mindy')
