function BinarySearchTree(){
    let Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }

    let root = null

    this.insert = function(key){
        // Insert a key
        let newNode = new Node(key)

        if(root === null){
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }

    let insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }

        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }
    }

    this.search = function(key){
        // Search a key inside tree
        return searchNode(root, key)
    }

    let searchNode = function(node, key){
        if(node === null){
            return false
        }

        if(key < node.key){
            return searchNode(node.left, key)
        }else if(key > node.key){
            return searchNode(node.right, key)
        }else{
            return true
        }
    }

    this.remove = function(key){
        // Remove the key
    }

    this.min = function(){
        // Return smaller key
    }

    this.max = function(){
        // Return bigger key
    }

    this.inOrderTraverse = function(){
        // Visit all tree Nodes using a route in order
    }

    this.preOrderTraverse = function(){
        // Visit all tree Nodes using a pre order route
    }

    this.postOrderTraverse = function(){
          // Visit all tree Nodes using a post order route
    }
}