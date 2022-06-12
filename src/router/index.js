import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);

// 配置路由
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/home",
            name: "Home",
            component: () => import("@/pages/Home")
        },


        {
            path: "/",
            redirect: "/home"
        }
    ]
})