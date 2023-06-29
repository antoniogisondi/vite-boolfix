//  importo vue.js
import { reactive } from "vue";

// dichiaro qui gli elementi da esportare
export const store = reactive({
    // variabile contenente l'API dei film
    apiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=e57d04d9a96af5badc5c30c97db005b4&query=',
    // array dove andremo a popolare ciò che è contenuto nella chiamata API dei film
    movies_array: [],
    // variabile contenente l'API delle serie tv
    apiTvSeries: 'https://api.themoviedb.org/3/search/tv?api_key=e57d04d9a96af5badc5c30c97db005b4&query=',
    // array dove andremo a popolare ciò che è contenuto nella chiamata API delle serie tv
    tvSeries_array: [],
    // variabile vuota che servirà per la ricerca dei contenuti
    searchMovies: '',
})