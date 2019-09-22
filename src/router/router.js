import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/view/home/home.vue';
import stores from '../components/view/stores/stores.vue';
import shoppingcar from '../components/view/shoppingcar/shoppingcar.vue';
import mine from '../components/view/mine/mine.vue';
////路由的懒加载
// const home =() => import ('../components/home/home.vue');
Vue.use(VueRouter);
const router=new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home,meta:{
            title:"首页"
        }},
        {path:"/stores",component:stores,meta:{
            title:"商品"
        }},
        {path:"/shoppingcar",component:shoppingcar,meta:{
            title:"购物车"
        }},
        {path:"/mine",component:mine,meta:{
            title:"我的"
        }}
    ],
    mode:"history",

})
//全局导航守卫,当路径发生改变时触发
router.beforeEach((to, from, next) => {
    document.title=to.meta.title;
    next();
});
export default router