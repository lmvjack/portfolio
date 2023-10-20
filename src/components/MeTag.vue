<template>
    <div class="w-auto flex flex-row justify-center items-center gap-2 bg-[#FFE6B7] h-5 p-3 rounded-lg">
        <Icon :name="icon" color="black" />
        <p class="text-black text-xs">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
}>();
</script>