<script>
// importo lo store
import { store } from '../data/store'
export default {
    data() {
        return {
            // dichiaro lo store utilizzabile
            store
        }
    },
}
</script>

<template>
    <!-- creo la struttura dell'header -->
    <header class="d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary py-0">
                        <div class="container-fluid bg-black">
                            <div class="img-container">
                                <img src="../assets/boolflix logo.png" alt="BoolFlix">
                            </div>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item p-2">
                                        <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item p-2">
                                        <a class="nav-link" href="#">TV Shows</a>
                                    </li>
                                    <li class="nav-item p-2">
                                        <a class="nav-link" href="#">Movies</a>
                                    </li>
                                </ul>

                                <!-- creo il form che contiene l'input per la ricerca e le funzioni che permettono essa -->
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Cerca film o serie TV"
                                        aria-label="Search" v-model="store.searchMovies" @input="$emit('search')">
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>