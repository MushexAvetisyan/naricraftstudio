<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { Analytics } from "@vercel/analytics/vue"
</script>

<template>
  <div>
    <Header />
    <router-view /> <!-- This will render the content based on the current route -->
    <Analytics/>
    <Footer />
  </div>
</template>


<style scoped>

</style>
