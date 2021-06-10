<template>
    <!-- <div class="lg:w-1/2 sm:w-1/2 p-4">
      <div class="flex relative">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="require('@/assets/images/projects/offyrus-project.jpg')">
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 fade-hover">
          <h2 class="tracking-widest text-sm title-font font-medium text-gray-600 mb-1">WEB DESIGN & BRANDING</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{project.title }}</h1>
          <p class="leading-relaxed">Prestashop Ecommerce</p>
        </div>
      </div>
    </div> -->
    <div class="container items-center px-5 py-8">
      <div class="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
        <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">
          <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
            <img src="https://dummyimage.com/200x200/F3F4F7/8693ac" alt="placeholder" class="rounded-lg">
          </div>
          <div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
            <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"> great info right here</h2>
            <p class="mb-3 text-base leading-relaxed text-blueGray-500"> If any Environment Variables values are changed between Deployments, deduplication will always be bypassed. So you know. </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container items-center px-5 py-12 lg:px-20 w-full">
      <div class="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
        <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">
          <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
            <img src="https://dummyimage.com/200x200/F3F4F7/8693ac" alt="placeholder" class="rounded-lg">
          </div>
          <div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
            <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"> great info right here</h2>
            <p class="mb-3 text-base leading-relaxed text-blueGray-500"> If any Environment Variables values are changed between Deployments, deduplication will always be bypassed. So you know. </p>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  }

}
</script>

<style scoped>
.fade-hover:hover {
  transition:ease-out .3s;
  opacity: 1
}
</style>