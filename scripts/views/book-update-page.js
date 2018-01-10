var app = app || {};

(module => {

    const bookUpdatePage = {}

    const $page = $('#book-update-page')

    const template = Handlebars.compile(`
        <form>
            <input id="update-title" type="text" value="{{title}}"> 
            <input id="update-author" type="text" value="{{author}}"> 
            <input id="update-isbn" type="text" value="{{isbn}}"> 
            <input id="update-image_url" type="text" value="{{image_url}}"> 
            <textarea id="update-description" value="{{description}}"></textarea>
            <button>submit</button>
        </form>
    `)

    bookUpdatePage.init = book => {

        $page.empty()

        $page.append(template(book))

        $page.off().on('submit', (event) => {
            event.preventDefault()
            
            const $form = $(event.target)

            book.title = $form.find('#update-title').val()
            book.author = $form.find('#update-author').val()
            book.isbn = $form.find('#update-isbn').val()
            book.image_url = $form.find('#update-image_url').val()
            book.description = $form.find('#update-description').val()

            app.Book.update(book).then(() => page('/books/' + book.book_id))
        })

        $page.show()
    }
    module.bookUpdatePage = bookUpdatePage

})(app)