import { ref } from 'vue'

const movieService = ( function(){ 

    // movies er med ref en reaktiv variabel
    const movies = ref( [ 
        { title: "The Batman", price: 99 }
    ] );

    const getAll = () => movies

    const addMovie = ( newMovie ) => {
        movies.value.push( newMovie );
    }

    return {
        getAll,
        addMovie
    }

} () )

export default movieService