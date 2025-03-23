<script>
import Hero from '@/components/Sections/Hero.vue';
import About from "@/components/Sections/About.vue";
import Project from "@/components/Sections/Project.vue";
export default {
  components: {Hero, About, Project}
};
</script>

<template>
  <main>
    <article>
      <Hero />


      <!--
        - #ABOUT
      -->
      <About />


    <!--   Projects   -->

      <Project />



      <!--
        - #CONTACT
      -->

      <section class="section contact" aria-label="contact">
        <div class="container">

          <div class="contact-card">

            <div class="contact-content" v-reveal="'left'">
              <div class="card-icon">
                <img src="../assets/images/icon-5.svg" width="44" height="44" loading="lazy" alt="envelop icon">
              </div>

              <h2 class="h2 section-title" v-reveal="'top'" :data-reveal-delay="'0.25s'">If you like what you see, let's work together.</h2>

              <p class="section-text" v-reveal="'top'" :data-reveal-delay="'0.5s'">
                I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from
                this contact form and I will get back to you shortly.
              </p>

            </div>

            <form action="" class="contact-form" v-reveal="'right'" :data-reveal-delay="'0.75s'">

              <div class="input-wrapper" v-reveal="'left'" :data-reveal-delay="'1s'">
                <input type="text" name="name" placeholder="Name *" required class="input-field">
                <input type="email" name="email_address" placeholder="Email *" required class="input-field">
              </div>

              <textarea name="message" placeholder="Message *" required class="input-field" v-reveal="'right'" :data-reveal-delay="'1.25s'"></textarea>

              <button type="submit" class="btn btn-secondary" v-reveal="'top'" :data-reveal-delay="'1.5s'">Send message</button>

            </form>

          </div>

        </div>
      </section>

    </article>
  </main>
</template>
