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

    // [ 5,4,3,2,1]
    this.mergeSort = function(){
        array = mergeSortRec(array)
    }

    let mergeSortRec = function(array){
        let length = array.length

        if(length === 1){
            return array
        }

        let mid = Math.floor(length / 2)
        let left = array.slice(0, mid)
        let right = array.slice(mid,length)

        return merge(mergeSortRec(left), mergeSortRec(right))
    }

    let merge = function(left, right){
        let result = [];
        let il = 0
        let ir = 0

        while(il < left.length && ir < right.length){
            if(left[il] < right[ir]){
                result.push(left[il++])
            }else{
                result.push(right[ir++])
            }
        }

        while(il < left.length){
            result.push(left[il++])
        }

        while(ir < right.length){
            result.push(right[ir++])
        }

        return result

    }

    this.quickSortFunc = function(){
        array = quickSort(array)
    }

    let quickSort = function(arr){
        if (arr.length <= 1) {
        return arr;
        }
    
        const pivot = arr[0];
        const left = [];
        const right = [];
    
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
        }
    
        return [...quickSort(left), pivot, ...quickSort(right)];
    }

    // Troca os valores exemplo [5,4] - [4,5]
    let swap = function(array,index1,index2){
        let aux = array[index1]

        array[index1] = array[index2]
        array[index2] = aux
    }
}

let arrayList = new ArrayList()

arrayList.insert(8)
arrayList.insert(7)
arrayList.insert(6)
arrayList.insert(5)
arrayList.insert(4)
arrayList.insert(3)
arrayList.insert(2)
arrayList.insert(1)
console.log(arrayList.toString())
// arrayList.bubbleSort()
// arrayList.selectionSort()
// arrayList.insertionSort()
// arrayList.mergeSort()
arrayList.quickSortFunc()
console.log(arrayList.toString())

  