import VueRouter from "vue-router";
import Login from '../components/system/Login'

import { getComponents } from "@/utils/http.js";

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
        addRouter();
        next();
    }else{
        //window对象有user信息
        if(!window.sessionStorage.getItem('user')){
            //初始化路由
            addRouter();
            next();
        }
    }
    
})

function addRouter() {
    getComponents().then(res => {
        console.log(res.data.data);
        var data = getRoutes(res.data.data)
        console.log('-------')
        console.log(data)
        router.addRoutes(data)
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
         console.log(r);
         routes.push(r)
    })
    return routes
}

export default router

