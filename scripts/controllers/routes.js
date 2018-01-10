
page('/*', (ctx, next) => {

    if (localStorage.getItem('token')) {
        $('.protected').show()
    } else {
        $('.protected').hide()
    }

    $('.page').hide()

    $('.nav-menu').slideUp(350);
    
    $('.icon-menu').off().on('click', function() {
        $('.nav-menu').slideToggle(350);
      })

    next()
})

page('/', () => {
    app.Book.fetchAll()
        .then(app.bookListPage.initIndexView)
})

page('/books/new', app.bookCreatePage.init)

page('/error', app.errorPage.init)

page('/admin', app.adminPage.init)

page('/books/:id', (ctx) => {
    app.Book.fetchOne(ctx.params.id)
        .then(app.bookDetailPage.init)
})

page('/books/:id/update', (ctx) => {
    app.Book.fetchOne(ctx.params.id)
        .then(app.bookUpdatePage.init)
})

page.start()
