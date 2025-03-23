import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: () => import("../pages/StatisticsPage.vue"),
    },

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;