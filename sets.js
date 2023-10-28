function Set(){
    let items = {}

    this.add = function(value){
        // add new item to the set
        if(!this.has(value)){
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function(value){
        // remove a value from set
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value) {
        //return if value exists or not on set
        return items.hasOwnProperty(value)
    }

    this.clear = function(){
        //remove all set items
        items = {}
    }

    this.size = function(){
        //return set size
        return Object.keys(items).length
    }

    this.values = function(){
        // return array with all values on set
        let values = [],
        keys = Object.keys(items)

        for(let i = 0; i < keys.length; i++ ){
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function(otherSet){
        let unionSet = new Set()
        values = this.values()

        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for(let i = 0; i < values.length; i++){
            console.log({
                test: values[i]
            })
            unionSet.add(values[i]) 
        }

        return unionSet
    }
} 

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(4)
setB.add(5)
setB.add(6)

const unionAB = setA.union(setB)
console.log(unionAB.values())