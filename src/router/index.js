import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import MealList from "../views/MealList.vue"
import MealsByIngredient from "../views/MealsByIngredient.vue"
import MealsByName from "../views/MealsByName.vue"
import MealsByLetter from "../views/MealsByLetter.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
    },
    {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
    },
    // {
    //     path: '/letter/:letter',
    //     name: 'byLetter',
    //     component: MealList
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;