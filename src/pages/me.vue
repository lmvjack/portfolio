<script setup>
    import { playlist, playlistLength } from "~/helpers/playlist";

    // Images
    const images = ref([]);
    for (let n = 1; n < 19; n++) {
        images.value.push(`/images/grid/${n}.webp`)
    }
</script>

<template>
    <main class="w-full flex flex-col justify-center items-center gap-y-5 px-5 md:px-[5%] pb-[5%]">
    <!-- About me -->
        <section id="about" class="w-full">
                <div class="w-full flex flex-row justify-start mt-6 mb-4">
                    <h1 class="text-3xl text-left font-semibold">About me</h1>
                </div>
                <p class="text-white text-base">
                    my archive of pics I like.
                </p>
                <div class="flex flex-row gap-2 md:hidden mt-2">
                    <Icon name="i-ph-mouse-simple" class="text-[24px] text-white rotate-90" />
                    <p>
                        scroll to see
                    </p>
                </div>
            </section>
            
            <section class="w-screen overflow-x-scroll md:w-full md:overflow-hidden">
                <div class="w-[1200px] md:w-full md:h-full flex flex-wrap md:justify-between gap-x-4 md:gap-x-0 gap-y-4 md:overflow-hidden px-5 md:px-0">
                    <img v-for="image in images" :src='image' class="w-48 md:w-[calc(15vw-16px)] h-52 object-cover rounded-lg" />

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
    </main>
</template>