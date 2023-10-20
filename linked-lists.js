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

    this.insert =  function(element){
        // Add a element at a specific position
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
    }

    this.indexOf = function(element){
        // return element position
    }

    this.isEmpty = function(){
        // Return if instance is empty or not
    }

    this.size = function(){
        // Return instance lenght
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

const linkedList = new LinkedList()

linkedList.append('Joao')
linkedList.append('Jose')
linkedList.append('Maria')
linkedList.print()
linkedList.removeAt(1)
linkedList.print()