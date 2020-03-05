import { PurchaseTask } from '../mix-interface/purchaseTask'


export const MockPurchaseTask: PurchaseTask = {
    id: 10001,
    name: '采购',
    link: '../../',
    purchase: [
        {
            id: 2000,
            name: '化油器',
            model: '168',
            brand: '本田',
            storage: 100,
            target: 1000,
            supplier: 203
        },
        {
            id: 1089,
            name: '黑拉盘',
            model: '168',
            brand: '标准',
            storage: 30,
            target: 1000,
            supplier: 990
        }
    ]
}
