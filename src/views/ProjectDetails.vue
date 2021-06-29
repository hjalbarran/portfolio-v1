<template>
<div>
    <h1>Este es project: {{ projectSlug }}</h1>

    <section class="text-gray-800 body-font">
        <div class="container flex flex-wrap px-5 lg:px-10 pt-24 mx-auto">
            <div class="lg:w-4/12 md:w-5/12 sm:w-6/12 sm:text-center lg:text-left">
                <div class="mb-8">
                    <h5 class="tracking-widest text-gray-600 mb-2 first-animation">PROJECT CASE</h5>
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl second-animation">
                        <!-- <span class="block xl:inline">Website Developer for an ecommerce</span> -->
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
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301">
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360">
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303">
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
  props: ['projectSlug'],
  data () {
    return {
    }
  },
  computed: {
    project () {
    //   console.log(this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug))
    //   console.log(this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug)[0])
    //   return this.$store.state.projects[0]
      return this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug)[0]
    }
  }
}
</script>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translateY(30px);
  transition: all .4s linear;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>