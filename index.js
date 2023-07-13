const App = require("./App");

const app = new App()

app.createAuthor('J.R.R Tolkien', 'British', 'Lorem ipsum dolor...')
app.createAuthor('Rick Riordan', 'American', 'Lorem ipsum dolor...')

const authors = app.getAuthors()

app.createBook('O hobbit', 'Lorem ipsum dolor sit amet...', 'fantasy', 300, authors[0], 'Lorem ipsum dolor...', 19.99, 100)
app.createBook('A Sociedade do Anel','Lorem ipsum dolor sit amet...', 'fantasy', 400, authors[0], 'Lorem ipsum dolor...', 24.99, 100)
app.createBook('O Ladão de Raios', 'Lorem ipsum dolor sit amet...', 'fantasy', 500, authors[1], 'Lorem ipsum dolor...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', 'Lorem ipsum dolor sit amet...', 'fantasy', 600, authors[1], 'Lorem ipsum dolor...', 24.99, 200)

const books = app.getBooks()

app.createUser('Tiago', 'tiago@gmail.com', '123456')

const users = app.getUsers()

app.showDatabese()

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[3],
        quantity: 1
    }
]

app.createOrder(items, users[0])
app.showDatabese()