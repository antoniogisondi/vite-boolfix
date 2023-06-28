<script>
export default {
    props: {
        myTvSeries: Object
    },
    mounted() {
        this.starVotes
        this.differenceStarVotes
    },
    methods: {
        starVotes() {
            let vote_round = this.myTvSeries.vote_average
            let votes = Math.round(vote_round / 2)
            return votes
        },
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
    <div class="kard my-3 rounded-4 card-width">
        <div class="position-relative">
            <div class="card-content backg-black">
                <div class="img-container">
                    <img :src="`https://image.tmdb.org/t/p/w342/${myTvSeries.poster_path}`" alt="">
                </div>

                <div class="overlay d-flex flex-column align-items-center">
                    <div class="title text-center mt-3">
                        <h4>{{ myTvSeries.name }}</h4>
                        <p>{{ myTvSeries.original_name }}</p>
                    </div>
                    <div class="flag">
                        <img :src="`../../node_modules/country-flag-icons/1x1/${myTvSeries.original_language.toUpperCase()}.svg`"
                            alt="">
                    </div>
                    <div class="color mt-3">
                        <i class="fa-star fa-solid" v-for="(item, index) in starVotes()" :key="index"></i>
                        <i class="fa-regular fa-star" v-for="(item, index) in differenceStarVotes()" :key="index"></i>
                    </div>
                    <div class="overview overflow-auto mt-2">
                        <p>{{ myTvSeries.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>