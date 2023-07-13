const Product = require("./Product");

module.exports = class Poster extends Product {
    constructor(name, discription, height, width, price, inStock = 0) {
        super(name, discription, price, inStock)
        this.height = height
        this.width = width
    }
}