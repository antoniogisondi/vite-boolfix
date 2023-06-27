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
            <div class="row mb-5">
                <div class="col" v-for="(movies, index) in store.movies_array" :key="index">
                    <AppMoviesCard :myMovies="movies" />
                </div>
            </div>

            <div class="row mt-5">
                <div class="col" v-for="(series, index) in store.tvSeries_array" :key="index">
                    <AppSeriesTvCard :myTvSeries="series" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>