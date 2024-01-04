import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: Home,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient,
            },
        ],
    },
    {
        path: "/guest",
        component: GuestLayout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
