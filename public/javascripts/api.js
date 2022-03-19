const feedDisplay = document.querySelector('#feed');

fetch('https://api-ieg.herokuapp.com/api/v1/messages/')
    .then(res => res.json())
    .then(data => console.log(data))