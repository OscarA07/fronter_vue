<template>
    <div>
        <div v-if="loaded">
            <img :src="user.picture.large" alt="">
            <h2>{{ user.name.first }}</h2>
        </div>
        <div v-else>
            <b-spinner type="grow" label="Spinning"></b-spinner>
        </div>
    </div>
</template>

<script>
import api from '@/api'  //importar archivo api
export default {
    data(){
        return {
            user:{}, //retorna un objeto de usuario
            loaded: false
        }        
    },
    created(){
        this.getUser(this.$route.query.id);//captura de dato
    },
    //el metodo permite traer los datos del usuario
    methods:{
        getUser(id){
            ( async ()=>{
                this.user = await api.getUserData(id);
                this.loaded = true;
                //
                console.log(this.user);
            })();//evita utilizar un then para la vista
        }
    }
}
</script>