<script setup>
import { onMounted } from 'vue';
import { playlist, playlistLength } from "~/helpers/playlist";
import { tags } from "~/helpers/tags";
import { projects } from "~/helpers/projects";

const { metaSymbol } = useShortcuts()
const value = ref(50)

const items = [
  [{
    label: 'Profile',
    avatar: {
      src: '/images/propic.svg'
    },
    shortcuts: ['H'],
    to: '#profile'
  }], [{
    label: 'Personal projects',
    icon: 'i-ph-code',
    shortcuts: ['E'],
    to: '#projects',
  }, {
    label: 'Works',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['L'],
    disabled: true
  }], [{
    label: 'About',
    icon: 'i-ph-cat',
    shortcuts: ['L'],
    to: '#about'
  }, {
    label: 'Music',
    icon: 'i-ph-playlist',
    to: '#music'
  }], [{
    label: 'Contacts',
    icon: 'i-ph-envelope',
    shortcuts: ['O'],
    disabled: true
  }]
]

// Images
const images = ref([]);
for (let n = 1; n < 18; n++) {
    images.value.push(`/images/grid/${n}.webp`)
}

// !!! Clock
const time = ref('');

function zero(num) {  //Function to put leading zeros in numbers
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

const { data: repos } = await useFetch('https://api.github.com/users/lmvjack/repos?per_page=2')
</script>



<template>
    <main class="w-full flex flex-col justify-center items-center gap-y-5 px-5 md:px-[5%] pb-[5%]">
        <section id="profile" class="h-full md:h-64 w-full flex flex-col md:flex-row justify-center items-center gap-5 box-content pt-[5vh]">
            <!-- Profile card -->
            <UCard class="w-full md:w-3/4 min-h-72 h-auto md:h-full">
                <template #header > 
                    <div class="w-full flex flex-row justify-center items-center gap-5">
                        <UAvatar src="/images/propic.webp" chip-color="orange" chip-text="👋" chip-position="top-right" size="lg" />
                        <div class="w-full flex flex-col justify-center items-left gap-0.5 ">
                            <h2 class="text-lg font-semibold">yvk15</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Welcome to my playground :D</p>
                        </div>
                    </div>
                    
                </template>
                I'm a web developer and aspiring software engineer. Currently I'm pursuing a bachelor's in Computer Science at the University of Genoa.
                <template #footer >
                    <div class="flex items-center justify-between">
                        <!-- <p class="text-sm">
                            Contact me using 
                            <span class="text-sm text-gray-500 dark:text-gray-400 underline">
                                me [at] giacomoquarto.com
                            </span>
                        </p> -->
                        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                            <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
                        </UDropdown>
                        <div class="flex flex-row justify-center items-center gap-2">
                            <NuxtLink to="https://github.com/lmvjack">
                                <Icon name="i-ph-github-logo" class="text-[18px] translate-y-[-2px]" color="white" />
                            </NuxtLink>
                            <Icon name="i-ph-linkedin-logo" class="text-[18px] text-gray-500 dark:text-gray-400" />
                        </div>
                    </div>

                </template>
            </UCard>
            <!-- ----- -->

           <!-- Info card -->
            <UCard class="w-full md:w-1/4 h-64 md:h-full">
                <div class="w-full flex flex-row justify-between">
                    <p>My local time</p>
                    <!-- <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                        <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
                    </UDropdown> -->
                </div>
                <p style="font-family: 'Press Start 2P', cursive;">{{ time }}</p>
                <div class="h-full md:h-36 flex flex-wrap gap-3 md:gap-0 mt-[5%] overflow-scroll">
                    <MeTag v-for="tag in tags" :title="tag.title" :icon="tag.icon" />
                </div>
            </UCard>
            <!-- ----- -->
        </section>
        
        
        
        <!-- Open source personal projects -->
        <section id="projects">
            <div class="w-full flex flex-row justify-start mt-6 mb-4">
                <h1 class="text-3xl text-left font-semibold">Personal projects</h1>
            </div>
            <div  class="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                <UCard v-for="repo in repos" class="w-full md:w-1/3">
                    <template #header> 
                        {{repo.name}}
                    </template>

                    <div class="h-40">
                        {{repo.description}}
                    </div>
                    
                    <template #footer >
                        <div class="flex justify-end">
                            <UButton label="View project" :to="repo.name"  color="orange" variant="ghost"  />
                        </div>
                    </template>
                </UCard>
            </div>
        </section>

        <!-- Works and commissions -->
        <!-- <div class="w-full flex flex-row justify-start mt-6">
            <h1 class="text-3xl text-left font-semibold">Works</h1>
        </div> -->

        <!-- About me -->
        <section id="about" class="w-full">
            <div class="w-full flex flex-row justify-start mt-6 mb-4">
                <h1 class="text-3xl text-left font-semibold">About me</h1>
            </div>
            <p class="text-white text-base">
                Some pics I like that I've found on the internet or that I've taken.
            </p>
        </section>
        
        <section class="w-screen overflow-x-scroll md:w-full md:overflow-hidden">
            <div class="w-[800px] md:w-full md:h-full flex flex-wrap md:justify-between gap-x-4 md:gap-x-0 gap-y-4 md:overflow-hidden px-5 md:px-0">
                <img v-for="image in images" :src='image' class="w-1/5 md:w-[calc(15vw-16px)] h-52 rounded-lg" />

            </div>

        </section>

        

        

        <!-- Playlist card -->
        <section id="music" class="w-full">
            <UCard class="w-full">
                <template #header >
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-between gap-2">
                            <p class="font-semibold">Playlist</p>
                            <UAvatarGroup size="sm" :max="3">
                                <UAvatar src="/images/music/pink.webp" alt="Kanye West" />
                                <UAvatar src="/images/music/technique.webp" alt="Immortal Technique" />
                                <UAvatar src="/images/music/linkin.webp" alt="Linkin Park" />
                                <UAvatar v-for="n in 17" src="" alt="" />

                            </UAvatarGroup>
                        </div>
                        
                        <div class="flex items-center justify-between gap-1">
                            <!-- <ph-spotify-logo :size="24" weight="fill" />
                            <p class="text-sm">See on Spotify</p> -->
                            <Icon name="i-ph-smiley-sticker" class="text-[24px] text-white" />
                            <p class="text-sm">{{ playlistLength}} songs I like</p>
                        </div>
                    </div>
                </template>
                    <UTable :rows="playlist" />
                <!-- <template #footer /> -->
            </UCard>
        </section>
        <!-- ----- -->
    

        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>

        
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

html {
    @apply scroll-smooth;
}
</style> 