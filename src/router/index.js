import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path:'/inicio',
    name:'Inicio',
    component: () =>import('../views/Inicio.vue'),
    children:[
      {
        path:'/categoria',
        name:'Categoria',
        component: () =>import('../views/Categoria.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
