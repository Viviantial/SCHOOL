//declaring search by id function

//loop through inventory to find item by id
function linearSearchById(inventory, searchId){
    for (let i = 0; i < inventory.length; i++){
        if (inventory[i].id === searchId) {
//print 'item found by ID'
            console.log('Item found by ID: $JSON.stringify(inventory[i])}')
        return inventory[i]
        }
    }
}
function searchItemById(){
    const searchId = parseInt(document.getElementById('searchId').value)
    const foundItem = linearSearchById(inventory.searchId)
    if (foundItem){
        console.log('Item found by ID: $(JSON.stringify(foundItem')}
        else {
            console.log('Item not found by ID')
        }
    }
