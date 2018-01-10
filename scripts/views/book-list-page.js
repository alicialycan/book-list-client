var app = app || {};

(module => {

    const bookListPage = {}

    bookListPage.initIndexView = (books) => {

        const template = Handlebars.compile(`
            <li class="book-list-item">
                <p>{{title}}</p>
                <p>{{author}}</p>
                <img src="{{image_url}}">
                <br/>
                <a href="/books/{{book_id}}">details</a>
            </li>`)

        $('#book-list').empty()

        books.forEach(book => {
            $('#book-list').append(template(book))
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)