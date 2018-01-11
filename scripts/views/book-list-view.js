var app = app || {};

(module => { 

    const bookListView= {}

    const $view = $('#book-list-view')

    bookListView.init = (books) => {
        
        console.log('books', books)
        $('.page').hide()

        $view.show()
    }

    module.bookListView = bookListView

})(app)