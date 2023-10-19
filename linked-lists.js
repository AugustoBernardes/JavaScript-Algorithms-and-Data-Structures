function linkedList(){
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

    this.removeAt = function(position){
        // Remove a element froma specific position
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