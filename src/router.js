import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./components/MainPage.vue";
import ShowProductsPage from "./components/ShowProductsPage.vue";
import ShopPage from "./components/ShopPage.vue";
export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', component: MainPage},
        {path: '/showProductsPage', component: ShowProductsPage},
        {path: '/shopPage', component: ShopPage},
    ]
})

