<script>
export default {
    // dichiaro la props
    props: {
        myMovies: Object
    },
    mounted() {
        // dichiaro qui le funzioni che generano la valutazione del film arrotondato per difetto e va da 1 a 5
        this.voteStar
        this.differenceStarVotes
    },
    methods: {
        // creo la funzione che mi arrotonderà e dividerà per 2 la valutazione numerica del film
        voteStar() {
            let vote_round = this.myMovies.vote_average
            let votes = Math.round(vote_round / 2)
            return votes
        },

        // creo la funzione che mi genererà la differenza tra la valutazione del film e il massimo della valutazione
        differenceStarVotes() {
            let vote_round = this.myMovies.vote_average
            let votes = Math.round(vote_round / 2)
            let difference = 5 - votes
            return difference
        }
    },
}
</script>

<template>
    <!-- creo la struttura della card dei film -->
    <div class="kard my-3 rounded-4 card-width">
        <div class="position-relative">
            <div class="card-content backg-black">
                <div class="img-container">
                    <!-- riprendo l'immagine nell'array dichiarato nello store tramite props -->
                    <img :src="`https://image.tmdb.org/t/p/w342/${myMovies.poster_path}`" alt="">
                </div>

                <div class="overlay d-flex flex-column align-items-center">
                    <div class="title text-center mt-3">
                        <!-- riprendo i vari titoli nell'array contenuto in store tramite props -->
                        <h4>{{ myMovies.title }}</h4>
                        <p>{{ myMovies.original_title }}</p>
                    </div>
                    <div class="flag">
                        <!-- tramite props converto la sigla della lingua in una flag -->
                        <img :src="`../../node_modules/country-flag-icons/1x1/${myMovies.original_language.toUpperCase()}.svg`"
                            alt="">
                    </div>
                    <div class="color mt-3">
                        <!-- tramite un v-for genero il totale delle stelline utilizzate per la valutazione del contenuto -->
                        <i class="fa-star fa-solid" v-for="(item, index) in voteStar()" :key="index"></i>
                        <i class="fa-regular fa-star" v-for="(item, index) in differenceStarVotes()" :key="index"></i>
                    </div>
                    <div class="overview overflow-auto mt-2">
                        <!-- tramite props riprendo la trama del film contenuta nell'array -->
                        <p>{{ myMovies.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>