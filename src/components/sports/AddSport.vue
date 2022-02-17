<template>
    <section class="mb-5">
        <h5>Legg til ny sport</h5>
        <hr>
        <div class="mb-3">
            <label class="form-label">Tittel</label>
            <input class="form-control" v-model="title" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Pris</label>
            <input class="form-control" v-model="price" type="text">
        </div>
        <input class="btn btn-success w-200" @click="addSport" type="button" value="Legg til sport">
        <input class="btn btn-danger w-200" @click="deleteSport" type="button" value="Fjern sport">
    </section>
</template>

<script>
import { ref } from 'vue'
import sportService from '../../services/sportService';

export default {
    setup(){
        const title = ref();
        const price = ref();

        const addSport = () => {
            // TODO: bør sjekke om feltene er riktig fylt ut først
            const newSport = { 
                title: title.value, 
                price: parseInt( price.value ) 
            };
            sportService.addSport( newSport ); 
        }

        return { 
            title, 
            price,
            addSport
        }
    }
}
</script>