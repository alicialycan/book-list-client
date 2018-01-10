var app = app || {};

(module => {

    const bookListPage = {}

    bookListPage.initIndexView = (books) => {

        // TODO: move to handlebars-template
        const template = Handlebars.compile(`

        <li class="book-items" data-id={{book_id}}>
      <div class="book-container">
        <img src={{image_url}}>
        <div class="book-overlay">
          <h3>{{title}}</h3>
          <p>{{author}}</p>
          <p class="detail-button"><a href="/books/{{book_id}}">view details</a></p>
        </div>
      </div>
    </li>
        `)

        $('#book-list').empty()

        books.forEach(book => {
            $('#book-list').append(template(book))
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)