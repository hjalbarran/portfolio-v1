import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/project/:projectName",
    name: "projectDetails",
    component: () => import(/* webpackChunkName: "about" */ "../views/ProjectDetails.vue"),
    props: true
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  const logoLoading = document.getElementById('loading-logo')
  const spinnerLoading = document.getElementById('loading-spinner')
  const appDiv = document.getElementById('app')
  if (appLoading) {
    setTimeout(() => {
      logoLoading.style.display = 'none'
      spinnerLoading.style.display = 'none'
      appLoading.style.background = 'transparent'
      appLoading.style.zIndex = '0'
      appDiv.style.display = 'initial'
    }, 2500);
  }
})
export default router;
