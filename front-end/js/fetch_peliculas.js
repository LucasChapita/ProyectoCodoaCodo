// Definimos la URL base de la API de The Movie DB
const API_SERVER = 'https://api.themoviedb.org/3'; //esto se cambiara por una api propia que tenga las peliculas en la base de mysql

// Opciones para las peticiones fetch a la API
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'

    }
};

const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));

    // Devolvemos el elemento creado
    return element;
};

// Función para cargar películas en la cuadrícula de tendencias
const fetchMoviesGrid = async (page = 1) => {
    // Realizamos una petición fetch a la API para obtener las películas populares
    const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);

    // Convertimos la respuesta a JSON
    const data = await response.json();

    // Extraemos las películas de la respuesta
    const movies = data.results;

    // Seleccionamos el contenedor de películas de tendencia en el DOM
    const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas');

    // Limpiamos el contenido previo del contenedor
    tendenciasContainer.innerHTML = '';

    // Iteramos sobre cada película obtenida
    movies.forEach(movie => {
        // Creamos los elementos HTML para mostrar la película
        const pelicula = createElement('div', 'pelicula');
        const anchor = createElement('a', '');
        anchor.href = './pages/detalle.html';
        const img = createElement('img', 'imgTendencia', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        const tituloPelicula = createElement('div', 'tituloPelicula');
        const titulo = createElement('h4', '');
        titulo.textContent = movie.title;

        // Agregamos los elementos al DOM
        // Creamos un contenedor para la película dentro del enlace
        tituloPelicula.appendChild(titulo); // Agregamos el título de la película al contenedor de título
        pelicula.append(img, tituloPelicula); // Agregamos la imagen y el contenedor de título a la película
        anchor.appendChild(pelicula); // Agregamos la película al enlace
        const peliculaWrapper = createElement('div', 'peliculas'); // Creamos un contenedor adicional para la película
        peliculaWrapper.appendChild(anchor); // Agregamos el enlace con la película al contenedor adicional
        tendenciasContainer.appendChild(peliculaWrapper); // Agregamos el contenedor adicional al contenedor de tendencias
    });

    // Actualizamos el atributo data-page con el número de página actual
    tendenciasContainer.parentElement.setAttribute('data-page', page);
};

// Función para cargar películas en el carrusel de películas aclamadas
const fetchMoviesFlex = async () => {
    const response = await fetch(`${API_SERVER}/movie/top_rated`, options);
    const data = await response.json();
    const movies = data.results;
    const aclamadasContainer = document.querySelector('.aclamadas');
    movies.forEach(movie => {
        const peliculaItem = createElement('div', 'peliculaItem');
        const img = createElement('img', 'imgAclamada', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        peliculaItem.appendChild(img); 
        aclamadasContainer.appendChild(peliculaItem);
    });
};

document.querySelector('.anterior').addEventListener('click', () => {
    let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'));
    if (currentPage <= 1) return;
    fetchMoviesGrid(currentPage - 1);
});

document.querySelector('.siguiente').addEventListener('click', () => {
    let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'));
    fetchMoviesGrid(currentPage + 1);
});

document.addEventListener('DOMContentLoaded', () => {
    fetchMoviesGrid();
    fetchMoviesFlex();
});