<template>
    <article>
        <h3>{{ title }}</h3>
        <p>Pris leie: {{ price }}</p>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        price: Number
    }
}
</script>