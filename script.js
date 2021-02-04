const API_key = '025c343eb90aee11b7d5fa6b6fcb74f5';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=025c343eb90aee11b7d5fa6b6fcb74f5'
const imgUrl = 'https://image.tmdb.org/t/p/w500'
//select elements from the DOM

let buttonEl = document.querySelector('#search')
let inputEl = document.querySelector('#inputValue')
let moviesSearchable = document.querySelector('#movies-searchable')

// created a function that loops through our movie path and returns the Image
function movieSection(movies) {
    return movies.map((movie) => {
        if (movie.poster_path) {
            return `<img 
        src=${imgUrl + movie.poster_path} 
        data-movie-id=${movie.id}/>`
        }
    })
}

function createMovieContainer(movies) {
    const movieEl = document.createElement('div')
    movieEl.setAttribute('class', 'movie')

    const movieTemplate = `
    <section class="section">
     ${movieSection(movies)}
    </section>
    <div class="content">
      <p id="content-close"> x </p>
    </div>
    </div>`


    movieEl.innerHTML = movieTemplate;
    return movieEl
}

function renderSearhableMovies(data) {
    moviesSearchable.innerHTML = ''
    const movies = data.results;
    const movieBlock = createMovieContainer(movies)
    // create an html element to dumb our value in
    moviesSearchable.appendChild(movieBlock);
    console.log('Data :', data);
}



buttonEl.onclick = function (event) {
    event.preventDefault();
    const value = inputEl.value;

    let newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearhableMovies)
        .catch((error) => {
            console.log('Error :', error);
        })
    inputEl.value = ''
    console.log('value :', value);
}
