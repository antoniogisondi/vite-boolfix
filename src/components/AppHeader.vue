<script>
import { store } from '../data/store'
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary py-0">
                        <div class="container-fluid bg-black">
                            <h1>BOOLFLIX</h1>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">TV Shows</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Movies</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                        v-model="store.searchMovies" @input="$emit('search')">
                                    <button class="btn btn-outline-success" type="search">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
h1 {
    color: red;
}

.nav-item {
    .nav-link {
        color: white;
    }
}
</style>