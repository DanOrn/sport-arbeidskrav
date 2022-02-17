<template>
    <section>
        <h3>Søk på sport</h3>
        <hr>
        <label class="seacrh-label">Tittel sport</label>
        <br>
        <input class="seacrh-text" v-model="title" type="text">
        <input class="btn btn-primary w-200" @click="searchSport" type="button" value="Søk">

    </section>
</template>