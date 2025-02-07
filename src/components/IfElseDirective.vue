<script setup lang="ts">
import {ref} from 'vue'
const word:any = ref('apple')
</script>

<template>
    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900"> If Else Directive Example</h5>
            </div>

            <div class="text-center mt-2">
                <button @click="word = 'pizza'" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Click Me</button>
                To change the image
                <figure class="mx-auto relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <div v-if="word === 'apple'">
                        <a href="#">
                            <img class="rounded-lg" src="../assets/img_apple.svg" alt="image description">
                        </a>
                    </div>
                    <div v-else-if="word === 'pizza'">
                        <a href="#">
                            <img class="rounded-lg" src="https://www.w3schools.com/vue/img_pizza.svg" alt="image description">
                        </a>
                    </div>
                </figure>
            </div>
            
            
            
        </div>
</template>

<style>

</style>