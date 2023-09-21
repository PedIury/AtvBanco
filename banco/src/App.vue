<template>
  <div id="app">
    <router-link to="/cadastro">Cadastro</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/conta">Conta</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
