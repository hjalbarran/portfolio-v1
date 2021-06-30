<template>
  <div>
    <transition name="fade" appear>
      <nav class="flex justify-between nav-background left-0 right-0 fixed top-0 z-10 backdrop-filter backdrop-blur-xs ">
        <div>
          <figure class="flex flex-wrap mt-4 ml-6 mb-4 w-auto">
            <img :src="require('@/assets/images/logo1.png')" alt="" class="w-14">
            <transition name="fadeout">
              <div v-if="nameAppear" class="borderedDiv ml-3">
                <h5 class="tracking-normal font-bold text-xl ml-2">Humberto</h5>
                <h5 class="tracking-normal font-bold text-xl ml-2">Albarrán</h5>
              </div>
            </transition>    
          </figure>
        </div>
        <button class="mt-4 mr-8 mb-4 tracking-wider text-base text-black font-bold" @click="openNav()">MENU</button>
      </nav>
    </transition>

    <div id="myNav" class="flex overlay bg-black bg-opacity-95">
        <button class="mt-8 mr-8 mb-4 absolute top-0 right-0 tracking-wider text-base text-gray-500 font-bold close-button" @click="closeNav()">CLOSE</button>
        <div class="overlay-content relative text-center mt-10 w-auto mx-auto">
          <transition name="fade">
            <h5 class="tracking-widest text-gray-500 mb-3" v-if="show">MENU</h5>
          </transition>
          <transition name="slide-fade1">
            <router-link to="/" @click="closeNav()" v-if="show">
              <h1 class="text-4xl tracking-tight font-bold sm:text-4xl md:text-5xl">
                <span class="block xl:inline">Portfolio</span>
              </h1>
            </router-link>
          </transition>
          <transition name="slide-fade2">
            <router-link to="/about" @click="closeNav()" v-if="show">
              <h1 class="text-4xl tracking-tight font-bold sm:text-4xl md:text-5xl">
                <span class="block xl:inline">About me</span>
              </h1>
            </router-link>
          </transition>
          <transition name="slide-fade3">
            <router-link to="/contact" @click="closeNav()" v-if="show">
              <h1 class="text-4xl tracking-tight font-bold sm:text-4xl md:text-5xl">
                <span class="block xl:inline">Contact</span>
              </h1>
            </router-link>
          </transition>
          <transition name="fade">
            <p class="tracking-tighter text-gray-500 mt-40" v-if="show">&copy; {{ new Date().getFullYear() }} Humberto Albarrán. Made with ♥ in Caracas, Venezuela.</p>
          </transition>
        </div>
    </div>

    <!-- <router-view /> -->

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer></Footer>
    
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Footer
  },
  data () {
    return {
      isActive: false,
      show: false,
      nameAppear: true
    }
  },
  mounted () {
    document.addEventListener('scroll', this.menuNameAppear)
  },
  methods: {
    menuNameAppear () {
      this.nameAppear = false
      document.removeEventListener('scroll', this.menuNameAppear)
    },
    openNav () {
      this.show = !this.show
      document.getElementById('myNav').style.height = '100%'
    },
    closeNav () {
      this.show = !this.show
      document.getElementById('myNav').style.height = '0%'
    }
  }
}
</script>

<style>
.borderedDiv {
  border-left: 2px solid #000!important;
}

.nav-background {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.close-button:hover {
  color: #fff!important;
}

.router-link-active,
.router-link-exact-active {
  color:#fff!important;
}
.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 20;
  transition: 0.5s ease-in-out
}

.overlay-content {
  top:25%;
}

.overlay a {
  padding: 8px;
  color: #818181;
  display: flex;
  align-items: center; 
  justify-content: center;
  text-decoration: none;
}

.overlay a:hover {
  color: white;
}

/* ANIMATION TU CURTAIN MENU */
/* 'menu' word header*/
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
  transition-delay: .3s;
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

/* MENU WORDS */
.fadeout-enter-active,
.fadeout-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: .1s;
}

.fadeout-enter-from,
.fadeout-leave-to {
  opacity: 0;
}

.before-leave {
  opacity: 1;
  transform: translateY(30px);
  transition: all .4s linear;
}

.leave {
  opacity: 0;
  transform: translateY(0px);
}

/* 1st item */
.slide-fade1-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: .3s;
}

.slide-fade1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade1-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade1-leave-to {
  opacity: 0;
  transition: all 0.3s ease-out;
}


/* 2nd item */
.slide-fade2-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: .4s;
}

.slide-fade2-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade2-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade2-leave-to {
  opacity: 0;
  transition: all 0.3s ease-out;
}

/* 3rd item */
.slide-fade3-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: .5s;
}

.slide-fade3-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade3-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade3-leave-to {
  opacity: 0;
  transition: all 0.3s ease-out;
}

/** FIRST APPEAR ANIMATIONS */
.first-animation {
  -webkit-animation: animation-1st .6s linear;
  animation: animation-1st .6s linear;
}
@keyframes animation-1st{
  0%, 66.6667% {
    opacity: 0;
    -webkit-transform: translate3d(0,20px,0);
    transform: translate3d(0,20px,0);
  }

  100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
}

.second-animation {
  -webkit-animation: animation-1st .6s linear;
  animation: animation-2nd .8s linear;
}
@keyframes animation-2nd{
  0%, 75% {
    opacity: 0;
    -webkit-transform: translate3d(0,20px,0);
    transform: translate3d(0,20px,0);
  }
  100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
}

.third-animation {
  -webkit-animation: animation-1st .6s linear;
  animation: animation-3rd 1s linear;
}
@keyframes animation-3rd{
  0%, 80% {
    opacity: 0;
    -webkit-transform: translate3d(0,20px,0);
    transform: translate3d(0,20px,0);
  }

  100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
}

.fourth-animation {
  -webkit-animation: animation-1st .6s linear;
  animation: animation-4th 1.2s linear;
}
@keyframes animation-4th{
  0%, 83.3333% {
    opacity: 0;
    -webkit-transform: translate3d(0,20px,0);
    transform: translate3d(0,20px,0);
  }
  100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
}
</style>
