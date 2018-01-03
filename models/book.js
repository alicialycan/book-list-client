var __API_URL__ = "https://jonny-booklist.herokuapp.com"

console.log(__API_URL__)

$.get(`${__API_URL__}/books`).then( response => console.log(response))