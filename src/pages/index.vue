<script setup>
import { PhSpotifyLogo } from "@phosphor-icons/vue";

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
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
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
</script>



<template>
    <div class="w-full flex flex-col justify-center items-center gap-5 px-[25%] py-[5%]">
        <!-- Info card -->
        <UCard class="w-full">
            <template #header > 
                <div class="w-full flex flex-row justify-center items-center gap-5">
                    <UAvatar src="/images/propic.png" chip-color="purple" chip-text="" chip-position="top-right" size="lg" />
                    <div class="w-full flex flex-col justify-center items-left gap-0.5 ">
                        <h2 class="text-lg font-semibold">Giacomo Quarto</h2>
                        <p class="text-sm">hi, it's me</p>
                    </div>
                </div>
                
            </template>
            Currently I'm pursuing a bachelor's in Computer Science at the University of Genoa.
            <template #footer />
        </UCard>
        <!-- ----- -->

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

    <UCard class="w-full">
        <template #header />
        Body
        <template #footer >
            <div class="flex justify-end">
                <UButton label="View project" @click="isOpen = true" color="purple"  />
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

    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Jump to" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>

        
    </div>
</template>