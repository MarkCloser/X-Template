import { SalesTask } from '../mix-interface/SalesTask'
import { OrderStatus } from '../basic/Order'

export const MockSalesTask: SalesTask = {
    name: '订单列表',
    link: './../',
    orders:  [
        {
            id: 20200123,
            customer: '张三三你好你好和不该不该',
            address: 'yianjian shi',
            status: OrderStatus.WAITING,
            createTime: '2020-10-01 12:01',
        },
        {
            id: 20200123,
            customer: '张三三你好该',
            address: 'yijshi',
            status: OrderStatus.INSTOCK,
            createTime: '2020-10-01 12:01',
        }
    ]
}