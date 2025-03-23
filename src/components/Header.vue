<template>
  <div>
    <header class="header-area">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <nav class="navigation">
              <RouterLink class="logo" to="/">
                <h3>
                  NariCraftStudio
                </h3>
              </RouterLink>
              <button class="mobilebtn" @click="toggleMenu()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="27"
                    viewbox="0 0 30 27"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g fill="#0077b6" style="fill: #0077b6">
                      <g>
                        <path
                            d="M0 17H30V19H0zM0 25H30V27H0z"
                            transform="translate(-1376 -48) translate(1376 48)"
                        />
                        <text
                            font-family="Poppins"
                            sans-serif
                            font-size="10"
                            font-weight="500"
                            letter-spacing=".2"
                            transform="translate(-1376 -48) translate(1376 48)"
                        >
                          <tspan x=".115" y="10">MENU</tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div class="menu-area" :class="{ show: mobileMenu }">
                <ul class="marginauto">
                  <li><RouterLink class="navbar-link" to="/">Home</RouterLink></li>
                  <li><RouterLink class="navbar-link" to="/about">About</RouterLink></li>
                </ul>

                <div class="wrapper">
                  <a href="mailto:info@email.com" class="contact-link">naricraftstudio@gmail.com</a>
                  <a href="tel:001234567890" class="contact-link">+37491282841</a>
                </div>

                <button @click="toggleTheme" class="theme-toggle">
                  <span v-if="theme === 'light'">🌙 Dark Mode</span>
                  <span v-else>☀️ Light Mode</span>
                  </button>

              </div>
            </nav>
          </div>
        </div>
      </div>
      <ul class="social-list">
        <li>
          <a href="https://www.facebook.com/naricraftstudio" target="_blank" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";

const mobileMenu = ref();
function toggleMenu() {
  mobileMenu.value = !mobileMenu.value;
}
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();

</script>

<style lang="scss" scoped>
</style>
