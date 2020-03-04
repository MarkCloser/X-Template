export interface Order {
    id: number;
    customer: string;
    address: string;
    status: OrderStatus;
    createTime: string;
}

export enum OrderStatus {
    WAITING = "待处理",
    INSTOCK = "备货中",
    INTRANSIT = "运输中",
    FINISH = "完成"
}