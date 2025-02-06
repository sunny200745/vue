<script setup lang="ts">
    import DataService from '../../services/data';
    DataService.getUsers((val:any)=>{
        console.log('#########',val)
    },{})
</script>

<template>
    <div>
        <h2>
            Dashboard
        </h2>
    </div>
</template>

<style>

</style>