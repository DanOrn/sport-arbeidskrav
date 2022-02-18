<template>
    <section>
        <h3>Explore the sport types</h3>
        <hr>
        <article>
            <h3> {{sportObject1.type}} </h3>
            <img :src="require(`@/assets/${sportObject1.image}`)">
      
        </article>
    </section>
</template>

<script>
import { reactive } from "vue"


export default {
    setup(){
        const sportObject1 = reactive (
        {type: "", image: "sport.gif"},
        );
          

        return { sportObject1}
    }
}
</script>