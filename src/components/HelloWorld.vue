<template>
  <div>
    <v-toolbar id="fondoToolbar" height="140px">
      <v-spacer></v-spacer>
        <img height="80px" :src="require('../assets/mp.png')"/>
      <v-toolbar-title>
         <h3 id="tituloSistema" class="mx-3">{{tituloLogin}}</h3>
      </v-toolbar-title>
       <img height="60px" :src="require('../assets/sistema.png')"/>
      <v-spacer></v-spacer>
    </v-toolbar>
 
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      titulo:-1
    }),

    computed: {
      tituloLogin(){
       return this.titulo === -1 ? 'Sistema de Control de Insumos': ''
      }
    },
  }
</script>

<style>
#fondoToolbar{
  background-color: #011258;
  color:white;
  border-bottom: yellow solid 5px;
}

#tituloSistema{
  font-size: 30px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
