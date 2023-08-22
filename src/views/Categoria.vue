<template>
    <v-app>
        <v-container>
            <v-toolbar flat id="toolbarTabla">
                <v-toolbar-title>{{tituloTabla}}</v-toolbar-title>
            </v-toolbar>
           
            <v-data-table
                no-data-text="No hay datos disponibles"
                :items-per-page="10"
                :footer-props="{'items-per-page-text':'Categorías por páginas'}"
                no-results-text="No se encontro resultados"
                :search="search"
                :items="items"
                :headers="cabecera"

            >

            </v-data-table>
        </v-container>
    </v-app>
</template>
<script>
import API from '@/Api'
export default {
    data() {
        return {
            titulo:-1,
            search:'',
            cabecera:[
                {
                    text:'Categoria', value:'categoria'
                }
            ],

            items:[]
        }
    },

    computed: {
        tituloTabla(){
            return this.titulo === -1 ? 'Categorías' : ''
        }
    },

    mounted() {
        this.mostrarCategoria()
    },

    methods: {
     mostrarCategoria(){
        API.get('categorias')
        .then(respuesta=>this.items = respuesta.data.data)
    }
    },
}
</script>s
<style>
#toolbarTabla{
    border-left: solid 8px #053565;
}
</style>