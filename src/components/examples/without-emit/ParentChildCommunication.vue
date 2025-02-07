<script setup >

import FoodItem from './FoodItem.vue';

const foods =  [
    { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true,img: 'img_apple.svg'},
    { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false,img: 'img_pizza.svg'},
    { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false, img: 'img_rice.svg'},
    { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true, img: 'img_fish.svg'},
    { name: 'Cake', desc: 'Cake is something sweet that tates good.', favorite: false, img: 'img_cake.svg'}
]

</script>

<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900">Parent Child Communication without emit</h5>
            </div>
            <div id="wrapper" class="flex flex-wrap">
                <FoodItem
                v-for="x in foods"
                :key="x.name"
                :foodItem="x"/>
            </div> 
            
    </div>        
    
</template>

<style>

</style>