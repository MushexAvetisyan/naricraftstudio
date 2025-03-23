<script>

</script>

<template>
  <section class="section project" aria-labelledby="project-label">
    <div class="container">

      <div class="title-wrapper" v-reveal="'top'">
        <div>
          <h2 class="h2 section-title" id="project-label">Latest Projects</h2>
          <p class="section-text">
            Check out some of my latest projects with creative ideas.
          </p>
        </div>
        <a href="#" class="btn btn-secondary" v-reveal="'top'" :data-reveal-delay="'0.25s'">See All Projects</a>
      </div>

      <ul class="grid-list">
        <li v-reveal="'bottom'" :data-reveal-delay="'0.5s'">
          <div class="project-card project-card-1" style="background-color: #f8f5fb">
            <div class="card-content" v-reveal="'left'">
              <p class="card-tag" style="color: #a07cc5">Web Design</p>
              <h3 class="h3 card-title">Snowlake Theme</h3>
              <p class="card-text">
                Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                porta felis euismod semper. Fusce dapibus tellus cursus.
              </p>
              <a href="#" class="btn-text" style="color: #a07cc5">
                <span class="span">See Project</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
            <figure class="card-banner" v-reveal="'right'" :data-reveal-delay="'0.75s'">
              <img src="../../assets/images/project-1.png" width="650" height="370" loading="lazy" alt="Web Design"
                   class="w-100">
            </figure>
          </div>
        </li>

        <li v-reveal="'bottom'" :data-reveal-delay="'0.5s'">
          <div class="project-card project-card-2" style="background-color: #f1f5fd">
            <div class="card-content" v-reveal="'right'">
              <p class="card-tag" style="color: #3f78e0">Mobile Design</p>
              <h3 class="h3 card-title">Budget App</h3>
              <p class="card-text">
                Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                porta felis euismod semper. Fusce dapibus tellus cursus.
              </p>
              <a href="#" class="btn-text" style="color: #3f78e0">
                <span class="span">See Project</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
            <figure class="card-banner" v-reveal="'left'" :data-reveal-delay="'0.75s'">
              <img src="../../assets/images/project-2.png" width="600" height="367" loading="lazy" alt="Web Design"
                   class="w-100">
            </figure>
          </div>
        </li>

        <li v-reveal="'bottom'" :data-reveal-delay="'0.5s'">
          <div class="project-card project-card-3" style="background-color: #f5faf7">
            <div class="card-content" v-reveal="'left'">
              <p class="card-tag" style="color: #7cb798">Web Design</p>
              <h3 class="h3 card-title">Missio Theme</h3>
              <p class="card-text">
                Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque
                id ligula felis.
              </p>
              <a href="#" class="btn-text" style="color: #7cb798">
                <span class="span">See Project</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
            <figure class="card-banner" v-reveal="'right'" :data-reveal-delay="'0.75s'">
              <img src="../../assets/images/project-3.png" width="600" height="367" loading="lazy" alt="Web Design"
                   class="w-100">
            </figure>
          </div>
        </li>

        <li v-reveal="'bottom'" :data-reveal-delay="'0.5s'">
          <div class="project-card project-card-4" style="background-color: #fcf4f6">
            <div class="card-content" v-reveal="'left'">
              <p class="card-tag" style="color: #d16b86">Mobile Design</p>
              <h3 class="h3 card-title">Storage App</h3>
              <p class="card-text">
                Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                porta felis euismod semper.
              </p>
              <a href="#" class="btn-text" style="color: #d16b86">
                <span class="span">See Project</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
            <figure class="card-banner" v-reveal="'right'" :data-reveal-delay="'0.75s'">
              <img src="../../assets/images/project-4.png" width="620" height="370" loading="lazy" alt="Mobile Design"
                   class="w-100">
            </figure>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<style>

</style>