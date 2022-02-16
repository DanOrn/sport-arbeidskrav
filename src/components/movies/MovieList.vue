<template>
    <section>
        <h3>Filmliste 2022</h3>
        <movie-item
            v-for="(movie, i) in movies" :key="i"
            :title="movie.title"
            :price="movie.price"
        ></movie-item>
    </section>
</template>

<script>
import movieService from "../../services/movieService"
import MovieItem from "./MovieItem.vue"

export default {
    setup(){
        const movies = movieService.getAll();
        return { movies }
    },
    components: {
        MovieItem
    }
}
</script>