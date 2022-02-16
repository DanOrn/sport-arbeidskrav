import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import MoviesPage from '../pages/MoviesPage.vue'

const routes = [ 
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "ContactPage",
        path: "/contact",
        alias: ["/kontakt", "/kontakt-oss"],
        component: ContactPage
    },
    {
        name: "MoviesPage",
        path: "/movies",
        component: MoviesPage
    }
]; // PAUSE TIL 12:15

const router = createRouter( { 
    history: createWebHistory(),
    routes
} );

export default router;