
function BinaryTree(){

    let root = null
    let Node = function(key){
        this.key = key
        this.right = null
        this.left = null
    }

    this.insert = function(key){
        let newNode = new Node(key)
        
        if(!root){
           root = newNode
        }else{
            insertNode(root, newNode)
        }
    }

    let insertNode = function(currentNode, newNode){
        if(newNode.key < currentNode.key){
            if(!currentNode.left){
                currentNode.left = newNode
            }else{
                insertNode(currentNode.left, newNode)
            }
        }else{
            if(!currentNode.right){
                currentNode.right = newNode
            }else{
                insertNode(currentNode.right, newNode)
            }
        }
    }

    this.search = function(key){
        if(!key){
            return false
        }
        return searchNode(root, key)
    }

    let searchNode = function(currentNode, key){
        if(!currentNode){
            return false
        }

        if(key < currentNode.key){
            return searchNode(currentNode.left, key)
        }else if(key > currentNode.key){
            return searchNode(currentNode.right, key)
        }else{
            return true
        }
    }

    this.returnRoot = function(){
        return root
    }

}

const tree = new BinaryTree()

tree.insert(11)
tree.insert(10)
tree.insert(12)
tree.insert(23)
tree.insert(9)
tree.insert(7)

console.log(tree.search(7))

