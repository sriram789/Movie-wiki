const app = document.getElementById('root1')

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

var request = new XMLHttpRequest()
//Provide your API key
request.open('GET', 'http://www.omdbapi.com/?apikey=[APIKey]e&t=' + window.localStorage.getItem('Name'), true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const logo = document.createElement('img')
        logo.src = data.Poster
        const h1 = document.createElement('h1')
        h1.textContent = data.Title

        const p = document.createElement('p')
        p.textContent = data.Plot
        const button = document.createElement('button')
        button.setAttribute('onclick', "goBack();");
        button.textContent = "GoBack";
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(logo)
        card.appendChild(p)
        card.appendChild(button)
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}


function goBack() {
    window.location.replace('index.html');
}
request.send()