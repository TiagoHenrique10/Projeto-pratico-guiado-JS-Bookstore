module.exports = class Product {
    constructor(name, discription, price, inStock = 0) {
        this.name = name
        this.discription = discription
        this.price = price
        this.inStock = inStock
    }
    addToStock(quantity) {
        this.inStock += quantity
      }
    
    removeFromStock(quantity) {
        this.inStock -= quantity
      }
}