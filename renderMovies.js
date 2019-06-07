function renderMovies(movies) {

    movie = movies.map(e => {
        return `<div class="container rounded movie text-left"><img src= "${e.poster}" class="rounded posterImg"</img>
        <div class =" posterInfo text-left rounded text-monospace"><p><strong>${e.title}</strong><br>
        <span style ="font-size: 15px">${e.year}</span>
        <br>
         IMDB: <br>
        ${e.imdbRating}/10<br>
        Rotten Tomatoes:<br>
        ${e.rottenTomatoesRating}</p> 
        </div>
        </div>`
    })
    return `
        <div class="text-center mt-5 justify-content-between">
        ${movie.join("")}
            <code>${JSON.stringify(movies)}</code>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [{
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}