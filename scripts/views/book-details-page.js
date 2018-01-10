var app = app || {};

(module => {

    const bookDetailsPage = {}

    const $page = $('#book-detail-page')

    const template = Handlebars.compile(`
        <p>{{title}}</p>
        <p>{{author}}</p>
        <img src="{{image_url}}">
        <p>{{description}}</p>
        <div>
            <a href="/books/{{book_id}}/update">update</a>
            <a id="delete-book">delete</a>
        </div>
    `)

    bookDetailsPage.init = (book) => {

        $page.empty()

        $page.append(template(book))

        $page.show()

        $page.off()
        
        $page.on('click', '#delete-book', () => {
            app.Book.deleteOne(book.book_id).then(() => page('/'))
        })
    }

    module.bookDetailsPage = bookDetailsPage
    
})(app)
