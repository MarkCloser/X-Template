<template>
    <ul class="infinite-list task__list" v-infinite-scroll="load">
        <li :key="index" v-for="(taskItem, index) in todayTaskList" class="infinite-list-item">
            <el-card v-if="taskItem.name === '订单列表'" class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                    <el-tag effect="dark">{{ taskItem.name }}</el-tag>
                    </div>
                    <div class="text item">
                    <el-table :data="taskItem.orders" style="width: 100%">
                        <el-table-column prop="createTime" label="订单日期" width="130">
                        </el-table-column>
                        <el-table-column prop="customer" label="客户" width="130"></el-table-column>
                        <el-table-column prop="status" label="状态" width="80">
                            <template slot-scope="scope">
                                <el-tag :type="scope.row.status === '待处理'?'primary':'success'">{{scope.row.status}}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="80">
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.status === '待处理'" @click="dealOrder(scope.row)" type="text" size="small">处理订单</el-button>
                                <el-button v-if="scope.row.status !== '待处理'" @click="manOrder(scope.row)" type="text" size="small">状态修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
            <el-card v-if="taskItem.name === '采购'">
                <div slot="header" class="clearfix">
                    <el-tag effect="dark">{{ taskItem.name }}</el-tag>
                    </div>
                    <div class="text item">
                        <el-table :data="taskItem.purchase" style="width: 100%">
                        <el-table-column prop="name" label="产品" width="110"></el-table-column>
                        <el-table-column prop="model" label="型号" width="60"></el-table-column>
                        <el-table-column prop="brand" label="品牌" width="70"></el-table-column>
                        <el-table-column prop="storage" label="库存" width="55"></el-table-column>
                        <el-table-column prop="target" label="采购" width="55"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="80">
                            <template slot-scope="scope">
                                <el-button  @click="dealPurchase(scope.row)" type="text" size="small">添加采购</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    </div>
            </el-card>
        </li>
    </ul>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { Order } from '../../interface/basic/Order'
import { SalesTask } from '../../interface/mix-interface/SalesTask'
import { PurchaseTask } from '../../interface/mix-interface/purchaseTask'

import { MockSalesTask } from '../../interface/Mock/MockSalesTask'
import { MockPurchaseTask } from '../../interface/Mock/MockPurchaseTask'

@Component
export default class Aside extends Vue {

    todayTaskList: any[] = [MockSalesTask, MockPurchaseTask]

    // 处理订单
    dealOrder(row: Order) {
        console.log(row)
    }

    manOrder(row: Order) {
        console.log(row)
    }

    dealPurchase(row: any) {
        console.log(row)
    }

    count: number = 0
    load() {
    }

}
</script>

<style scoped>

.task__list {
    list-style-type: none;
    padding: 0;
}

.task__list li {
    margin: 10px;
}
</style>