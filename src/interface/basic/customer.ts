export interface Customer {
    id: number;
    // 用户名
    name: string;
    // 用户地址
    address: string;
    // 电话号码
    phone: string[];
    // 物流
    logisitics: number;
}


export interface Logisitics {
    id: number;
    // 物流名称
    name: string;
    // 物流联系方式
    phone: string[];
    // 物流的 往返地址
    address: string[];
    // 路线
    line: string;
    // 发车时间表
    lineTime: string;
}