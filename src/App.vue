<template>
  <div>
    <NavBar></NavBar>

    <router-view v-slot="{ Component }" class="min-height-custom">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>
.min-height-custom {
  min-height: 91.2vh
}
/* THIS ANIMATIONS APPLY FOR ALL PAGES */
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

