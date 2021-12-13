<template>
  <div class="p-6 m-2 mx-auto bg-white border rounded-lg shadow-md lg:w-5/12 max-w-xl hovereffect" v-scrollanimation>
    <div class="flex flex-col items-start py-2 rounded-lg sm:flex-row">
      <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2 cursor-pointer" @click="projectDetailsURL(project)">
        <img :src="project.img" :alt="project.title" class="">
      </div>
      <div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
        <h2 class="mt-4 mb-1 text-base font-semibold tracking-wide text-black uppercase lg:mt-0 title-font cursor-pointer" @click="projectDetailsURL(project)">{{ project.title }}</h2>
        <h2 class="mt-1 mb-2 text-base font-thin tracking-widest text-black uppercase lg:mt-0 title-font">{{ project.year }}</h2>
        <p class="mb-3 text-base leading-relaxed text-blueGray-500">{{ project.shortRole }}</p>
        <div class="sm:flex sm:justify-center lg:justify-center flex justify-center">
          <div class="rounded-md shadow sm:w-auto">
            <a class="w-full flex items-center justify-center px-2 py-1 border border-transparent text-base rounded-md text-white bg-gray-400 hover:bg-gray-700 md:text-lg cursor-pointer" @click="projectDetailsURL(project)">
              Project Specs
            </a>
          </div>
          <div class="ml-3 sm:mt-0 sm:ml-3 sm:w-auto w-auto">
            <a :href="project.url" target="_blank" class="w-full flex items-center justify-center px-2 py-1 border border-transparent text-base rounded-md text-black bg-gray-100 hover:bg-gray-200 md:text-lg cursor-pointer">
              Go to site
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
  methods: {
    projectDetailsURL (project) {
      this.$router.push({ name:'projectDetails', params: {projectSlug: project.slug} })
    }
  }

}
</script>

<style lang="scss" scoped>
.fade-hover:hover {
  transition:ease-out .3s;
  opacity: 1
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