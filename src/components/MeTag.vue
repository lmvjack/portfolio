<template>
    <div class="w-auto flex flex-row justify-center items-center gap-2 bg-transparent border-[1px] border-white h-5 p-3 rounded-lg">
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