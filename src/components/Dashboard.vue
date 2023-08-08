<script setup>

const LoginData = localStorage.getItem('registerObject');
const jsonString = JSON.parse(LoginData);

function logout(){
 window.location.href = '/register'
}

</script>

<template>
<div class="welcome">
    <p class="welcomeMSG">Welcome {{ jsonString.name }} ! </p>
</div>

 <button @click="logout()"  class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Logout</button><br><br>

</template>

<style scoped>

.welcome{
    background-image: linear-gradient(rgb(29, 181, 72), rgb(72, 145, 255));
    height: 400px;
    width: 600px;
    padding: 120px;
    border-radius:15px;
}

.welcomeMSG{
    color: rgb(188, 248, 160);
    font-size: 45px;
    text-align: center;
    font-weight: bold;
}
    
</style>