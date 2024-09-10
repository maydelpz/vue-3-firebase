import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

const requireAuth = (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    // Verificamos directamente la data de usuario de la tienda
    if (userStore.userData) {
        next();
    } else {
        // Si no hay usuario, redirigimos a la página de login
        next("/login");
    }
    userStore.loadingSession = false;
};


const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;