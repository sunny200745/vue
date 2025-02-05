<script setup lang="ts">
import {ref} from 'vue';
const formName = ref('Label')
</script>

<template>
    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900"> Model Directive Example</h5>
            </div>

            <div class="text-center mt-2">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ formName }}</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formName" />
            </div>
            
            
            
        </div>
</template>

<style>

</style>