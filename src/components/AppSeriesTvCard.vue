<script>
export default {
    // dichiaro la props
    props: {
        myTvSeries: Object
    },
    // dichiaro qui le funzioni che generano la valutazione della serie tv arrotondato per difetto e va da 1 a 5
    mounted() {
        this.starVotes
        this.differenceStarVotes
    },
    methods: {
        // creo la funzione che mi arrotonderà e dividerà per 2 la valutazione numerica della serie tv
        starVotes() {
            let vote_round = this.myTvSeries.vote_average
            let votes = Math.round(vote_round / 2)
            return votes
        },

        // creo la funzione che mi genererà la differenza tra la valutazione della serie tv e il massimo della valutazione
        differenceStarVotes() {
            let vote_round = this.myTvSeries.vote_average
            let votes = Math.round(vote_round / 2)
            let difference = 5 - votes
            return difference
        }
    },
}
</script>

<template>
    <!-- creo la struttura della card della serie tv -->
    <div class="kard my-3 rounded-4 card-width">
        <div class="position-relative">
            <div class="card-content backg-black">
                <div class="img-container">
                    <!-- riprendo l'immagine nell'array dichiarato nello store tramite props -->
                    <img :src="`https://image.tmdb.org/t/p/w342/${myTvSeries.poster_path}`" alt="">
                </div>

                <div class="overlay d-flex flex-column align-items-center">
                    <div class="title text-center mt-3">
                        <!-- riprendo i vari titoli nell'array contenuto in store tramite props -->
                        <h4>{{ myTvSeries.name }}</h4>
                        <p>{{ myTvSeries.original_name }}</p>
                    </div>
                    <div class="flag">
                        <!-- tramite props converto la sigla della lingua in una flag -->
                        <img :src="`../../node_modules/country-flag-icons/1x1/${myTvSeries.original_language.toUpperCase()}.svg`"
                            alt="">
                    </div>
                    <div class="color mt-3">
                        <!-- tramite un v-for genero il totale delle stelline utilizzate per la valutazione del contenuto -->
                        <i class="fa-star fa-solid" v-for="(item, index) in starVotes()" :key="index"></i>
                        <i class="fa-regular fa-star" v-for="(item, index) in differenceStarVotes()" :key="index"></i>
                    </div>
                    <div class="overview overflow-auto mt-2">
                        <!-- tramite props riprendo la trama della serie tv contenuta nell'array -->
                        <p>{{ myTvSeries.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>