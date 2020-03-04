import { Purchase } from '../basic/purchase'

export interface PurchaseTask {
    id: number;
    name: string;
    link: string;
    purchase: Purchase[]
}