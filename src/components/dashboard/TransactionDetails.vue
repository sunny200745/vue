
<script setup>
    import { ref } from 'vue';
    import DataService from '../../services/data';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    let transDetails = ref(null)
    const paramId = route.params.id;
    const transactionList = DataService.getTransList();
    transDetails = transactionList.filter(item => item.id === paramId)[0]
    console.log(transactionList.filter(item => item.id === paramId)[0])
</script>

<template>
    <div>
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                <h5 class="p-3 text-2xl  font-bold tracking-tight text-gray-900"> Transaction Details</h5>
            </div>
            <div class="mb-2">
                

                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Counter Party Account Number
                                </th>
                                <td class="px-6 py-4">
                                    {{ transDetails?.counterPartyAccountNumber }}
                                </td>
                                
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    City
                                </th>
                                <td class="px-6 py-4">
                                    {{ transDetails.counterPartyCity }}
                                </td>
                                
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Booking Date 
                                </th>
                                <td class="px-6 py-4">
                                    {{ transDetails.bookingDate }}
                                </td>
                                
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Category 
                                </th>
                                <td class="px-6 py-4">
                                    {{ transDetails.category }}
                                </td>
                                
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Address
                                </th>
                                <td class="px-6 py-4">
                                    {{ transDetails.counterPartyAddress }}
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<style>

</style>