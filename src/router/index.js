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
    addRouter()
    next()
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

