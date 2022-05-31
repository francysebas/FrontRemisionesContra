<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                    <h2 text-align="center" >listado de remisiones ...</h2>
                   
                
                <div class="col-md-12">
                    <b-table stripe hover :items="remisiones" :fields="fields">

                    <!--<template v-slot="action" v-slot-scope="data"> -->
                    <template v-slot:cell(action)="data">
                        <b-button size="sm"  variant="success">
                            Editar
                        </b-button>

                        <b-button size="sm"  variant="danger">
                            Eliminar
                        </b-button>
                    </template>

                    </b-table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            fields: [
                {key: 'numCarnet', label: 'Número de Carné'},
                {key: 'tipoIdentificacion', label: 'Tipo de identificación'},
                {key: 'numIdentificacion', label: 'Número de identificación'},
                {key: 'nombreP', label: 'Primer nombre'},
                {key: 'nombreS', label: 'Segundo nombre'},
                {key: 'apellidoP', label: 'Primer apellido'},
                {key: 'apellidoS', label: 'Segundo apellido'},
                {key: 'action', label: ''}
            ],
            remisiones:[]
        }
    },
    methods: {
        getRemisiones(){
            const path = 'http://localhost:8000/api/v1.0/remisiones/'
            axios.get(path).then((response)=>{
               this.remisiones = response.data 
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

