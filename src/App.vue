<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link :to="{ name: 'projectDetails', params:{ projectName:'Offyrus' }}">Project Details</router-link> | 
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  
    <nav class="flex justify-between left-0 right-0 fixed top-0 z-10">
      <figure class="m-4">
        <img :src="require('@/assets/images/logo-empty.png')" alt="" class="w-14">
      </figure>
      <button class="m-4" @click="openNav()">abrir</button>
    </nav>
    <div id="myNav" class="overlay bg-black bg-opacity-80">
      <button class="m-4 absolute top-0 right-0" @click="closeNav()">cerrar</button>
      <div class="overlay-content relative text-center mt-10">
        <router-link to="/" class="text-4xl" @click="closeNav()">
          Home
        </router-link>
        <router-link to="/about" class="text-4xl" @click="closeNav()">
          About
        </router-link>
        <router-link to="/contact" class="text-4xl" @click="closeNav()">
          Contact
        </router-link>
      </div>
    </div>

    <!-- <div>
      <ResponsiveNavigation
      :navLinks='navLinks'
      />  
    </div> -->

    <!-- <router-view /> -->

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
// import ResponsiveNavigation from '@/components/ResponsiveNavigation'
export default {
  name: 'app',
  components: {
    // ResponsiveNavigation
  },
  data () {
    return {
      navLinks: [
        {
          text: 'Portfolio',
          path: '/',
          icon: ''
        },
        {
          text: 'About me',
          path: '/about',
          icon: ''
        },
        {
          text: 'Contact',
          path: '/contact',
          icon: ''
        }
      ]
      // background: "#CFCDCA"
    }
  },
  methods: {
    openNav () {
      document.getElementById('myNav').style.height = '100%'
    },
    closeNav () {
      document.getElementById('myNav').style.height = '0%'
    }
  }
}
</script>

<style>
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

/** FIRST APEAR ANIMATIONS */
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
