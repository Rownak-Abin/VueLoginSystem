<script setup>

import {reactive,ref} from 'vue';

const registerObject = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const passwordMsg = ref("");
const RegiSuccessMsg = ref("");

function matchPassword(){
    if(registerObject.password != registerObject.confirmPassword){
        passwordMsg.value = "Password do not match";
    }else{
        passwordMsg.value = "";
    }
}

function setRegisterObject(){
    const jsonString = JSON.stringify(registerObject);
    localStorage.setItem('registerObject', jsonString);
    RegiSuccessMsg.value = "Registered Successfully";
}
    

</script>

<template>

<div class="h-screen bg-gradient-to-br to-indigo-600 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Register Page</h1>
        <div>
          <label class="text-black block mb-1 font-semibold">Username</label>
          <input type="text" v-model="registerObject.name" class="text-black bg-indigo-50 px-4 py-2 outline-none  w-full" />
        </div>
        <div>
          <label class="text-black block mb-1 font-semibold">Email</label>
          <input type="email" v-model="registerObject.email" class="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label class="text-black block mb-1 font-semibold">Password</label>
          <input type="password" v-model="registerObject.password" class="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
          <div>
          <label class="text-black block mb-1 font-semibold">Confirm Password</label>
          <input type="password" @keyup="matchPassword()" v-model="registerObject.confirmPassword" class="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          <p class="text-red-500">{{ passwordMsg }}</p>
        </div>
      </div>
      <button @click.prevent="setRegisterObject()" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button><br><br>
      <p class="text-green-500">{{ RegiSuccessMsg }}</p>
    </div>
  </form>
</div>

</template>

<style lang="">
    
</style>