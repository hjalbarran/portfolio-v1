/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 lg:px-11 pt-24 pb-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-0">
          <h5 class="tracking-widest text-gray-600 mb-2 first-animation">ABOUT ME</h5>
          <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-8 second-animation">I'm Humberto Albarrán, materials engineer & web developer. Focused in develop solutions adapted to design & requirements while making solid friendly communication with my team coworkers.</h1>
          <div class="flex flex-wrap container third-animation">
            <div class="w-full px-6 pb-8 lg:w-1/2 lg:pb-0">
              <h3 class="text-xl lg:text-justify text-gray-400 font-semibold">
                As a materials engineer, my main areas of expertise are non destructive testing of materials, manufacturing processes and industrial maintenance, but as a Web Developer I want to built everything from scratch. There is so much things you can do with the code, that is simply awesome! Probably, if I go back in time, I would change my carreer path to study software engineering.
                I don't regret, just saying I would adjust my study preferences in order to keep my life goals aligned.
              </h3>
            </div>
            <!-- <img alt="gallery" class="px-4 w-full lg:w-1/2 object-cover h-full object-center block hovereffect" src="https://dummyimage.com/500x300"> -->
            <vueper-slides class="px-4 w-full lg:w-1/2" autoplay fade>
              <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :duration="duration"/>
            </vueper-slides>
          </div> 
          
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font" v-scrollanimation>
      <div class="container px-5 lg:px-11 pt-4 mx-auto pb-24">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4" v-scrollanimation>
            <h5 class="tracking-widest text-gray-600 mb-2">TECH I USE</h5>
            <h3 class="text-xl text-black font-semibold">
              Vue JS<em class="text-gray-400"> / </em>
              Laravel<em class="text-gray-400"> / </em>
              HTML5 & CSS3<em class="text-gray-400"> / </em>
              JS & TS<em class="text-gray-400"> / </em>
              SASS<em class="text-gray-400"> / </em>
              Tailwind & Bootstrap <em class="text-gray-400"> / </em>
              GIT <em class="text-gray-400"> / </em>
              Laragon & XAMPP <em class="text-gray-400"> / </em>
              Wordpress - Prestashop
            </h3>
          </div>
          <div class="sm:w-1/2 mb-10 px-4" v-scrollanimation>
            <h5 class="tracking-widest text-gray-600 mb-2">TOOLS I USE</h5>
            <h3 class="text-xl text-black font-semibold">
              Visual Studio Code<em class="text-gray-400"> / </em>
              Laragon<em class="text-gray-400"> / </em>
              XAMPP<em class="text-gray-400"> / </em>
              Photoshop<em class="text-gray-400"> / </em>
              Illustrator<em class="text-gray-400"> / </em>
              After Effects
            </h3>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section class="text-gray-600 body-font" >
      <div class="container lg:px-11 px-5 pt-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-8 pb-8" v-scrollanimation>
          <h5 class="tracking-widest text-gray-600 mb-2">MY EXPERIENCE</h5>
          <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-8">Over 10 years of Web Development Experience</h1>
          <h3 class="text-xl text-gray-400 font-semibold">
              My first web insights date back to 2012 were I basically used only plain HTML & CSS for a web page development. Then, I met Joomla & Wordpress, and I began to build sites with them, in fact I decided to use Wordpress over Joomla because of the ease of use and the major quantity of resources, last in the area of CMS I got knowledge in Prestashop because a client required to build an ecommerce, so I learned it and I built the webpage. The real journey of web development began in 2018 when I met Laravel & VueJS. By mid 2019 a company hired me to built a CRM and a Business Platform, and since that VueJS is my main focus because i simply love it. The "ease" of learning, and the flexibility of this framewroks is just astonishing. 
          </h3>
        </div>
        <div class="pb-24" v-scrollanimation>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="ar" /> AlmacenLinea</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Remote Fullstack Developer - Vue JS / Laravel</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">April 2022 - Present</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="ar" /> Greelow LLC - Charity Project</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Remote Fullstack Developer - Vue JS / Laravel</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">December 2021 - Present</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="es" /> Cohen & Aguirre Lobby Solutions</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Frontend Developer - Vue JS and DevOps</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">September 2019 - Present</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="es" /> Offyrus</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Remote Prestashop Developer / Graphic Designer</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">January 2017 - January 2021</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="pa" /> Protos Technology</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Remote Wordpress Developer / Web / Freelance</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">June 2017 - January 2021</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="ve" /> Universidad Simón Bolívar</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Academic Research / Professor / Web project</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">September 2015 - August 2019</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="ve" /> Kubesoluciones</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Wordpress Web Developer</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">April 2014 - November 2015</div>
          </div>
          <div id="line" class="flex flex-wrap mb-2">
            <div class="w-full sm:w-1/3 text-base text-black font-medium"><flag iso="ve" /> Grupo A&C VE</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">Co-Founder / Web / Graphic Designer / Teacher</div>
            <div class="w-full sm:w-1/3 text-base text-gray-400 font-medium">January 2011 - Febreary 2015</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    VueperSlides, 
    VueperSlide
  },
  data () {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      duration: 3000,
      slides: [
        {
          title: 'Slide #1',
          content: 'Slide content.'
        },
        {
          title: 'Slide #2',
          content: 'Slide content.'
        }
      ],
      images: [
        'https://dummyimage.com/500x300',
        'https://dummyimage.com/501x301',
        'https://dummyimage.com/600x360',
        'https://dummyimage.com/601x361',
        'https://dummyimage.com/502x302',
        'https://dummyimage.com/503x303'
      ]
    }
  },
  computed: {
    // images () {
    //   return this.$store.state.projects.filter(item => item.slug === this.$route.params.projectSlug)[0].images
    // } 
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