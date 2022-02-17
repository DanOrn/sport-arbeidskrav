import { ref } from 'vue'

const sportService = ( function(){ 

    // sports er med ref en reaktiv variabel
    const sports = ref( [ 
        { id: 1, image: "fotball.png", title: "Fotball", description: "En koselig sport" },
        { id: 2, image: "pingpong.png", title: "Pingpong", description: "En koselig sport" },
        { id: 3, image: "klatring.png", title: "Klatring", description: "En koselig sport" },
        { id: 4, image: "esport.png", title: "E-Sport", description: "En koselig sport" }
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