import { createRouter,createWebHistory } from "vue-router";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home"),
    },
  ],
});
