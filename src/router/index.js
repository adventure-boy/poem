import VueRouter from "vue-router";
import Login from '../components/Login'
import Home from '../components/Home'

export default new VueRouter({
    routes:[
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
})