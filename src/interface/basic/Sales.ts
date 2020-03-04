export interface Sales {
    id: number;
    // 订单 ID
    orderId: number;
    // 产品 ID
    productId: number;
    // 产品数量
    number: number;
    // 用户
    customerId: number;
    // 价格
    price: number;
    // 策略
    policy: number
}

export interface Policy {
    id: number;
    // 模式
    mode: string
}