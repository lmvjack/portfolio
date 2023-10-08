<template>
    <div class="bg-stone-50 bg-opacity-20 w-auto flex flex-row justify-center items-center gap-2 bg-transparent h-5 p-4 rounded-lg">
        <Icon :name="icon" color="white" />
        <p class="text-white text-xs">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
}>();
</script>