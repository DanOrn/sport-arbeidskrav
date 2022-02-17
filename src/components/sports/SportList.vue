<template>
    <section class="row">
        <article class="col">
         <h3>Favorittsport 2022</h3>
        <sport-item
            v-for="(sport, i) in sports" :key="i"
            :image="sport.image"
            :title="sport.title"
            :description="sport.description"
        ></sport-item>
        </article>

    </section>
</template>

<script>
import sportService from "../../services/sportService"
import SportItem from "./SportItem.vue"

export default {
    setup(){
        const sports = sportService.getAll();
        return { sports }
    },

    components: {
        SportItem
    }
}
</script>