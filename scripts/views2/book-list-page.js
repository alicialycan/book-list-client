var app = app || {};

(module => {

    const bookListPage = {}

    bookListPage.init = (books) => {

        const template = Handlebars.compile($('#book-list-template').text())

        $('#book-list').empty()

        books.forEach(book => {
            $('#book-list').append(template(book))
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)