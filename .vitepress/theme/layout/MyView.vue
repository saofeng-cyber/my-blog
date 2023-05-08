<script setup lang="ts">
import { useData } from 'vitepress';

const { title, description } = useData();
</script>
<template>
    <div>
        {{ description }}
    </div>
</template>