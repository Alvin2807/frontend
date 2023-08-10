<template>
    <v-app>
        <sistema-menu/>
        <v-navigation-drawer
            v-model="drawer"
            app
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
            <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    
                </v-list-item-content>
                </template>

                <v-list-item
                v-for="child in item.items"
                :key="child.title"
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
            items: [
                {
                action: 'mdi-ticket',
                items: [{ title: 'List Item' }],
                title: 'Attractions',
                },
                {
                action: 'mdi-silverware-fork-knife',
                active: true,
                items: [
                    { title: 'Breakfast & brunch' },
                    { title: 'New American' },
                    { title: 'Sushi' },
                ],
                title: 'Dining',
                },
                {
                action: 'mdi-school',
                items: [{ title: 'List Item' }],
                title: 'Education',
                },
                {
                action: 'mdi-human-male-female-child',
                items: [{ title: 'List Item' }],
                title: 'Family',
                },
                {
                action: 'mdi-bottle-tonic-plus',
                items: [{ title: 'List Item' }],
                title: 'Health',
                },
                {
                action: 'mdi-briefcase',
                items: [{ title: 'List Item' }],
                title: 'Office',
                },
                {
                action: 'mdi-tag',
                items: [{ title: 'List Item' }],
                title: 'Promotions',
                },
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