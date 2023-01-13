// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.npm_lifecycle_event === 'dev' ? true : false;
console.log(isDev);
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  build: {
    transpile: isDev ? [] : ['element-plus'],
    // transpile: ['element-plus'],
  },
});
