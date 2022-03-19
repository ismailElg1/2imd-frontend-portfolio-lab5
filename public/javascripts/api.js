const feedDisplay = document.querySelector('#feed');

fetch('https://api-ieg.herokuapp.com/api/v1/messages/')
    .then(res => res.json())
    .then(data => {
        
        data.data.messages.forEach(message => {
            const post = `<h3>`+ message.user +`: `+ message.text + `</h3>`;
            feedDisplay.insertAdjacentHTML("beforeend", post);
        })
    })
    .catch(err => console.log(err))