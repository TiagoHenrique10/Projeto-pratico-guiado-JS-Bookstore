const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(title, synopsis, genre, pages, author, discription, price, inStock = 0) {
        super(`Livro ${title}`, discription, price, inStock)
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}