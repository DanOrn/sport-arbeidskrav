<template>
    <section>
        <h3>Sport</h3>
        <add-sport></add-sport>
        <sport-list></sport-list>
    </section>
</template>

<script>
import AddSport from '../components/sports/AddSport.vue'
import SportList from '../components/sports/SportList.vue'

export default {
    components: {
        AddSport,
        SportList
    }
}
</script>