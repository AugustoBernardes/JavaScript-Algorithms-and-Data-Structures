function ArrayList(){
    let array = []

    this.insert = function(item){
        array.push(item)
    }

    this.toString = function(){
        return array.join()
    }

    // Input [5,4,3,2,1]
    this.bubbleSort = function(){
        // Esse for está andando até o penultimo item do array , pois o ultimo não teria proximo index para comparação
        for(let i = 0; i < array.length - 1; i++){
            for(let j = 0; j < array.length - 1; j++){
                // Valida se o proximo index é maior que o atual
                if(array[j] > array[j + 1]){
                    swap(array, j, j + 1)
                }
            }
        }
    }

    this.selectionSort = function(){
        let indexMin

        for(let i = 0; i < array.length - 1 ; i++){
            indexMin = i
            for(let j = i; j < array.length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j
                }
            }

            if(i !== indexMin){
                swap(array, i, indexMin)
            }
        }
    }

    // Continua as trocas
    // [4,5,3,2,1]
    // [5,4,3,2,1]
    this.insertionSort = function(){
        let j, temp
        for(i = 1; i < array.length; i++){
            j = i // 1
            temp = array[i]  // [1] -> 4
            //     true     [0] -> 5       4 = true
            while(j > 0 && array[j - 1] > temp){
                //[1] -> 5 
                array[j] = array[j - 1] 
                j-- // 0
            }
            //[0] -> 4
            array[j] = temp
        }
    }

    // Troca os valores exemplo [5,4] - [4,5]
    let swap = function(array,index1,index2){
        let aux = array[index1]

        array[index1] = array[index2]
        array[index2] = aux
    }
}

let arrayList = new ArrayList()

arrayList.insert(5)
arrayList.insert(4)
arrayList.insert(3)
arrayList.insert(2)
arrayList.insert(1)
console.log(arrayList.toString())
// arrayList.bubbleSort()
// arrayList.selectionSort()
arrayList.insertionSort()

console.log(arrayList.toString())