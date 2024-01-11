import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutView from "@/views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "main_page",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about_page",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
