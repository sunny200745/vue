
<script setup lang="ts">
defineProps(['item'])
console.log('######hasjdhaskjdhaskdhaskdha')
</script>

<template>
    <div>
        <li class="mb-2 px-5 pt-3 flex justify-between items-center" >
            <div >
                <div >{{ item.counterPartyName }}</div>
                <div class="tracking-tighter text-gray-500 md:text-sm dark:text-gray-400">
                    {{ item.category }}
                </div>
                

            </div>
            
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
            </svg>
        </li>
    </div>
</template>

<style>

</style>