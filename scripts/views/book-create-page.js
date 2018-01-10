var app = app || {};

(module => {

    const bookCreatePage = {}

    const $page = $('#book-create-page')

    $page.find('form').on('submit', event => {

        event.preventDefault()

        const book = {}

        const $form = $(event.target)

        book.title = $form.find('#book-create-title').val()
        book.author = $form.find('#book-create-author').val()
        book.isbn = $form.find('#book-create-isbn').val()
        book.image_url = $form.find('#book-create-image_url').val()
        book.description = $form.find('#book-create-description').val()

        app.Book.create(book).then(response => {
            console.log(response)
            page('/')
        })
    })

    bookCreatePage.init = () => {
        $page.show()
    }

    module.bookCreatePage = bookCreatePage

})(app)