<script setup>

import {reactive,ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

import {authStore} from '../store/store.js';
const auth = authStore();

const LoginInput = reactive({
    email: '',
    password: '',
});

</script>

<template>

<div class="h-screen bg-gradient-to-br to-indigo-600 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Login Page</h1>
        <div>
          <label class="text-black block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="email" v-model="LoginInput.email" class="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label class="text-black block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" v-model="LoginInput.password" class="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button @click.prevent="auth.Login(LoginInput.email, LoginInput.password)" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button><br><br>
      <p class="text-red-500">{{ LoginMSG }}</p>
    </div>
  </form>
</div>

</template>

<style lang="">
    
</style>