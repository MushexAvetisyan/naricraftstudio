<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <Header />
    <router-view /> <!-- This will render the content based on the current route -->
    <Footer />
  </div>
</template>


<style scoped>

</style>
