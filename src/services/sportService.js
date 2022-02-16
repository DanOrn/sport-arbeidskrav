import { ref } from 'vue'

const sportService = ( function(){ 

    // sports er med ref en reaktiv variabel
    const sports = ref( [ 
        { title: "The Batman", price: 99 }
    ] );

    const getAll = () => sports

    const addSport = ( newSport ) => {
        sports.value.push( newSport );
    }

    return {
        getAll,
        addSport
    }

} () )


export default sportService