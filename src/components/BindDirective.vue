<script setup lang="ts">
import {ref} from 'vue'
const colorVal = ref('lightGreen');
</script>
<template>
    <h2> Bind Directive </h2>
    <h2>Example v-bind Directive</h2>
  <p>The v-bind directive connects the style attribute of the DIV element to the 'colorVal' data property.</p>
  <div v-bind:style="{ backgroundColor: colorVal }">DIV element</div>
  <p>Use the input type="color" box below to change the color.</p>
  <p><input type="color" v-model="colorVal"> <pre>colorVal: '{{ colorVal }}'</pre></p>
</template>
