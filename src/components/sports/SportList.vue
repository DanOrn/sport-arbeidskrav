<template>
    <section>
        <h3>Favorittsport 2022</h3>
        <sport-item
            v-for="(sport, i) in sports" :key="i"
            :title="sport.title"
            :price="sport.price"
        ></sport-item>
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