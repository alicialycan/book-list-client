var app = app || {};

(module => {

    const bookDetailPage = {}

    const $page = $('#book-detail-page')

    const template = Handlebars.compile($('#book-detail-template').text())

    bookDetailPage.init = (book) => {

        $page.empty()

        $page.append(template(book))

        if (!localStorage.getItem('token')) {
            $page.find('.protected').hide()
        }

        $page.show()

        $page.off()
        
        $page.on('click', '#update-btn', () => {
            page(`/books/${book.book_id}/update`)
        })

        $page.on('click', '#delete-btn', () => {
            app.Book.deleteOne(book.book_id).then(() => page('/'))
        })
    }

    module.bookDetailPage = bookDetailPage
    
})(app)
