<template>
  <div>
    <div class="relative">
      <img :src="require('@/assets/images/developer-01.svg')" alt="humberto-albarran-developer" class="bg-title first-animation">
      <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div class="pb-8 pt-12 sm:py-16 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-11 md:px-10 2xl:mt-80">
            <div class="text-center lg:text-left">
              <h5 class="tracking-widest text-gray-600 mb-4 md:mx-auto first-animation">HUMBERTO ALBARRÁN</h5>
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl second-animation">
                <span class="block text-gray-600 xl:inline">Vue JS </span>
                <span class="block xl:inline">Frontend Web Developer</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mx-auto md:mt-5 md:text-xl lg:mx-0 third-animation">
                I have more than 7 years involved in web design and development. I first started with Wordpress & Joomla, but since 3+ years ago I met the real development experience with Laravel & VueJS. Now I'm focused on improving my frontend skills.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start flex justify-center fourth-animation">
                <div class="rounded-md shadow sm:w-auto">
                  <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 cursor-pointer" v-scroll-to="{ el: '#fase-1', offset: 0 }">
                    See Projects
                  </a>
                </div>
                <div class="ml-3 sm:mt-0 sm:ml-3 sm:w-auto w-auto">
                  <router-link to="/about" tag="a" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 cursor-pointer">
                    About me
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-index-custom md:w-1/2 md:mx-auto w-1/2 mx-auto">
        <img class="h-56 w-full object-cover sm:h-full lg:h-auto" :src="require('@/assets/images/19-3.png')" alt="" />
      </div>
    </div>

    <!-- <div class="container mx-auto -mt-12"> 
        <div class="scrolldown" v-scroll-to="{ el: '#fase-1', offset: 0 }">
          <svg height="30" width="10" class="svg-custom">
            <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
    </div> -->

    <!-- SWPIPER SLIDES DEMO -->
    <section class="py-12 overflow-hidden md:py-20 lg:py-8">
      <div id="fase-1" class="container px-5 pt-24 pb-12 mx-auto lg:px-11">
        <div class="sm:text-center lg:text-left">
          <h5 class="tracking-widest text-gray-600 mb-4" v-scrollanimation>SOME OPINIONS</h5>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" v-scrollanimation>
            <span class="block xl:inline">Testimonials</span>
          </h1>
        </div>
      </div>
      
    </section>

    <!-- <testimonial-card v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial"/> -->

    <!-- SWPIPER SLIDES DEMO -->
    <!-- <section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <img class="mx-auto h-8" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation" />
          <blockquote class="mt-10">
            <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div class="text-base font-medium text-gray-900">Judith Black</div>

                  <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div class="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section> -->

    <section class="text-gray-600 body-font">
      <div id="fase-1" class="container px-5 pt-24 pb-12 mx-auto lg:px-11">
        <div class="sm:text-center lg:text-left">
          <h5 class="tracking-widest text-gray-600 mb-4" v-scrollanimation>SELECTED PROJECTS</h5>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" v-scrollanimation>
            <span class="block xl:inline">Case studies</span>
          </h1>
        </div>
      </div>
      <div class="container items-center px-5 lg:px-11 py-2 mx-auto lg:px-0">
        <div class="flex flex-wrap">
          <project-card v-for="project in projects" :key="project.id" :project="project"/>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900" v-scrollanimation>Got a project? Drop me a message!</h1>
          <!-- <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Contact</button> -->
          <router-link to="/contact" tag="a" class="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 cursor-pointer">
            Contact
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'


export default {
  components: {
    ProjectCard
    // TestimonialCard
  },
  data () {
    return {
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }, 
    testimonials () {
      return this.$store.state.testimonials
    }
  }

}
</script>

<style lang="scss" scoped>
.z-index-custom {
  z-index: -1;
}
/* Scroll Down */
  
.scrolldown {
  border: 2px solid #000;
  border-radius: 30px;
  height: 46px;
  margin: 0 auto 8px;
  text-align: center;
  width: 30px;
}

.svg-custom {
  margin-left: 8px;
}

.scrolldown-p1,
.scrolldown-p2 {
  width: 30px;
  left: 15px!important;
  animation-duration: 1.5s;
  animation-name: scrolldown;
  animation-iteration-count: infinite;
  fill: #000;
}
  
.scrolldown-p2 {
  animation-delay: .75s;
}

@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: translate(0, -8px);
  }
  50% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 8px);
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

@media (min-width: 1366px) {
  .bg-title {
      position: absolute;
      display: block;
      width: 100%;
      height: auto;
      top: calc(60px + 5%);
      z-index: -9999;
      padding: 0 40px;
      -webkit-filter: drop-shadow(18px 18px 16px #f7f7f7);
      filter: drop-shadow(18px 18px 16px #f1f1f1);
  }
}

@media (max-width: 1366px) {
  .bg-title {
      position: absolute;
      display: none;
      width: 100%;
      height: auto;
      top: calc(60px + 5%);
      z-index: -9999;
      padding: 0 40px;
      -webkit-filter: drop-shadow(18px 18px 16px #f7f7f7);
      filter: drop-shadow(18px 18px 16px #f7f7f7);
  }
}

//Carousel
// .carousel__slide > .carousel__item {
//   transform: scale(1);
//   opacity: 0.5;
//   transition: 0.5s;
// }

.carousel__item {
  min-height: 200px;
  width: 80%;
  padding: 3rem 0 3rem 0;
  background-color: #ffffff;
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

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