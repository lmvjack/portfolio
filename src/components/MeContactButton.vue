<template>
    <NuxtLink :to="url">
        <div class="px-6 py-3 text-[#C1CBD4] bg-[#1E2228] flex flex-row gap-2 justify-center items-center rounded-md hover:bg-[#24292F]">
            <ClientOnly><UIcon :name="icon" dynamic /></ClientOnly>
            <p v-if="title != ``" class="text-sm font-semibold">{{ title }}</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
    url: string;
}>();
</script>