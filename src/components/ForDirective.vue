
<script setup lang="ts">
import { ref } from "vue";

const animals = ['Tiger','Zebra','Wolf','Crocodile','Seal'];
const products:any = ref(null)
const baseUrl = 'http://localhost:4000/';

fetch(baseUrl+'client-api/v2/products')
    .then(response => response.json())
    .then(data => {
      console.log('Data', data)
      products.value = data.items
    });
</script>

<template>
    <div>
        <div class="max-w-screen-xl block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span>
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"> For Directive Example 1</h5>
            </span>
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="(item, i) in animals" :key="i" >
                    {{ item }}
                </li>
            </ul>
        </div>
        <br/>
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900"> For Directive Example 2 : Fetching data from API</h5>
            </div>
            <div class="mb-2">
                <div v-if="products">
                    <ul class="divide-y divide-gray-200 dark:divide-gray-700 ">
                        <li class="mb-2 px-5 pt-3" v-for="product in products" :key="product.id">{{product.name}}</li>
                    </ul>
                </div>
                <div v-if="!products" class="text-center">
                    <div class="spinner-border spinner-border-sm"></div>
                </div>
            </div>
        </div>
    </div>

        


</template>

<style>

</style>