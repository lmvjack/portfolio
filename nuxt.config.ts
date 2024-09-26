// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  spaLoadingTemplate: true,
  devtools: { enabled: true },
  srcDir: "src",
  modules: ['@nuxt/ui', 'nuxt-icon'],

  colorMode: {
    preference: 'dark'
  },

  ui: {
    icons: ["ph"],
  },

  compatibilityDate: '2024-09-26',
})