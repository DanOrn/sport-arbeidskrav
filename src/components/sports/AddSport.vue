<template>
    <section class="mb-5">
        <h5>Legg til ny sport</h5>
        <hr>

        <div class="row">
   <div class="small-12 medium-2 large-2 columns">
     <div class="circle">
       <img class="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg">

     </div>
     <div class="p-image">
       <i class="fa fa-camera upload-button"></i>
        <input class="file-upload" type="file" accept="image/*"/>
     </div>
  </div>
</div>


        <div class="mb-3">
            <label class="form-label">Tittel</label>
            <input class="form-control" v-model="title" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Beskrivelse</label>
            <input class="form-control" v-model="description" type="text">
        </div>
        <input class="btn btn-success w-200" @click="addSport" type="button" value="Legg til sport">
        <input class="btn btn-danger w-200" @click="deleteSport" type="button" value="Fjern sport">
    </section>
</template>

<script>
import { ref } from 'vue'
import sportService from '../../services/sportService';



export default {
    setup(){
        const title = ref();
        const description = ref();

        const addSport = () => {
            // TODO: bør sjekke om feltene er riktig fylt ut først
            const newSport = { 
                title: title.value, 
                description: description.value
            };
            sportService.addSport( newSport ); 
        }

        return { 
            title, 
            description,
            addSport
        }
    }
}


</script>

