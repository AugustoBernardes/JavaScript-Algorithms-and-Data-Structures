// Remenber: Always smaller values goes to left and bigger goes to right

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
        if(node.key > newNode.key){
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
        root = removeNode(root, key)
    }

    let removeNode = function(node, key){
        if(node === null){
            return null
        }
        if(key < node.key){
            node.left = removeNode(node.left, key)
            return node
        }else if(key > node.key){
            node.right = removeNode(node.right, key)
            return node
        }else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }
            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }

            let aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node

        }
    }

    let findMinNode = function(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node
    }

    this.min = function(){
        // Return smaller key
        return minNode(root)
    }

    let minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key
        }
        return null
    }
    this.max = function(){
        // Return bigger key
        return maxNode(root)
    }

    let maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }

    this.inOrderTraverse = function(callback){
        // Visit all tree Nodes using a route in order
        inOrderTraverseNode(root, callback)
    }

    let inOrderTraverseNode = function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse =  function(callback){
        // Visit all tree Nodes using a pre order route
        preOrderTraverseNode(root, callback)
    }

    let preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function(callback){
          // Visit all tree Nodes using a post order route
          postOrderTraverseNode(root, callback)
    }
    let postOrderTraverseNode = function(node, callback){
        if(node !== null){
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

}

function printNode(value){
    console.log(value)
}

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(8)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(2)
tree.insert(4)

// console.log(tree.search(2))
// console.log(tree.min())
// console.log(tree.search(15))
// console.log(tree.max())

tree.inOrderTraverse(printNode)

console.log('------')
tree.remove(5)

tree.inOrderTraverse(printNode)
