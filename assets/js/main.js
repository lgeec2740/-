import Vue from 'vue'
import VueRouter from 'vue-router'
//Подключим наши страницы
import all from "../views/Page1"
import Page2 from "../views/Page2"
import Page3 from "../views/Page3"
import Page4 from "../views/Page4"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Page1
        //Так, как синий шаблон у нас является дефолтным, его можно не указывать в мета-данных
    },
    {
        path: '/page2',
        name: 'Page2',
        component: Page2,
        //А вот это свойство как раз будет содержать название компонента-шаблона,
        //который мы хотим использовать для данной страницы
        meta:{
            layout: "green-layout"
        }
    },
    {
        path: '/page3',
        name: 'Page3',
        component: Page3,
        meta:{
            layout: "red-layout"
        }
    },
    {
        path: '/page4',
        name: 'Page4',
        component: Page4,
        //И снова ничего не указываем, чтобы задействовать дефолтный шаблон
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

var app = new Vue({
    el: '#app',
    data: {
        items:[
           { id: "1"}
        ]
    },
    methods:{
        deleteItem: function(index) {
            this.items.splice(index, 1);
        }
    }
})