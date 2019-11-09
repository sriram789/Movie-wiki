const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

//Provide your APIkey
request.open('GET', 'http://www.omdbapi.com/?apikey=[APIKEY]&s=' + window.localStorage.getItem('movie_name'), true);
request.onload = function() {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.Search.forEach(movie => {
            console.log(movie);
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', movie.Title);
            var text = '"' + movie.Title + '"';
            card.setAttribute('onclick', "myapp(" + text + ")");
            const logo = document.createElement('img');
            logo.src = movie.Poster;

            const h1 = document.createElement('h1');
            h1.textContent = movie.Title;

            const p = document.createElement('p');
            p.textContent = "IMDB ID:" + movie.imdbID;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(logo);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

function myapp(id) {
    localStorage.setItem('Name', id);
    window.location.replace('movie.html')
}
request.send();