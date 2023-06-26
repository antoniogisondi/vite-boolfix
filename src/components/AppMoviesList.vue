<script>
import AppMoviesCard from './AppMoviesCard.vue';
import AppSeriesTvCard from './AppSeriesTvCard.vue';
import { store } from '../data/store'
export default {
    components: {
        AppMoviesCard,
        AppSeriesTvCard
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
                <div class="title">
                    <h1>Films</h1>
                </div>
                <div class="col" v-for="(movies, index) in store.movies_array" :key="index">
                    <AppMoviesCard :myMovies="movies" />
                </div>
            </div>

            <div class="row">
                <div class="title">
                    <h1>TV Series</h1>
                </div>
                <div class="col" v-for="(series, index) in store.tvSeries_array" :key="index">
                    <AppSeriesTvCard :myTvSeries="series" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>