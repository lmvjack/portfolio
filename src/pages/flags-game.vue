<script setup lang="ts">
console.log('Hello!')

const route = useRoute()
</script>

<template>
    <div class="w-full h-screen flex flex-col justify-start items-start gap-5 p-[5%] md:py-6 md:px-12">

          <div class="w-full flex items-center justify-between">
            <h1 class="text-white text-2xl font-semibold">
                {{  route.name }}
            </h1>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" to="/" />
          </div>
        
        
        <UAlert title="Work in progress‼️" description="This page is work in progress." icon="i-heroicons-command-line" color="orange" variant="subtle" />
    </div>
</template>