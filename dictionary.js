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

let dic = new Dictionary()

dic.set('eu','eu@gmail.com')
dic.set('voce','voce@gmail.com')
dic.set('nos','nos@gmail.com')

console.log(dic.has('eu'))
console.log(dic.values())
console.log(dic.get('nos'))
console.log(dic.keys())

dic.clear()
console.log(dic.values())