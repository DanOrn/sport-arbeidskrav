<template>
  <the-navigation></the-navigation>
  <div class="container">
    <router-view></router-view>
    <v-if-v-bind-reactive></v-if-v-bind-reactive>
  </div>
</template>

<script>
import TheNavigation from "./components/shared/TheNavigation.vue"


export default {
  name: 'App',
  components: {
    TheNavigation,
   
 
  }
}
</script>