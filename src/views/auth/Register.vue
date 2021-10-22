<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body mt-4">
                        <form action="">
                        <label class= "foem-label" for="name">Nombre</label>
                        <input class= "form-control" type="text" id="name" v-model="form.name">   
                        <label class= "foem-label" for="email">E-mail</label>
                        <input class= "form-control" type="text" id="email" v-model="form.email">
                        <label class= "form-label" for="pass">Contraseña</label>
                        <input class= "form-control" type="password" id="pass" v-model="form.password">
                        <input class="btn btn-primary mt-2" type="bitton" @click="register" value="Registro"/>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return{
            form:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods: {
        register(){

                let formData = new URLSearchParams()
                formData.append('name', this.form.name)
                formData.append('email', this.form.email)
                formData.append('password', this.form.password)
                axios.post('https://apli07.herokuapp.com/register',formData,{
                    headers:{
                        "Access-Control-Allow-Methods":"POST"
                    }
                })                
                .then((response)=>{
                    //console.log(response)
                    localStorage.setItem('token',response.data.token);
                    this.$router.push('/home');
                })
                

        }
    }
}
</script>
