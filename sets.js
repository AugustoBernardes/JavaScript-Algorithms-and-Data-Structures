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

    this.intersection = function(otherSet) {
        let intersectionSet = new Set(),
        values = this.values()

        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i]) ){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    this.diferrence = function(otherSet) {
        let diferrenceSet = new Set(),
        values = this.values()

        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i]) ){
                diferrenceSet.add(values[i])
            }
        }
        return diferrenceSet
    }

    this.subset = function(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            let values = this.values()

            for(let i = 0; i < values.length; i++){
                console.log(i)
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }

    }
} 

// Union
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


// Intersection
const setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)

const setD = new Set()
setD.add(2)
setD.add(3)
setD.add(4)
setD.add(5)
setD.add(6)

const intersectionCD = setC.intersection(setD)
console.log(intersectionCD.values())

// Difference
const setE = new Set()
setE.add(1)
setE.add(2)
setE.add(3)

const setF = new Set()
setF.add(2)
setF.add(3)
setF.add(4)

const differenceEF = setE.diferrence(setF)
const differenceFE = setF.diferrence(setE)
console.log({differenceEF: differenceEF.values()})
console.log({differenceFE: differenceFE.values()})


// Subset
const setG = new Set()
setG.add(1)
setG.add(2)

const setH = new Set()
setH.add(1)
setH.add(2)
setH.add(3)

const setI = new Set()
setI.add(2)
setI.add(3)
setI.add(4)

console.log(setG.subset(setH))

console.log(setG.subset(setI))