//sort array
inventory.sort((a,b) => a.id - b.id)

//define recursive function
let recursiveFunction = function(inventory,x,start,end){
//define that the starting index is greater than the ending index and return false
    if (start>end){
    return false}
//find middle index
let mid = Math.floor ((start+end)/2)
//compare middle element to x element
if (inventory[mid] === x){
    console.log("Element found!")
    return true
}
if (inventory[mid] > x){
    return recursiveFunction(inventory,x,start,mid-1) //searches the left half of mid if mid element is greater than x
} else {return recursiveFunction(inventory,x,mid+1,end) // searches the right side of mid if mid element is smaller than x

}
}