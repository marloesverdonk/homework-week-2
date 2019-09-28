class ShoppingCart {
  constructor(){
    this.items = []
  }
  getItems(){
    return this.items
  }
  addItem(itemName, quantity, price){
    return this.items.push(
      {
        name: itemName,
        quantity: quantity,
        pricePerUnit: price
      }
    )
  }
  clear(){
    this.items = []
  }
  total(){
    return this.items
    .reduce((totalValueShoppingCart, currentItem) => 
    totalValueShoppingCart + (currentItem.quantity * currentItem.pricePerUnit), 0)
  }
}

const cart = new ShoppingCart

module.exports = ShoppingCart

