
page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', () => {
    app.Book.fetchAll()
        .then(app.bookListPage.initIndexView)
})

page('/about', app.aboutPage.init)

page('/books/create', app.bookCreatePage.init)

page('/error', app.errorPage.init)

page('/admin', app.adminPage.init)

page('/books/:id', (ctx) => {
    app.Book.fetchOne(ctx.params.id)
        .then(app.bookDetailsPage.init)
})

page('/books/:id/update', (ctx) => {
    app.Book.fetchOne(ctx.params.id)
        .then(app.bookUpdatePage.init)
})

page.start()
