
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

function Dictionary(){
    let items = {}

    this.set = function(key, value){
        // Add new item at dictionary
        items[key] = value
    }

    this.delete = function(key){
        // remove dictionary item using key
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key){
        // verify if key exists and return a boolean
        return items.hasOwnProperty(key)
    }

    this.get = function(key){
        // return a value located at key
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function(){
        // return all dictionary items
        items = {}
    }

    this.size = function(){
        // return dictionary size
        return Object.keys(items).length
    }

    this.keys = function(){
        // return a array with all dictionary keys
        return Object.keys(items)
    }

    this.values = function(){
        // return all dictionary values
        let values = [],
        keys = Object.keys(items)

        for(let i = 0; i < keys.length; i++){
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function(){
        return items
    }
}

function Graph(){
    let vertices = []
    let adjList = new Dictionary()
    this.addVertex = function(v){
        vertices.push(v)
        adjList.set(v, [])
    }

    this.addEdge = function(v, w){
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function(){
        let s = ''

        for(let i = 0; i < vertices.length; i++){
            s+= `${vertices[i]} -> `

            let neighbors = adjList.get(vertices[i])
            for(let j = 0; j < neighbors.length; j++){
                s+= `${neighbors[j]} `
            }
            s +='\n'
        }

        return s
    }

    let initializeColor = function(){
        let color = []

        // Here is setting color white to all vertices (White = Not found vertex)
        for(let i = 0; i < vertices.length; i++){
            color[vertices[i]] = 'white'
        }
        return color
    }

    // Breadth First Search - Busca por largura
    this.bfs = function(v,callback){
        let color = initializeColor(),
        queue = new Queue()

        queue.enqueue(v)

        while(!queue.isEmpty()){
            let currentVertex = queue.dequeue()
            let currentVertexNeighbors = adjList.get(currentVertex)
            // When color grey is setted is because whe are working on this vertex
            color[currentVertex] = 'grey'

            for(let i = 0 ; i < currentVertexNeighbors.length; i++){
                let vertexNeighbor = currentVertexNeighbors[i]

                if(color[vertexNeighbor] === 'white'){
                    color[vertexNeighbor] = 'grey'
                    queue.enqueue(vertexNeighbor)
                }
            }
            // When color black is setted is because vertex was already found (He will not be used anymore)
            color[currentVertex] = 'black'
            // Print current vertex
            callback(currentVertex)
        }
    }

    // Depth First Search - Busca por profundidade
    this.dfs = function(callback){
        let color = initializeColor()
        for(let i = 0; i < vertices.length; i++){
            if(color[vertices[i]] === 'white'){
                dfsVisit(vertices[i], color, callback)
            }
        }
    }


    // Stack - Vem emplilhando os metodos até chegar no node mais fundo
    // I - white -> grey (neighbors = [E])
    // E - white -> grey (neighbors = [B,I])
    // B - white -> grey (neighbors = [A,E,F])
    // A - white -> grey (neighbors = [B,C,D])

    // Depois vem desemplilhando e caindo fora do for pois não existe mais vizinhos que não foram visitados
    // I - grey -> black - Remove da pilha
    // E - grey -> black - Remove da pilha
    // B - grey -> black  - Remove da pilha
    // A - grey -> black - Continua nos proximos vizinhos ([C,D])
    
    // console -> A, B, E, I

    let dfsVisit = function(u, color, callback){
        color[u] = 'grey'
        callback(u)

        let neighbors = adjList.get(u)

        for(let i = 0; i < neighbors.length; i++){
            let w = neighbors[i]

            if(color[w] === 'white'){
                dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }
}

function printNode(value){
    console.log(`Visited Vertex: ${value}`)
}

const graph = new Graph()
let myVertices = ['A','B','C','D','E','F','G','H','I']
for(let i = 0; i < myVertices.length ; i++){
    graph.addVertex(myVertices[i])
}

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')

// console.log(graph.toString())
// graph.bfs(myVertices[0], printNode)
graph.dfs(printNode)

