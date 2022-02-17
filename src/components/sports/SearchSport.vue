<template>
<div class="row">
    <section class="mb-5 col">
        <h3>Legg til ny sport</h3>
        <div class="mb-3 col">
            <label class="form-label">Tittel</label>
            <input class="form-control" v-model="title" type="text">
        </div>
        <div class="mb-3 col">
            <label class="form-label">Pris</label>
            <input class="form-control" v-model="price" type="text">
        </div>
        <input class="btn btn-primary w-100" @click="addSport" type="button" value="Legg til film">
    </section>
</div>
    
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