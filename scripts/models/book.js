var app = app || {};

(module => {

    const __API_URL__ = 'https://jonny-booklist.herokuapp.com/api/v1'

    function Book() {
        // fill out later
    }

    Book.all = []

    Book.fetchAll = () => {
        $.getJSON(__API_URL__ + '/books')
            .then(response => {
                response.forEach(book => {
                    $('#book-list').append(`<li>${book.title}:${book.author}</li>`)
                })
            })
    }

    module.Book = Book

})(app)