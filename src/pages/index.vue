<script setup>
import { onMounted } from 'vue';
import { projects } from "~/helpers/projects";

function scrollToTop(){
    window.scrollTo(0, 0);
}

// !!! Time
const time = ref('');

// Function to put leading zeros in numbers
function zero(num) {
    if (num < 10) {
        return ("0" + num.toString());
    } else {
        return num;
    }
}

function startTime() {
    const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Rome", timeZoneName: "short"}));
    let h = zero(today.getHours());
    let m = zero(today.getMinutes());
    let s = zero(today.getSeconds());

    time.value = `${h}:${m}:${s}`;
    setTimeout(startTime, 1000);
}

onMounted(() => {
    startTime()
})

</script>

<template>
    <div class="w-screen max-w-7xl m-auto flex flex-col justify-center items-center">
        <div class="w-screen md:w-11/12 lg:w-2/4 min-h-screen flex flex-col justify-start">
            <!-- decoration-->
            <div class="w-full h-6 flex flex-row justify-between font-mono">
                <!--left part-->
                <div class="w-fit h-full flex flex-row">
                    <div class="w-fit h-full bg-[#BF85E6] text-black flex justify-center items-center px-2">
                    <UIcon name="i-ph-circuitry-fill" dynamic />
                    </div>
                    <div class="w-fit h-full bg-[#0069F8] flex justify-center items-center px-2 gap-2">
                        <UIcon name="i-ph-folder-open-fill" dynamic />
                        <p class="text-xs">~/p/index.html</p>
                    </div>
                    <div class="w-fit h-full bg-[#C1BE0F] text-black flex justify-center items-center px-2 gap-2 rounded-r-sm">
                        <UIcon name="i-ph-hand-waving-fill" dynamic />
                        <p class="text-xs">welcome!</p>
                    </div>
                </div>

                <!--right part-->
                <div class="w-fit h-full flex flex-row">
                    <div class="w-fit h-full bg-[#BF85E6] text-black flex justify-center items-center px-2 gap-2 rounded-l-sm">
                        <p class="text-xs">{{ time }}</p>
                        <UIcon name="i-ph-clock-fill" dynamic />
                    </div>
                </div>
                
            
            </div>

            <!-- main content -->
            <div class="flex flex-col justify-start items-start px-4 py-6 md:p-8">
                <!--intro-->
                <div class="flex flex-col justify-start items-start">
                    <UAvatar
                            chip-color="primary"
                            chip-text=""
                            chip-position="top-right"
                            size="xl"
                            src="/images/propic.webp"
                            alt="Avatar"
                            class="mb-2"
                        />
                    <div class="flex flex-row items-end gap-2 mb-2">
                        <h1 class="text-2xl md:text-4xl font-bold ">
                            Ciao, I'm Giacomo!
                        </h1>
                    </div>
                    
                    <p class="text-base font-medium secondary-text mb-2">
                        Tech enthusiast and programmer. 🔋 Currently pursuing a bachelor's in Computer Science at the University of Genoa. 🔌
                    </p>

                    <!--contact buttons-->
                    <div class="flex flex-row flex-wrap gap-2 mb-4">
                        <MeContactButton title="" icon="i-simple-icons:github" url="https://github.com/lmvjack/" />
                        <MeContactButton title="" icon="i-simple-icons:linkedin" url="/" />
                        <MeContactButton title="" icon="i-ph-envelope" url="/" />
                    </div>

                    <!--more about me button-->
                    <NuxtLink to="/me">
                        <div class="flex flex-col justify-center items-center hover:opacity-75">
                            <div class="flex flex-row justify-center items-center gap-2">
                                <p>more about me</p>
                                <UIcon name="i-ph-cursor-click" dynamic />
                            </div>
                            <div class="w-full h-[1px] bg-white rounded-lg"></div>
                        </div>
                    </NuxtLink>
                </div>

                <!--separator-->
                <div class="w-full h-[1px] bg-slate-400 opacity-25 my-8"></div>

                <!--tech stack-->
                <div class="flex flex-col justify-start items-start">
                    <h2 class="text-2xl md:text-4xl font-bold mb-2">
                        Tech stack
                    </h2>
                    <p class="text-base font-medium secondary-text mb-4">
                        Currently learning RISC-V architecture.<br>
                        I'm constantly exploring new technologies and looking for fun stuff to get my hands on. Here's some:
                    </p>

                    <!--technologies-->
                    <div class="w-full flex flex-row flex-wrap">
                        <MeTechTag title="Python" icon="i-logos:python" />
                        <MeTechTag title="C" icon="i-logos:c" />
                        <MeTechTag title="C++" icon="i-logos:c-plusplus" />
                        <MeTechTag title="Arduino" icon="i-logos:arduino" />
                        <MeTechTag title="HTML" icon="i-logos:html-5" />
                        <MeTechTag title="CSS" icon="i-logos:css-3" />
                        <MeTechTag title="Tailwind" icon="i-devicon:tailwindcss" />
                        <MeTechTag title="JavaScript" icon="i-logos:javascript" />
                        <MeTechTag title="Vue" icon="i-logos:vue" />
                        <MeTechTag title="Nuxt" icon="i-logos:nuxt-icon" />
                        <MeTechTag title="Svelte" icon="i-logos:svelte-icon" />
                        <MeTechTag title="Supabase" icon="i-logos:supabase-icon" />
                        <MeTechTag title="RISC-V assembly" icon="i-simple-icons:riscv" />
                        
                    </div>
                </div>

                <!--separator-->
                <div class="w-full h-[1px] bg-slate-400 opacity-25 my-8"></div>

                 <!--projects-->
                 <div class="flex flex-col justify-start items-start">
                    <h2 class="text-2xl md:text-4xl font-bold gap-2 mb-4">
                        Projects
                    </h2>

                    <div class="flex flex-row flex-wrap gap-2">
                        <MeProjectCard v-for="p in projects" :title="p.name" :description="p.description" :icon="p.icon" :url="p.url" />
                    </div>
                </div>
            </div>

            <!-- decoration-->
            <div class="w-full h-6 bg-[#2A2A2A] flex flex-row justify-between font-mono">
                <!--left part-->
                <div class="w-fit h-full flex flex-row">
                    <div class="w-fit h-full flex justify-center items-center px-2 gap-2">
                        <UIcon name="i-ph-cat" dynamic />
                        <p class="text-xs">you've reached the end. bye!</p>
                    </div>
                </div>

                <!--right part-->
                <div class="w-fit h-full flex flex-row">
                    <button @click="scrollToTop">
                        <div class="w-fit h-full text-white flex justify-center items-center px-2 gap-2 rounded-l-sm cursor-pointer">
                            <p class="text-xs underline">scroll back</p>
                            <UIcon name="i-ph-arrow-up" dynamic />
                        </div>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

html{
    font-family: "Nunito Sans", sans-serif;
    background: #111;
    scroll-behavior: smooth;
}

.secondary-text{
    color: #888;
}
</style>