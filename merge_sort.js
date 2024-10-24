//merge sort function in ascending order
function mergeSort (inventory,key,isAscending = true){
    if(inventory.length <=1){
        return inventory
    }

let left = mergeSort(inventory.slice(0,mid),key,isAscending)
let right = mergeSort(inventory.slice(mid),key,isAscending)
return merge(left,right,key,isAscending);

}

//place merged arrays in a new array (?)
    function merge(left,right,key,isAscending){
let resultInventory = []
let leftIndex = 0 //initialises the left index at 0
let rightIndex = 0 //initialises the right index at 0

while (leftIndex<left.length && rightIndex < right.length) { //inserts smallest item into new array
    if(isAscending){
        if(left[leftIndex][key]<= right[rightIndex][key]){
            resultInventory.push(left[leftIndex])
            leftIndex++
        } else {
        resultInventory.push(right[rightIndex])
        rightIndex++;
        }
    }
return [...resultInventory, ...left, ...right]    } //spread operation combines three arrays and creates a new one}
    }