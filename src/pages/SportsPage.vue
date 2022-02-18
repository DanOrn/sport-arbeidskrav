<template>
    <section >
        <h3>Sport</h3>
        <add-sport></add-sport>
        <div class="container">
            <div class="row">
            <sport-list class="col"></sport-list>
            <sport-list class="col"></sport-list>
        </div>
        </div>
        
        
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