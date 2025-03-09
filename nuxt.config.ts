// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  app: {
    head: {
      title: "Lucky Draw",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  compatibilityDate: "2024-09-14",

  modules: [
    "@nuxtjs/google-fonts",
    "@vesp/nuxt-fontawesome",
    "@nuxt/ui",
  ],
  fontawesome: {
    icons: {
      solid: ["magnifying-glass", "location-dot", "user", "bars"],
    },
  },
  googleFonts: {
    families: {
      Prompt: [400, 700],
      Lato: [400, 700],
      "Noto Sans Thai": [400, 700],
    },
    display: "swap",
  },
};