var app = app || {};

(module => {

    const errorPage = {}

    const $page = $('#error-page')

    errorPage.init = err => {
        $page.show()
    }

    module.errorPage = errorPage

})(app)