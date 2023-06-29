<script>
// importo le microcomponenti che fanno parte del main
import AppMoviesCard from './AppMoviesCard.vue';
import AppSeriesTvCard from './AppSeriesTvCard.vue';

// importo lo store
import { store } from '../data/store'
export default {
    // dichiaro le componenti utilizzabili
    components: {
        AppMoviesCard,
        AppSeriesTvCard
    },
    data() {
        return {
            // dichiaro lo store utilizzabile
            store,
        }
    }
}
</script>

<template>
    <!-- creo la struttura del main -->
    <main class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col d-flex flex-column align-items-center text-white mt-5">
                    <h1>Benvenuto su Boolflix Streaming!</h1>
                    <h3>Utilizza la barra di ricerca in alto a destra per cercare i film o le serie tv che più ti piacciono.
                    </h3>
                </div>
            </div>

            <div class="row mt-5">
                <!-- creo un titolo cha apparira soltanto quando effettuerò la ricerca -->
                <div class="title" v-if="store.movies_array.length > 0">
                    <h2>FILMS</h2>
                </div>
                <!-- ciclo la colonna delle card dei film con un v-for -->
                <div class="col" v-for="(movies, index) in store.movies_array" :key="index">
                    <!-- dichiaro la microcomponente nel template passandogli la props -->
                    <AppMoviesCard :myMovies="movies" />
                </div>
            </div>

            <div class="row mt-5">
                <!-- creo un titolo cha apparira soltanto quando effettuerò la ricerca -->
                <div class="title" v-if="store.movies_array.length > 0">
                    <h2>TV SERIES</h2>
                </div>
                <!-- ciclo la colonna delle card delle serie TV con un v-for -->
                <div class="col" v-for="(series, index) in store.tvSeries_array" :key="index">
                    <!-- dichiaro la microcomponente nel template passandogli la props -->
                    <AppSeriesTvCard :myTvSeries="series" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>