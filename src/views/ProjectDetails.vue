<template>
    <div>
        <!-- <h1>Este es project: {{ projectSlug }}</h1> -->
        <section class="text-gray-800 body-font">
            <div class="container flex flex-wrap px-5 lg:px-11 pt-24 mx-auto">
                <div class="lg:w-4/12 md:w-5/12 sm:w-6/12 sm:text-center lg:text-left">
                    <div class="mb-8">
                        <h5 class="tracking-widest text-gray-600 mb-2 first-animation">PROJECT CASE</h5>
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl second-animation">
                            <span class="block xl:inline">{{ project.shortRole }}</span>
                        </h1>
                    </div>
                    <div class="mb-5 third-animation">
                        <h5 class="tracking-widest text-gray-600 mb-1">MY ROLE</h5>
                        <ul class="list-none font-semibold">
                            <li v-for="(role, index) in project.myRole" :key="index">
                                {{ role }}
                            </li>
                        </ul>
                    </div>
                    <div class="mb-5 third-animation">
                        <h5 class="tracking-widest text-gray-600 mb-1">CLIENT & COUNTRY</h5>
                        <ul class="list-none font-semibold">
                            <li>{{ project.client }}</li>
                        </ul>
                    </div>
                    <div class="mb-5 third-animation">
                        <h5 class="tracking-widest text-gray-600 mb-1">YEAR</h5>
                        <ul class="list-none font-semibold">
                            <li>{{ project.year }}</li>
                        </ul>
                    </div>
                    <div class="mb-5 third-animation">
                        <h5 class="tracking-widest text-gray-600 mb-1">WEB PAGE</h5>
                        <ul class="list-none font-semibold">
                            <li>
                                <a :href="project.url" target="_blank">{{ project.webpage }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-5 third-animation">
                        <h5 class="tracking-widest text-gray-600 mb-1">TECH</h5>
                        <ul class="list-none font-semibold">
                            <li v-for="(tech, index) in project.technologies" :key="index">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>                
                </div>
                <div class="lg:w-8/12 md:w-7/12 sm:w-6/12 sm:text-center lg:text-justify px-4 fourth-animation">
                    <div v-for="(description, index) in project.longDescription" :key="index">
                        <h3 class="text-xl text-gray-400 font-semibold">{{ description }}</h3>
                        <br>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-12 text-gray-600 body-font" v-scrollanimation>
            <div class="container px-5 lg:px-10 pb-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-full">
                        <div class="md:p-2 p-1 w-1/3" v-for="(image, index) in project.images" :key="index" @click="() => showGallery(index)">
                            <img alt="gallery" class="w-full object-cover h-full object-center block hovereffect" :src="image">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <vue-easy-lightbox
        
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
        ></vue-easy-lightbox>
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  props: ['projectSlug'],
  components: {
    VueEasyLightbox
  },
  data () {
    return {
      visible: false,
      index: 0 // default: 0
    }
  },
  computed: {
    project () {
      return this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug)[0]
    },
    images () {
      return this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug)[0].images
    } 
  },
  methods: {
    showGallery (index) {
      this.index = index
      this.show()
    },
    show () {
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0;
  transform: translateY(30px);
  transition: all .4s linear;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.hovereffect {
  transform: translateY(0px);
  transition: .35s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);
    transition: .35s;
  }
}
</style>