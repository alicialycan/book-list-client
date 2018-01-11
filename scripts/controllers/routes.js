page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListView.init(books)
    })
})
page('/books/new', () => console.log('book new'))
page('/books/:id', () => console.log('book one'))

page.start()