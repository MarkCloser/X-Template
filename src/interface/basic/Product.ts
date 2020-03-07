// 产品
export interface Product {
    id: number;
    // 产品名
    name: string;
    // 品类
    type: string;
    // 品牌
    brand: string;
    //  型号
    model: string;
    // 供应商
    supplier: number;
    //  图片
    imagesUrl?: string[];
    // 关键词
    keyWords?: string[];
    // 备注
    others: string;
}




