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
        var data = routesData(res.data.data)
        router.addRoutes(data)
    })
}
//拼接数据
function routesData(result){
    result.forEach(item =>{
            routes.push({
                path: item.path, 
                component:()=>import('@/components'+item.component)
            })
    })
    return routes
}

export default router

