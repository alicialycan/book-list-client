var app = app || {};

(module => {

    const adminPage = {}

    const $page = $('#admin-page')

    adminPage.init = () => {

        $page.find('input').val('')

        $page.show()
    }

    $page.find('form').on('submit', (event) => {

        event.preventDefault()
        
        app.Book.verify(event.target.passphrase.value)
            .then(verified => {
                if (verified) {
                    localStorage.setItem('token', 'true')
                    $('.protected').show()
                } else {
                    localStorage.removeItem('token')
                }

                page('/')
            })
    })

    
    module.adminPage = adminPage

})(app)

