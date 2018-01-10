var app = app || {};

(module => {

    const errorPage = {}

    errorPage.init = err => $('#error-page').show()

    module.errorPage = errorPage

})(app)