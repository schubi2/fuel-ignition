import { createRouter, createWebHistory } from "vue-router";

const base = "/fuel-ignition/";

import HomeView from "../pages/HomeView.vue";
import EditView from "../pages/EditView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/edit",
    name: "Edit",
    component: EditView,
  }
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;

export { base };
