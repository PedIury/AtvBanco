<template>
    <div>
      <h2>Cadastro</h2>
      <form @submit.prevent="criarConta">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="saldo">Saldo Inicial:</label>
        <input type="number" id="saldo" v-model="saldo" required>
        
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        saldo: 0
      };
    },
    methods: {
      criarConta() {
      }
    }
  };
  </script>
  