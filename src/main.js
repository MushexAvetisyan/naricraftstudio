import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


// Custom Reveal Directive
app.directive("reveal", {
    mounted(el, binding) {
        const direction = binding.value || "bottom";
        el.setAttribute("data-reveal", direction);

        const delay = el.getAttribute("data-reveal-delay") || "0ms";
        el.style.transitionDelay = delay;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
    },
});

app.use(createPinia())
app.use(router)

app.mount('#app')
