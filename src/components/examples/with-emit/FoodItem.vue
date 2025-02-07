<script setup>

import {ref} from 'vue'
import { computed } from "vue";
const emit = defineEmits('favorite-food')

const props = defineProps(['foodItem'])
const item = ref(props.foodItem)
const toggleFavorite = () =>{
    emit('favorite-food', item.value.name)
}
</script>

<template>
    <div class="px-2">
            
            <div v-on:click="toggleFavorite(item)" class="rounded-xl border-black border border-solid  h-[300px] w-[220px] mb-2 mt-3 mx-auto bg-slate-100">
                <div class="p-3">
                    <h2>{{ item.name }}
                        <img v-if="item.favorite" width="30px" class="float-right" :src="`src/assets/img_quality.svg`" >
                    </h2>
                    <img width="100px" :src="`src/assets/${item.img}`" >
                    <p>{{ item.desc }}</p>
                    
                </div>
            </div>
    </div>        
    
</template>

<style>

</style>