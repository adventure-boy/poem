import VueRouter from "vue-router";
import Login from '../components/Login'
import Home from '../components/Home'
import { getNavMenu } from "@/utils/http.js";

const routes = [
    {
        path: '/',
        component: Login,
        name: 'Login'
    },
    {
        path: '/home',
        component: Home,
        name: 'Home'
    }
]

const router = new VueRouter({
    routes:routes

})

//路由拦截
router.beforeEach((to, from, next) => {
    addRouter()
})

function addRouter() {
    getNavMenu().then(res => {
        console.log(res.data)
        var data = formatRoutes(res.data.data)

        // router.addRoutes(data)
    })
}
//拼接数据
// function routesData(result){
//     result.forEach(item =>{
//         item.children.forEach(child =>{
//             routes.push({
//                 name: child.componentName,
//                 path: child.url, 
//                 component: require('@/components'+ child.component).default
//             })
//             console.log(child.url)
//         })


//     })
//     return routes
// }

export const formatRoutes = (routes) => {
    let fmRoutes = [];
    routes.forEach(router => {
        let {
            path,
            component,
            name,
            children
        } = router;
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            component(resolve) {
                //   if (component.startsWith("Home")) {
                //     require(['../components/' + component + '.vue'], resolve)
                //   } else if (component.startsWith("Emp")) {
                //     require(['../components/emp/' + component + '.vue'], resolve)
                //   } else if (component.startsWith("Per")) {
                //     require(['../components/personnel/' + component + '.vue'], resolve)
                //   } else if (component.startsWith("Sal")) {
                //     require(['../components/salary/' + component + '.vue'], resolve)
                //   } else if (component.startsWith("Sta")) {
                //     require(['../components/statistics/' + component + '.vue'], resolve)
                //   } else if (component.startsWith("Sys")) {
                //     require(['../components/system/' + component + '.vue'], resolve)
                //   }
                require(['../components/system' + component + '.vue'], resolve)
            },
            name: name,
            children: children
        };
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}

export default router

