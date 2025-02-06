<script setup >
    import  {ref} from 'vue';
    import DataService from '../../services/data';
    import TransList from './TransList.vue';
    const transactions = ref(null);

    DataService.getUsers((val)=>{
        transactions.value = val;
    },{})
</script>

<template>
    <div>
        
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900"> Dashboard</h5>
            </div>
            <div class="mb-2">
                <div v-if="transactions">
                    <ul class="divide-y divide-gray-200 dark:divide-gray-700 ">
                        <TransList v-for="item in transactions" :key="item.id" :item="item" />
                    </ul>
                </div>
                <div  v-if="!transactions" class="text-center">
                    <div class="mx-auto mt-5 mb-5 spinner h-12 w-12 border-solid border-8 border-transparent animate-spin"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>