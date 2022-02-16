<template>
    <section class="mb-5">
        <h3>Legg til ny film</h3>
        <div class="mb-3">
            <label class="form-label">Tittel</label>
            <input class="form-control" v-model="title" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Pris</label>
            <input class="form-control" v-model="price" type="text">
        </div>
        <input class="btn btn-secondary w-100" @click="addMovie" type="button" value="Legg til film">
    </section>
</template>

<script>
import { ref } from 'vue'
import movieService from '../../services/movieService';

export default {
    setup(){
        const title = ref();
        const price = ref();

        const addMovie = () => {
            // TODO: bør sjekke om feltene er riktig fylt ut først
            const newMovie = { 
                title: title.value, 
                price: parseInt( price.value ) 
            };
            movieService.addMovie( newMovie ); 
        }

        return { 
            title, 
            price,
            addMovie
        }
    }
}
</script>