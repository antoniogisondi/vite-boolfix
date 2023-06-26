import { reactive } from "vue";

export const store = reactive({
    apiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=e57d04d9a96af5badc5c30c97db005b4',
    movies_array: [],
    searchMovies: ''
})