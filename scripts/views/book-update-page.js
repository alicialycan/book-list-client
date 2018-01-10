var app = app || {};

(module => {

    const bookUpdatePage = {}

    const $page = $('#book-update-page')

    bookUpdatePage.init = book => {

        // TODO: better in Handlebars?
        $('#update-form input[name="title"]').val(book.title);
        $('#update-form input[name="author"]').val(book.author);
        $('#update-form input[name="isbn"]').val(book.isbn);
        $('#update-form input[name="image_url"]').val(book.image_url);
        $('#update-form textarea[name="description"]').val(book.description);

        $page.off().on('submit', (event) => {

            event.preventDefault()

            book.title = $('#update-form input[name="title"]').val()
            book.author = $('#update-form input[name="author"]').val()
            book.isbn = $('#update-form input[name="isbn"]').val()
            book.image_url = $('#update-form input[name="image_url"]').val()
            book.description = $('#update-form textarea[name="description"]').val()

            app.Book.update(book).then(() => page('/books/' + book.book_id))
        })

        $page.show()
    }
    module.bookUpdatePage = bookUpdatePage

})(app)