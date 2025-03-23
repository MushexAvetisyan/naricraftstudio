<script>
import icon1 from '@/assets/images/icon-1.svg';
import icon2 from '@/assets/images/icon-2.svg';
import icon3 from '@/assets/images/icon-3.svg';
import icon4 from '@/assets/images/icon-4.svg';
export default {
  data() {
    return {
      skills: [
        { name: "Web Design", percentage: 100, color: "#c7b1dd" },
        { name: "Mobile Design", percentage: 80, color: "#8caeec" },
        { name: "Development", percentage: 85, color: "#b0d4c1" },
        { name: "SEO", percentage: 90, color: "#e3a6b6" },
      ],
      cards: [
        { title: "Web Design", text: "Nulla vitae elit libero, a pharetra augue.", icon: icon1 },
        { title: "Mobile Design", text: "Donec id elit non mi porta gravida.", icon: icon2 },
        { title: "Development", text: "Cras justo cum sociis natoque magnis.", icon: icon3 },
        { title: "SEO", text: "Phasellus porta elit non mi gravida.", icon: icon4 },
      ],
    };
  },
};
</script>

<template>
  <section class="section about" aria-label="about">
    <div class="container">
      <div class="wrapper">
        <div v-reveal="'left'">
          <h2 class="h2 section-title">What I Do?</h2>
          <p class="section-text">
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </p>
        </div>

        <ul class="progress-list" v-reveal="'right'">
          <li v-for="(skill, index) in skills" :key="index" class="progress-item">
            <div class="label-wrapper">
              <p>{{ skill.name }}</p>
              <span class="span">{{ skill.percentage }}%</span>
            </div>
            <div class="progress">
              <div class="progress-fill" :style="{ width: skill.percentage + '%', backgroundColor: skill.color }"></div>
            </div>
          </li>
        </ul>
      </div>

      <ul class="grid-list">
        <li v-for="(card, index) in cards" :key="index" v-reveal="'bottom'" :data-reveal-delay="index * 250 + 'ms'">
          <div class="about-card">
            <div class="card-icon">
              <img :src="card.icon" width="52" height="52" loading="lazy" :alt="card.title + ' icon'" />
            </div>
            <h3 class="h4 card-title">{{ card.title }}</h3>
            <p class="card-text">{{ card.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>

</style>