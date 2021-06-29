<template>
  <div>
    <div class="relative">
      <div class="max-w-7xl mx-auto">
        <div class="pb-8 pt-12 sm:py-16 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-10 md:px-10 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h5 class="tracking-widest text-gray-600 mb-4 first-animation">HUMBERTO ALBARRÁN</h5>
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl second-animation">
                <span class="block xl:inline">Frontend Web Developer</span>
                {{ '  ' }}
                <span class="block text-gray-600 xl:inline">Vue JS</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 third-animation">
                Tengo más de 7 años envuelto en la tecnología web, y he usado distintas plataformas y herramientas desde el comienzo. Actualmente me he enfocado en el desarrollo web frontend.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start fourth-animation">
                <div class="rounded-md shadow">
                  <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 cursor-pointer" v-scroll-to="{ el: '#fase-1', offset: 0 }">
                    See Projects
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <router-link to="/about" tag="a" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 cursor-pointer">
                    About me
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-index-custom md:w-1/2 md:mx-auto w-1/3 mx-auto">
        <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="require('@/assets/images/19.jpg')" alt="" /> -->
        <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="require('@/assets/images/19-2.png')" alt="" /> -->
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="require('@/assets/images/19-3.png')" alt="" />
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

    <section class="text-gray-600 body-font">
      <div id="fase-1" class="container px-5 pt-24 pb-0 mx-auto  lg:px-10">
        <div class="sm:text-center lg:text-left">
          <h5 class="tracking-widest text-gray-600 mb-4" v-scrollanimation>SELECTED PROJECTS</h5>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-32" v-scrollanimation>
            <span class="block xl:inline">Case studies</span>
          </h1>
        </div>
      </div>
      <div class="container items-center px-5 py-8 mx-auto lg:px-0">
        <div class="flex flex-wrap -m-4">
          <project-card v-for="project in projects" :key="project.id" :project="project"/>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900" v-scrollanimation>Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>
          <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'


export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Portfolio',
          slug: 'portfolio',
          shortRole: 'Vue JS Website Developer',
          year: '2021'
        },
        {
          id: 2,
          title: 'Cohen & Aguirre Lobby Solutions',
          slug: 'cohen&aguirre',
          shortRole: 'Vue JS Developer, Laravel & DevOps',
          year: '2019-current'
        },
        {
          id: 3,
          title: 'Offyrus',
          slug: 'offyrus',
          shortRole: 'Ecommerce & Graphic Designer',
          year: '2017-2021'
        },
        {
          id: 4,
          title: 'Ven Da Tu Mano - ONG',
          slug: 'vendatumano',
          shortRole: 'Wordpress Website Designer',
          year: '2021'
        },
        {
          id: 5,
          title: 'Ultratech',
          slug: 'ultratech',
          shortRole: 'Wordpress Website Design',
          year: '2020-2021'
        },
        {
          id: 6,
          title: 'SJT Language',
          slug: 'sjtlanguage',
          shortRole: 'Wordpress Website Design',
          year: '2018'
        }
      ]
    }
  }

}
</script>

<style scoped>
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
</style>