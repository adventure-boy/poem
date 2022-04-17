import VueRouter from "vue-router";
import Login from '../components/Login'
import Home from '../components/Home'
import { getNavMenu } from "@/utils/http.js";

const routes = [
    {
        path:'/',
        component:Login,
        name:'Login'
    },
    {
        path:'/home',
        component:Home,
        name:'Home'
    }
]

const router =  new VueRouter({
    routes,

})

//路由拦截
router.beforeEach((to,from,next) => {
    addRouter()
})

function addRouter(){
    getNavMenu().then(res =>{
        var data =routesData(res.data.result)
        router.addRoutes(data)
    })
}
//拼接数据
function routesData(result){
    result.forEach(item =>{
        item.children.forEach(child =>{
            routes.push({
                path: child.url,
                name: child.componentName,
                component: require('@/components'+ child.component).default
            })
            console.log(child.component)
        })

        
    })
    return routes
}
export default router