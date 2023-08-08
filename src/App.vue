<script setup>

</script>

<template>

<router-link to="/register" v-if="$route.path !== '/dashboard'" class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registration</router-link>
<router-link to="/login" v-if="$route.path !== '/dashboard'" class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</router-link>

<router-view></router-view>
 
</template>

<style scoped>

</style>
