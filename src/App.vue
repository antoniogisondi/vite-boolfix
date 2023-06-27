<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMoviesList from './components/AppMoviesList.vue';
export default {
  components: {
    AppHeader,
    AppMoviesList,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      let myUrl = store.apiMovies
      let tvUrl = store.apiTvSeries

      if (store.searchMovies != '') {
        myUrl += `${store.searchMovies}`
      }

      if (store.searchMovies != '') {
        tvUrl += `${store.searchMovies}`
      }


      axios.get(myUrl).then((response) => {
        store.movies_array = response.data.results
      })

      axios.get(tvUrl).then((response) => {
        store.tvSeries_array = response.data.results
      })
    }
  },
}
</script>

<template lang="">
    <AppHeader @search="getMovies"/>
    <AppMoviesList/>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables';
@use './styles/partials/mixins';
</style>
