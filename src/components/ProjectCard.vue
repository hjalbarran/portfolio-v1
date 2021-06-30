<template>
  <div class="p-6 m-2 mx-auto bg-white border rounded-lg shadow-md lg:w-5/12 max-w-xl cursor-pointer hovereffect" @click="projectDetailsURL(project)">
    <div class="flex flex-col items-start py-2 rounded-lg sm:flex-row">
      <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
        <img :src="project.img" :alt="project.title" class="rounded-lg">
      </div>
      <div class="flex flex-col w-full text-blueGray-500 lg:ml-4" >
        <h2 class="mt-4 mb-1 text-base font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">{{ project.title }}</h2>
        <h2 class="mt-1 mb-8 text-base font-thin tracking-widest text-black uppercase lg:mt-0 title-font">{{ project.year }}</h2>
        <p class="mb-3 text-base leading-relaxed text-blueGray-500">{{ project.shortRole }}</p>
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
</style>