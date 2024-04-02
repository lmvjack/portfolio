<template>
    <NuxtLink class="w-full" :to="url">
        <div class="w-full bg-[#1F2021] flex flex-col gap-2 rounded-md px-8 py-4 hover:bg-[#15191F]">
            <ClientOnly><UIcon :name="icon" class="text-2xl" dynamic /></ClientOnly>
            <h3 class="text-lg font-bold text-white">{{ title }}</h3>
            <p class="text-sm secondary-text">{{ description }}</p>
        </div>
    </NuxtLink>
</template>


<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    icon: string;
    url: string;
}>();
</script>