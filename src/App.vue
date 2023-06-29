<script>
// importo la libreria di axios
import axios from 'axios';

// importo lo store
import { store } from './data/store';

// importo le componenti nell'app principale
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  // dichiaro le componenti utilizzabili
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      // dichiaro lo store utilizzabile
      store,
    }
  },
  mounted() {
    // evoco la funzione nel mounted
    this.getMovies()
  },
  methods: {
    // creo una funzione per la ricerca dei film
    getMovies() {
      let myUrl = store.apiMovies
      let tvUrl = store.apiTvSeries

      // creo la condizione per la ricerca dei film e delle serie TV
      if (store.searchMovies != '') {
        myUrl += `${store.searchMovies}`
        tvUrl += `${store.searchMovies}`
      }

      // effettuo la chiamata per recuperare i dati dall'API dei film
      axios.get(myUrl).then((response) => {
        store.movies_array = response.data.results
      })

      // effettuo la chiamata per recuperare i dati dall'API delle serie tv
      axios.get(tvUrl).then((response) => {
        store.tvSeries_array = response.data.results
      })
    }
  },
}
</script>

<template lang="">
  <!-- inietto le componenti nel DOM -->
    <AppHeader @search="getMovies"/>
    <AppMain/>
</template>

<style lang="scss">
// importo le componenti dei file scss
@use './styles/generals.scss' as *;
@use './styles/partials/variables';
@use './styles/partials/mixins';
</style>
