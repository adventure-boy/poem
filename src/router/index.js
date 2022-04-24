import VueRouter from "vue-router";
import Login from '../components/system/Login'
import { getHttp,getComponents } from "@/utils/http.js";

import store from '@/store/index'


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}

const routes = [
    {
        path: '/',
        component: Login
    }
]

const router = new VueRouter({
    routes:routes
})

//路由拦截
router.beforeEach((to, from, next) => {
    //如果去登录页,放行
    if(to.path == '/'){
        next();
    }else{
        //window对象有user信息
        if(window.sessionStorage.getItem("user")){
            //初始化路由
            addRouter();
            next();
        }
    }    
})

function addRouter() {

    // 如果已经存路由信息,那么就直接返回
    if(store.state.routes.length > 0){
        return
    }
    console.log(JSON.parse(window.sessionStorage.getItem("user")).userId);
    getComponents('/system/getMenu',JSON.parse(window.sessionStorage.getItem("user")).userId).then(res => {
        console.log("初始化路由");
        var data = getRoutes(res.data.data);
        console.log("----");
        console.log(data);
        router.addRoutes(data)
        store.commit('initRoutes',data)
    })
}

//拼接数据
const getRoutes = (routers)=>{
    let routes = []
    routers.forEach(router=>{
         let {name,component,path,children} = router
         if(children && children instanceof Array ){
             //别忘记替换children，否则路由报错。可通过debug
            children = getRoutes(children)
         }
         let r = {
            name:name,
            path:path,
            children:children,
            component:()=>import('@/components'+ component+'.vue')
         }
         routes.push(r)
    })
    return routes
}

export default router

