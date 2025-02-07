<script setup lang="ts">
import FancyButton from './FancyButton.vue';
const foods =  [
        { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg'},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg'},
        { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'img_cake.svg'}
      ]
</script>

<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900">Slots </h5>
            </div>
            <div class="flex justify-around">
                
                    <div class="mt-3">
                        <h2 class="text-md font-medium"> Slots Basic</h2>
                        <FancyButton class="mt-3">
                            Click me! <!-- slot content -->
                        </FancyButton>

                    </div>
                    <div
                        class="inline-block mt-3 mb-3  min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <div class="mt-3">
                        <div class="">
                            <h2 class="text-md font-medium text-center"> Slots Medium</h2>
                            <div class="flex flex-wrap ">
                                <FoodSlot
                                :key="x"
                                v-for="x in foods"
                                >   
                                    <div class="mx-3 p-3 h-[300px] w-[220px] mb-2 mt-3  bg-slate-100 rounded-xl border-black border border-solid">
                                        <h2>{{ x.name }}
                                            <img  width="30px" class="float-right" :src="`src/assets/img_quality.svg`" >
                                        </h2>
                                        <img width="100px" :src="`src/assets/${x.url}`" >
                                        <p>{{ x.desc }}</p>
                                        
                                    </div>

                                </FoodSlot>
                            </div>
                            
                        </div>
                        
                    </div>
                
            </div> 
            
    </div> 
    
</template>

<style>

</style>