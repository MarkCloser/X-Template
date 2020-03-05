import { NavMenu } from '../mix-interface/NavMenu'

// Mock 的数据 ，理论会从数据库获取
export const mockNavMenu : NavMenu[] =   [
    {
        index: "1",
        navMode: 'online',
        name: "訂單管理",
        childMenu: [
            {
                index: "1-1",
                name: "Add New Order",
                routeUrl: "/hellow"
            },
            {
                index: "1-2",
                name: "List Order"
            },
            {
                index: "1-3",
                name: "waiting order"
            }
        ]
    },
    {
        index: "2",
        navMode: 'online',
        name: "倉庫管理",
        childMenu: [
            {
                index: "2-1",
                name: "Add New Order",
                routeUrl: "/hellow"
            },
            {
                index: "2-2",
                name: "List Order"
            },
            {
                index: "2-3",
                name: "waiting order"
            }
        ]
    },
    {
        index: "3",
        navMode: 'online',
        name: "用戶管理",
        childMenu: [
            {
                index: "3-1",
                name: "Add New Order",
                routeUrl: "/hellow"
            },
            {
                index: "3-2",
                name: "List Order"
            },
            {
                index: "3-3",
                name: "waiting order"
            }
        ]
    },
    {
        index: "4",
        navMode: 'online',
        name: "打印管理",
        childMenu: [
            {
                index: "4-1",
                name: "Add New Order",
                routeUrl: "/hellow"
            },
            {
                index: "4-2",
                name: "List Order"
            },
            {
                index: "4-3",
                name: "waiting order"
            }
        ]
    },
    {
        index: "5",
        navMode: 'online',
        name: "经营数据",
        childMenu: [
            {
                index: "5-1",
                name: "Add New Order",
                routeUrl: "/hellow"
            },
            {
                index: "5-2",
                name: "List Order"
            },
            {
                index: "5-3",
                name: "waiting order"
            }
        ]
    },
    {
        index: "6",
        navMode: 'online',
        name: "产品采购"
    },
    {
        index: "7",
        navMode: 'online',
        name: '销售产品管理'
    }
];