// 定义采购信息，一般数据库从后台告知用户紧缺的产品

export interface Purchase {
    id: number,
    // 采购产品名
    name: string,
    // 库存数量
    storage: number,
    // 计划采购数量
    target: number,
    // 供应商
    supplier: number
} 
