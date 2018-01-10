var app = app || {};

(module => {

    const __API_URL__ = 'http://localhost:3000/api/v1/books'

    function Book() {
        // Do we need this?
    }

    Book.all = []

    Book.fetchAll = () => $.getJSON(__API_URL__)

    Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id)
    
    Book.deleteOne = id => {
        return $.ajax({
            url: __API_URL__ + '/' + id,
            method: 'DELETE'
        })
    }

    Book.update = book => {
        return $.ajax({
            url: __API_URL__ + '/' + book.book_id,
            method: 'PUT',
            data: book
        })
    }

    Book.create = book => {
        return $.post(__API_URL__, book)
    }

    Book.verify = passphrase => {
        return $.get('http://localhost:3000/api/v1/admin', {token:passphrase})
    }

    module.Book = Book

})(app)