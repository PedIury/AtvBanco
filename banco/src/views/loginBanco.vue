<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="fazerLogin">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required>
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      fazerLogin() {
      }
    }
  };
  </script>
  