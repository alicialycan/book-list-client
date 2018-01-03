var __API_URL__ = "https://jonny-booklist.herokuapp.com"

console.log(__API_URL__)

$.get(`${__API_URL__}/api/v1/books`).then( response => console.log(response))