<script setup lang="ts">
import { useData } from 'vitepress';
import { ref } from "vue";

const data = useData();
console.log(data.page.value);
console.log(data);
const html = ref<string>("AsideBefore")

</script>
<template>
    <img src="/logo.svg" alt="" srcset="">
</template>