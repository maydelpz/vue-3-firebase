<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingresa email" v-model.trim="email" />
        <input
          type="password"
          placeholder="Ingresa password"
          v-model.trim="password"
        />
        <button type="submit" :disabled="userStore.loadingUser">Inicar Sesion</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useUserStore } from "../stores/user";
  //import { useRouter } from "vue-router";
  
  const userStore = useUserStore();
  //const router = useRouter();
  
  const email = ref("mayde@gmail.com");
  const password = ref("123123");
  
  const handleSubmit = async() => {
    if (!email.value || password.value.length < 6) {
      return alert("Todos los campos son obligatorios");
    }
    await userStore.loginUser(email.value, password.value);
   // router.push("/");
  };
  </script>
  