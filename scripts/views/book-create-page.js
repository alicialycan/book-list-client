var app = app || {};

(module => {

    const bookCreatePage = {}

    const $page = $('#book-create-page')

    $page.find('form').on('submit', event => {

        event.preventDefault()

        // const $form = $(event.target)

        // book.title = $form.find('#book-create-title').val()
        // book.author = $form.find('#book-create-author').val()
        // book.isbn = $form.find('#book-create-isbn').val()
        // book.image_url = $form.find('#book-create-image_url').val()
        // book.description = $form.find('#book-create-description').val()

        const book = {
            title: event.target.title.value,
            author: event.target.author.value,
            isbn: event.target.isbn.value,
            image_url: event.target.image_url.value,
            description: event.target.description.value,
          };

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