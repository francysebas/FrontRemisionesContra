<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Esta seguro que deseas eliminar este afiliado...?</h3>
                <p>Numero de numIdentificacion : {{this.element.numIdentificacion}}</p>
                <p>Nombre: {{this.element.nombreP}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="eliminarAfiliado" variant="danger"> Eliminar</b-button>
                 <b-button type="submit" class="btn-large-space" :to="{name: 'ListRemisiones'}">Cancelar </b-button>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
    export default {
        data() {
            return{
                afiliadoId: this.$route.params.afiliadoId,
                element: {
                numIdentificacion:'',
                nombreP: '',
                }
            }
            
        },

        methods: {
         
         eliminarAfiliado(){
            const path = `http://localhost:8000/api/v1.0/remisiones/${this.afiliadoId}/`
            axios.delete(path).then((response)=>{
                location.href = '/remisiones'
            })
            .catch((error)=>{
                swal("no es posible eliminar el afiliado"," ","error")
            })
         },
       
        getRemisiones(){
            const path = `http://localhost:8000/api/v1.0/remisiones/${this.afiliadoId}/`
            axios.get(path).then((response)=>{
               this.element.numIdentificacion = response.data.numIdentificacion
               this.element.nombreP = response.data.nombreP
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getRemisiones()
        }
        
    }
</script>