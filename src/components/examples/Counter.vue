<script setup lang="ts">

import {ref} from 'vue'
const clicks = ref(0);
const data = ref( {
    name : 'Apples',
    message : 'Apples are good',
})
const countClicks = () =>{
    clicks.value++
}

</script>

<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900">{{ data.name }}</h5>
            </div>
            <div v-on:click="countClicks" class="h-[300px] w-[220px] mt-3 mx-auto">
                <img src="../../assets/img_apple.svg">
                <p>{{ data.message }}</p>
                <p id="red">You have clicked me {{ clicks }} times.</p>
            </div>
    </div>        
    
</template>

<style>

</style>