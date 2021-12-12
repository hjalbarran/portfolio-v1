<template>
    <div class="p-6 m-2 mx-auto bg-white border rounded-lg shadow-md cursor-pointer hovereffect">
        <div class="relative">
        <img class="mx-auto h-8" :src="testimonial.logoCompany" :alt="testimonial.company" />
        <blockquote class="mt-10">
            <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
                {{ testimonial.testimonial }}
            </p>
            </div>
            <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                <img class="mx-auto h-10 w-10 rounded-full" :src="testimonial.avatar" :alt="testimonial.name" />
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div class="text-base font-medium text-gray-900">{{ testimonial.name }}</div>

                <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base font-medium text-gray-500">{{ testimonial.jobRole }}, {{ testimonial.company }}</div>
                </div>
            </div>
            </footer>
        </blockquote>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: Object
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