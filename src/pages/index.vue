<script setup>
import { onMounted } from 'vue';
import { PhSpotifyLogo, PhGithubLogo, PhLinkedinLogo } from "@phosphor-icons/vue";

const { metaSymbol } = useShortcuts()
const value = ref(50)
const isOpen = ref(false)

const people = [{
  id: 1,
  author: 'Kanye West',
  title: 'Follow God',
  album: 'JESUS IS KING'
},
{
  id: 2,
  author: 'Kanye West, PARTYNEXTDOOR',
  title: 'Ghost Town',
  album: 'ye'
},
{
  id: 3,
  author: 'Immortal Technique',
  title: 'Dance With The Devil',
  album: 'Revolutionary Vol. 1'
},
{
  id: 4,
  author: 'Linkin Park',
  title: 'CASTLE OF GLASS',
  album: 'LIVING THINGS'
},
]

const items = [
  [{
    label: 'Profile',
    avatar: {
      src: '/images/propic.svg'
    }
  }], [{
    label: 'Personal projects',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Works',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Music',
    icon: 'i-heroicons-archive-box-20-solid',
    shortcuts: ['S'],
    to: 'prova'
  }, {
    label: 'Hobbies',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Contacts',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]



// !!! Clock in footer
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
    <div class="w-full flex flex-col justify-center items-center gap-y-5 px-[15%] py-[5%]">
        <div class="h-64 w-full flex flex-row justify-center items-center gap-5">
            <!-- Profile card -->
            <UCard class="w-3/4 h-full">
                <template #header > 
                    <div class="w-full flex flex-row justify-center items-center gap-5">
                        <UAvatar src="/images/propic.svg" chip-color="purple" chip-text="👋" chip-position="top-right" size="lg" />
                        <div class="w-full flex flex-col justify-center items-left gap-0.5 ">
                            <h2 class="text-lg font-semibold">yvk15</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400">welcome to my playground :D</p>
                        </div>
                    </div>
                    
                </template>
                I'm a web developer and aspiring software engineer. Currently I'm pursuing a bachelor's in Computer Science at the University of Genoa.
                <template #footer >
                    <div class="flex items-center justify-between">
                        <p class="text-sm">
                            Contact me using 
                            <span class="text-sm text-gray-500 dark:text-gray-400 underline">
                                me@giacomoquarto.com
                            </span>
                        </p>
                        <div class="flex flex-row justify-center items-center gap-2">
                            <NuxtLink to="https://github.com/lmvjack">
                                <ph-github-logo :size="18" weight="fill" />
                            </NuxtLink>
                            <ph-linkedin-logo :size="18" weight="fill" class="text-gray-500 dark:text-gray-400" />
                        </div>
                    </div>

                </template>
            </UCard>
            <!-- ----- -->

           <!-- Info card -->
            <UCard class="w-1/4 h-full">
                <p>My local time</p>
                <p style="font-family: 'Press Start 2P', cursive;">{{ time }}</p>
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                    <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </UCard>
            <!-- ----- -->
        </div>
        

        <!-- Playlist card -->
        <UCard class="w-full">
            <template #header >
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-between gap-2">
                        <p class="font-semibold">Playlist</p>
                        <UAvatarGroup size="sm" :max="3">
                            <UAvatar src="/images/kanye.png" alt="Kanye West" />
                            <UAvatar src="/images/technique.png" alt="Immortal Technique" />
                            <UAvatar src="/images/linkin.png" alt="Linkin Park" />
                            <UAvatar src="" alt="PARTYNEXTDOOR" />
                        </UAvatarGroup>
                    </div>
                    
                    <div class="flex items-center justify-between gap-1">
                        <ph-spotify-logo :size="24" weight="fill" />
                        <p class="text-sm">See on Spotify</p>
                    </div>
                </div>
            </template>
                <UTable :rows="people" />
            <template #footer />
        </UCard>
        <!-- ----- -->

        <div class="w-full flex flex-row justify-center items-center gap-5">
            <UCard v-for="repo in repos" class="w-1/3">
                <template #header> 
                    {{repo.name}}
                </template>

                <div class="h-40">
                    {{repo.description}}
                </div>
                
                <template #footer >
                    <div class="flex justify-end">
                        <UButton label="View project" @click="isOpen = true" color="purple" variant="ghost"  />
                        <UModal v-model="isOpen" fullscreen>
                        <UCard
                            :ui="{
                            base: 'h-full flex flex-col',
                            rounded: '',
                            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                            body: {
                                base: 'grow'
                            }
                            }"
                        >
                            <template #header>
                            <div class="flex items-center justify-between">
                                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                First project
                                </h3>
                                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                            </div>
                            </template>
                            <Placeholder class="h-full" />
                        </UCard>
                        </UModal>
                    </div>
                </template>
        </UCard>

        </div>
    

        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>

        
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style> 