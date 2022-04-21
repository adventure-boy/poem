let allRoutes = [
    {
        "id": null,
        "permissionId": "ffcc69a9-adc6-452c-8a77-9c7ed05b3d19",
        "parentId": null,
        "name": "首页",
        "path": "/home",
        "component": "/system/Home",
        "componentName": null,
        "children": []
    },
    {
        "id": null,
        "permissionId": "b6bd6dc6-3181-4ea4-bddc-7fa2a0c2750e",
        "parentId": null,
        "name": "消息中心",
        "path": null,
        "component": null,
        "componentName": null,
        "children": []
    },
    {
        "id": null,
        "permissionId": "9f7cb32e-ddad-4ca8-8332-1638831e6be6",
        "parentId": null,
        "name": "系统管理",
        "path": null,
        "component": null,
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
    }
]


 const formatRoutes = (routes) => {
    let fmRoutes = [];
    routes.forEach(router => {
        let {
            id,
            permissionId,
            parentId,
            name,
            path,
            component,
            componentName,
            children
        } = router;
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            name: name,
            children: children,
            component(resolve) {
                if (component.startsWith("Home")) {
                    require(['../views/' + component + '.vue'], resolve);
                } else if (component.startsWith("Emp")) {
                    require(['../views/emp/' + component + '.vue'], resolve);
                } else if (component.startsWith("Per")) {
                    require(['../views/per/' + component + '.vue'], resolve);
                } else if (component.startsWith("Sal")) {
                    require(['../views/sal/' + component + '.vue'], resolve);
                } else if (component.startsWith("Sta")) {
                    require(['../views/sta/' + component + '.vue'], resolve);
                } else if (component.startsWith("Sys")) {
                    require(['../views/sys/' + component + '.vue'], resolve);
                }
            }
        }
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}

letformatRoutes(allRoutes)