<template>
    <v-app>
        <sistema-menu/>
        <v-navigation-drawer
            v-model="drawer"
            app
            width="270px"
        >
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-icon size="50px">account_circle</v-icon>
                <v-list-item-content>
                    <v-list-item-title>Jane Smith</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="dato in productos"
                    :key="dato.title"
                    link
                    color="#053565"
                    :to="dato.path"
                >
                <v-list-item-icon>
                    <v-icon>{{ dato.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title color="#053565">{{ dato.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
                color="#053565"
               
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title color="#053565">{{ item.title }}</v-list-item-title>
                    
                </v-list-item-content>
                </template>

                <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    color="#053565"
                    link
                    :to="child.path"
                >
                <v-list-item-content>
                     <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
    
        </v-navigation-drawer>
        <v-app-bar app id="toolbar" dark>
            <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <img height="50px"  :src="require('../assets/mp.png')"/>
                {{tituloCabecera}}
                <img height="50px" :src="require('../assets/sistema.png')"/>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main>
            <router-view/>
        </v-main>
       
    </v-app>
    
</template>
<script>
import SistemaMenu from '../components/SistemaMenu.vue'
export default {
    components:{
        SistemaMenu
    },
    data() {
        return {
            drawer:null,
            titulo:-1,
            productos:[
                { title: 'Productos', icon:'dashboard'}
            ],
            items: [
                
               
                {
                    action: 'segment',
                    items: 
                        [
                            { title: 'Categorias', path:'/categoria' },
                            { title: 'Marcas/Modelos'},
                            { title: 'Unidades de medidas'},
                            { title: 'Colores'}
                        ],
                    title: 'Parametros',
                },

                {
                    action: 'location_city',
                    items: 
                    [
                        { title: 'Depositos'},
                        { title: 'Localizaciones'},
                        { title: 'Ubicaciones'}
                    ],
                    title:'Localidades'
                }

               
            ],
        
        }
    },

    computed: {
        tituloCabecera(){
            return this.titulo === -1 ? 'Sistema de Control de Insumos':''
        }
    },
}
</script>

<style>
#toolbar{
    background-color:#053565;
}
</style>