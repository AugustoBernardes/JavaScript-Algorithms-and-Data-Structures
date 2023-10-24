function DoublyLinkedList(){
    const Node = function(element){
        this.element = element
        this.next = null
        this.prev = null
    }  

    let lenght =   0
    let head = null
    let tail = null

    this.append = function(element){
        // Add a element at list end
        let node = new Node(element),
        current

        if(head === null){
            head = node
            tail = node
        }else{
            current = head

            while(current.next){
                current = current.next
            }
            current.next = node
            tail = node
        }

        lenght++
    }

    this.insert =  function(element, position){
        //dll
        if(position >= 0 && position <= lenght){
            let node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0){
                if(!head === true){
                    head = node
                    tail = node
                }else{
                    node.next = current
                    current.prev = node
                    head = node
                }
            }else if(position === lenght){
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }else{
                while(index < position){
                    previous = current
                    current = current.next
    
                    index++
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            lenght++
            return true
            
        }else{
            return false
        }

    }

    this.removeAt = function(position){ // 1 
       //dll
    }

    this.remove = function(element){
        // Remove the choosen element
        let index = this.indexOf(element)
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

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append('Joao')
doublyLinkedList.append('Jose')
doublyLinkedList.append('Maria')
doublyLinkedList.insert('Carlos',0)
doublyLinkedList.insert('Carlos1',0)
doublyLinkedList.insert('Chefe',2)
doublyLinkedList.print()
