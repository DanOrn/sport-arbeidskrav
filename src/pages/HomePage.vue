<template>
    <section>
        <h3>Explore the sport types</h3>
        <hr>
        <article>
            <h3> {{sportObject1.type}} </h3>
        </article>
    </section>
</template>

<script>
import { reactive } from "vue"

export default {
    setup(){
        const sportObject1 = reactive({
            type: "Fotball"
        });
        return { sportObject1 }
    }
}
</script>