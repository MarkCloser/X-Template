// 产品价格表
export interface  Price {
    id: number;
    // 产品的 ID
    productId: number;
    // 零售价格
    retail: number;
    // 批发价格
    wholeSale: number;
    // 价格波动
    twisting: number[];
}


// 价格波动
export  interface Twisting {
    id: number;
    // 波动发生的时间
    startTime: string;
    // 变动前价格
    before: number;
    // 变动后价格
    after: number;
}