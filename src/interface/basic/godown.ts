// 对仓库接口的定义

export interface GoDown {
    id: number;
    // 仓库位置
    loacation: string;
    // 对应的所有的货架
    shelfs: number[];
}

export interface Shelf {
    id: number;
    // 货架位置编号
    location: string;
    // 货架对应的所有产品 ID 
    products: number[]
}
