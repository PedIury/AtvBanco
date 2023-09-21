import Vue from 'vue'
import VueRouter from 'vue-router'
import cadastroBanco from '@/views/cadastroBanco.vue'
import loginBanco from '@/views/loginBanco.vue'
import contaBanco from '@/views/contaBanco.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' 
  },
  {
    path: '/cadastro',
    name: 'cadastroBanco',
    component: cadastroBanco
  },
  {
    path: '/login',
    name: 'loginBanco',
    component: loginBanco
  },
  {
    path: '/conta',
    name: 'contaBanco',
    component: contaBanco
  }
]

const router = new VueRouter({
  routes
})

export default router
