<script>
export default {
    props: {
        myTvSeries: Object
    }
}
</script>

<template>
    <div class="card my-3 rounded-4 card-width">
        <div class="card-content d-flex flex-column align-items-center position-relative">
            <div class="img-container position-absolute">
                <img :src="myTvSeries.backdrop_path" alt="">
            </div>
            <div class="title text-center">
                <h4>{{ myTvSeries.name }}</h4>
                <p>{{ myTvSeries.original_name }}</p>
            </div>
            <div class="flag">
                <img :src="`../../node_modules/country-flag-icons/1x1/${myTvSeries.original_language.toUpperCase()}.svg`"
                    alt="">
            </div>
            <p>{{ myTvSeries.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>