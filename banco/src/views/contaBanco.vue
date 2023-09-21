<template>
    <div>
      <h1>Conta Bancária</h1>
      <p :style="{ color: saldo >= 0 ? 'green' : 'red' }">Saldo: R${{ saldo.toFixed(2) }}</p>
      <input type="number" v-model="valor" placeholder="Digite o valor">
      <button @click="depositar">Depositar</button>
      <button @click="sacar">Sacar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        saldo: 100.00, // Saldo inicial
        valor: 0
      };
    },
    methods: {
      depositar() {
        this.saldo += parseFloat(this.valor);
        this.valor = 0;
      },
      sacar() {
        this.saldo -= parseFloat(this.valor);
        this.valor = 0;
      }
    }
  };
  </script>
  