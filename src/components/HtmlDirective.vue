<script setup lang="ts">
import {ref} from 'vue'
const htmlContent = '<ol><li>Tomotoes</li><li>Ginger</li><li>Garlic</li></ol>'
</script>

<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900"> HTML Directive Example</h5>
            </div>

            <div class="flex">
                <div class="flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-2">
                        <h4 class="font-bold"> Content without v-html</h4>
                        <p>{{ htmlContent }}</p>
                    </div>
                </div>
                <div class="flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="font-bold"> Content with v-html</h4>
                    <div class="mb-2" v-html="htmlContent">
                        
                    </div>
                </div>
            </div>
            
            
        </div>
</template>

<style>

</style>