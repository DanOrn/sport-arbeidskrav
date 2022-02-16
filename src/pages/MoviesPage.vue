<template>
    <section>
        <h3>Filmer</h3>
        <add-movie></add-movie>
        <movie-list></movie-list>
    </section>
</template>

<script>
import AddMovie from '../components/movies/AddMovie.vue'
import MovieList from '../components/movies/MovieList.vue'

export default {
    components: {
        AddMovie,
        MovieList
    }
}
</script>