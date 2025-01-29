<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
const msg = "This is in Tailwind!!";
</script>

<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">{{ msg }}</strong>
    <span class="block sm:inline">
      Something seriously is about to happen.</span
    >
  </div>
  

  

  


  <div class="m-8">
    <router-view></router-view>
  </div>

</template>

<style scoped></style>
