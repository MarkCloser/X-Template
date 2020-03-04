export interface Supplier {
    id: number;
    // 供应商名称
    name: string;
    // 供应商地址
    address: string;
    // 供应商合作的物流
    logistics: number[];
}
