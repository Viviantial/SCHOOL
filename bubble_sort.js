//BUBBLE SORT CODE TASK 2
//declaring ascending and descending orders
//ascending
let swapped;
let n = inventory.length;

do {swapped = false;
    for (let i = 0; i < n -1;i++) {
        if (inventory[i][key] > inventory[i+1][key]){
let temp = inventory[i];
inventory[i] = inventory[i +1]
inventory[1 + i] = temp;
        swapped = true;
    }
    }
      n--;
} while(swapped);

//descending
do {swapped = false;
    for (let i = 0; i < n -1;i++) {
        if (inventory[i][key] < inventory[i+1][key]){
let temp = arr[i];
inventory[i] = inventory[i +1]
inventory[1 + i] = temp;
        swapped = true;
    }
    }
      n--;
} while(swapped);

//applying functions
function sortByName(){
    bubbleSortAscending(inventory, 'name');
    displayInventory()
}
function sortByQuantity(){
    bubbleSortDescending(inventory,'quantity')
    displayInventory()
}
function sortByID(){
bubbleSortAscending(inventory,'id')
}
