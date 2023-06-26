<script>
export default {
    props: {
        myMovies: Object
    }
}
</script>

<template>
    <div class="card my-3 rounded-4">
        <div class="card-content d-flex flex-column align-items-center">
            <img :src="myMovies.backdrop_path" alt="">
            <h4>{{ myMovies.title }}</h4>
            <p>{{ myMovies.original_title }}</p>
            <p>{{ myMovies.original_language }}</p>
            <p>{{ myMovies.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>