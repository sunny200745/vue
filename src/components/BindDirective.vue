<script setup lang="ts">
import {ref} from 'vue'
const colorVal = ref('lightGreen');

const product = ref(null)
const baseUrl = 'http://localhost:4000/'
fetch(baseUrl+'client-api/v2/products')
    .then(response => response.json())
    .then(data => {
      console.log('Data', data)
      product.value = data
    });


</script>
<template>
  <div class="max-w-screen-xl block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <span>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Bind Directive </h5>
    </span>
    <h2>Example v-bind Directive</h2>
  <p>The v-bind directive connects the style attribute of the DIV element to the 'colorVal' data property.</p>
  <div v-bind:style="{ backgroundColor: colorVal }">DIV element</div>
  <p>Use the input type="color" box below to change the color.</p>
  <p><input type="color" v-model="colorVal"> <pre>colorVal: '{{ colorVal }}'</pre></p>
  </div>


</template>
