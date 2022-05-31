<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>
                    Editar libro
                </h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">

                        <form @onSubmit="onSubmit">

                            <div class="form-group row">
                                <label for="tipoIdentificacion" class="col-sm-2 col-form-label">
                                    Tipo de documento
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Tipo documento" name="tipoIdentificacion" class="form-control" v-model.trim="form.tipoIdentificacion">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="numIdentificacion" class="col-sm-2 col-form-label">
                                    Número de documento
                                </label>
                                <div class="col-sm-6">
                                   <textarea name="numIdentificacion" class="form-control" placeholder="Documento" rows="3" ></textarea>
                                </div>
                            </div>

                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">
                                        Editar
                                    </b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{name: 'ListRemisiones'}">
                                        Cancelar
                                    </b-button>
                                </div>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            afiliadoId: this.$route.params.id
        }
        form:{
            tipoIdentificacion:''
            numIdentificacion:''
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault()
        },
        getAfiliado(){
            const path = 'http://localhost:8000/api/v1.0/remisiones/${this.afiliadoId}/'
            axios.get(path).then((response)=> {
                this.form.tipoIdentificacion = response.data.tipoIdentificacion
                this.form.numIdentificacion = response.data.numIdentificacion
            })
            .catch((response)=>{
                console.log(error)
            })
        },
        created(){
            this.getAfiliado()
        }
    }
    
}
</script>