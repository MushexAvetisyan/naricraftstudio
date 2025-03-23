<script setup>

</script>

<template>
  <section class="section hero" aria-label="home">
    <div class="container">

      <figure class="hero-banner">
        <img src="../../assets/images/2022-01-30-20-40-57-333.jpg" width="560" height="540" alt="Julia" class="w-100"
             v-reveal="'top'">

        <img src="../../assets/images/hero-shape.svg" width="203" height="91" alt="250+ Projects Done" class="shape"
             v-reveal="'top'"
             :data-reveal-delay="'0.25s'">

        <img src="../../assets/images/hero-shape.svg" width="203" height="91" alt="250+ Projects Done" class="shape_two"
             v-reveal="'top'"
             :data-reveal-delay="'0.25s'">
      </figure>

      <div class="hero-content">

        <h1 class="h1 hero-title" v-reveal="'top'"
            :data-reveal-delay="'0.5s'">
          I'm Naira Avetisyan
        </h1>

        <p class="section-text" v-reveal="'top'"
           :data-reveal-delay="'0.75s'">
          Hello! I'm Naira, a freelance user interface designer & developer based in London. I’m very passionate
          about the work that I do.
        </p>

        <div class="btn-wrapper" v-reveal="'top'" :data-reveal-delay="'0.75s'">
          <a href="#" class="btn btn-primary">See My Works</a>

          <a href="#" class="btn btn-secondary">Contact Me</a>
        </div>

      </div>

    </div>
  </section>
</template>

<style>

</style>