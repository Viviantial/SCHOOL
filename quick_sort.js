//quick sort function in ascending order
function quickSort(array,key,isAscending = true){
if (inventory.length <= 1){
    return inventory;
}
let pivot = inventory(inventory.length -1)
let left = []
let right = []
for (let i = 0; i < inventory.length -1; i++){
    if(inventory[i][key]<=pivot[key]){
        left.push(inventory[i])
    }else {
        right.push(inventory[i])
    }
}
} return [...quickSort(left, key),pivot, ...quickSort(right,key) ]