<template>
    <nav class="navbar navbar-light bg-light navbar-expand-sm mb-5">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">MovieRent</router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link" to="/">Hjem</router-link></li>
                     <li class="nav-item"><router-link class="nav-link" to="/movies">Filmer</router-link></li>
                     <li class="nav-item"><router-link class="nav-link" to="/contact">Kontakt oss</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>