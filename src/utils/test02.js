let allRoutes = [
    {
        "id": null,
        "permissionId": "9f7cb32e-ddad-4ca8-8332-1638831e6be6",
        "parentId": null,
        "name": "系统管理",
        "path": "/system",
        "component": "",
        "componentName": null,
        "children": [
            {
                "id": null,
                "permissionId": "9f4eb840-2918-4bf0-a03f-0127347ed1e2",
                "parentId": "9f7cb32e-ddad-4ca8-8332-1638831e6be6",
                "name": "角色管理",
                "path": "/system/role",
                "component": "/system/RoleList",
                "componentName": null,
                "children": []
            },
            {
                "id": null,
                "permissionId": "5279d7c6-3e79-4f84-9a52-ea9aa4d38146",
                "parentId": "9f7cb32e-ddad-4ca8-8332-1638831e6be6",
                "name": "用戶管理",
                "path": "/system/user",
                "component": "/system/UserList",
                "componentName": null,
                "children": null
            }
        ]
    },
    {
        "id": null,
        "permissionId": "b6bd6dc6-3181-4ea4-bddc-7fa2a0c2750e",
        "parentId": null,
        "name": "消息中心",
        "path": "/message",
        "component": null,
        "componentName": null,
        "children": []
    }
]


 const formatRoutes = (routes) => {
    let fmRoutes = [];
    routes.forEach(router => {
        let {
            name,
            path,
            component,
            children
        } = router;
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            name: name,
            children: children,
            component:()=>import('@/components'+ component+'.vue')
        }
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}


const getRoutes = (routers)=>{
    let routes = []
    routers.forEach(router=>{
         let {name,component,path,children} = router
         if(children && children instanceof Array ){
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
let data = getRoutes(allRoutes)
console.log(data);

