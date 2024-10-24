class inventoryItem {
   constructor (id, name, quantity, price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
    
   console.log('"ID"+id+,"NAME"+name+ ,"PRICE"+price+, "QUANTITY"+quantity');
}
}

//display inventory: i am really struggling!

/* //display
displayInventory();{
    if (inventoryItem.length === 0){
        console.log("INVENTORY : EMPTY")
    }else console.log("INVENTORY: ")
    this.inventoryItem.forEach(item => {
        console.log('ID: ${item.id}, Name: ${item.name}, Quantity:${item.quantity}, Price: ${item.price}')
    })
}
inventory.displayInventory();
*/

function inventoryDisplay(){
let tableBody = document.querySelector("#inventoryTable tbody")
tableBody.innerHTML = ''
inventory.forEach(item=>{
let row = '<tr> <td> ${item.id}, ${item.name},${item.price}, ${item.quantity} </td></tr>'
tableBody.innerHTML += row;
})
}
window.onload=displayInventory;

let inventory[]
const item1 ={
    ID:1, name:"Hoodie" ,quantity:28,price:350
}

const item2={
    ID:2,name:"T-shirt",quantity:55,price:180
}
const item3={
    ID:3,name:"Belt",quantity:150,price:85
}
inventory.push(item1,item2,item3)
console.log(inventory)


//add
function addItem(id, name, quantity,price){
inventory.push({id,name,quantity,price})
console.log("Item added")}

//adding items using ID
const currentInventory = inventory.findIndex(item=>item.id===id)
if (currentInventory === -1){
    const newItem = {id, name, price,quantity}
    inventory.push(newItem{id,name,quantity,price})
} else {
inventory[existingItemIndex].quantity += quantity;
inventory[existingItemIndex].price = price;
}

// remove using id

