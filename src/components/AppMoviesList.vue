<script>
import AppMoviesCard from './AppMoviesCard.vue';
import { store } from '../data/store'
export default {
    components: {
        AppMoviesCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col" v-for="(movies, index) in store.movies_array" :key="index">
                    <AppMoviesCard :myMovies="movies" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>