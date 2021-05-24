<template>
    <nav class="flex justify-between z-10 absolute">
        <!-- <figure class="m-4">
            <img :src="require('@/assets/images/logo-empty.png')" alt="" class="w-14">
        </figure> -->
        <button class="z-20" @click="toggleNav()">Menu</button>
        <div class="menu-canvas" ref="menu">
           <!-- MENU-CANVAS -->
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        navLinks: {
            type: Object,
            required: true
        },
    }, 
    methods: {
        toggleNav(){
            const nav = this.$refs.menu.classList
            nav.contains('active') ? nav.remove('active') : nav.add('active')
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
    }
}

.menu-canvas {
    // height: 5vh;
    // width: 100vw;
    display: none;
    background: #00ff9f;
    display:flex;
    justify-content: center;
    // align-items: center;
    transform: translatey(100%);
    transition: all .9s;
    position: fixed;
    overflow: hidden; 
}

.active {
    height: 100vh;
    width: 100%;
    transform: none;
    position:fixed;
    overflow: hidden;
}

button {
    margin:1rem;
    position: absolute;
    z-index:above;
    right: 0;
}
</style>