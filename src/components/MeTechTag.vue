<template>
    <div class="bg-stone-50 bg-opacity-20 w-auto flex flex-row justify-center items-center gap-2 bg-transparent h-5 p-4 rounded-lg">
        <ClientOnly><UIcon :name="icon" dynamic /></ClientOnly>
        <p class="text-white text-sm">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
}>();
</script>