<template>
    <div id="product__manage">
        <el-button @click="clearFilter">清除所有过滤器</el-button>
        <el-table
            ref="filterTable"
            :data="
                tableData.slice(
                    (currentPage - 1) * pagesize,
                    currentPage * pagesize
                )
            "
            @filter-change="filterTagTable"
            style="width: 100%"
        >
            <el-table-column prop="name" label="产品" width="120">
            </el-table-column>
            <el-table-column
                prop="type"
                label="种类"
                sortable
                width="150"
                column-key="type"
                :filters="productType"
            >
            </el-table-column>
            <el-table-column
                prop="model"
                label="型号"
                sortable
                width="120"
                column-key="model"
                :filters="modelType"
            >
            </el-table-column>
            <el-table-column
                prop="brand"
                label="品牌"
                sortable
                width="120"
                column-key="brand"
                :filters="brandType"
            >
            </el-table-column>
            <el-table-column prop="supplier" label="供应商"> </el-table-column>
            <el-table-column
                prop="keyWords"
                label="关键词"
                :formatter="formatter"
            >
            </el-table-column>
            <el-table-column prop="others" label="备注"> </el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                style="display: flex; justify-content: center; margin: 30px"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pagesize"
                layout="total, prev, pager, next"
                :total="tableData.length"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {
    mockProduct,
    mockProductType,
    mockModelType,
    mockBrandType
} from "../../interface/Mock/MockProduct";

@Component
export default class Manage extends Vue {
    tableData: any = mockProduct;
    productType: any = mockProductType;
    modelType: any = mockModelType;
    brandType: any = mockBrandType;

    currentPage = 1;
    pagesize = 10;

    filterCache: any = {};

    clearFilter() {
        let self = this;
        let filterTable: any = self.$refs.filterTable;
        filterTable.clearFilter();
    }

    formatter(row: any, column: any) {
        let keyWord = "";
        for (let item of row.keyWords) {
            keyWord = keyWord + "       " + item;
        }
        return keyWord;
    }

    filterTag(value: any, row: any) {
        return row.tag === value;
    }

    handleSizeChange(val: any) {
        console.log(`每页 ${val} 条`);
    }

    handleCurrentChange(val: any) {
        console.log(`当前页: ${val}`);
    }

    filterTagTable(filters: any) {
        let self = this;
        self.releaseFilter(filters);
        let filterData = self.changeFilterChache();
        let theFilterDateTable: any = [];

        let theTableData = self.tableData;
        filterData.forEach((item, index) => {
            if (index !== 0) {
                theTableData = theFilterDateTable;
                theFilterDateTable = [];
            }
            for (let tableDataItem of theTableData) {
                let findKey = item["key"];
                if (item["value"].indexOf(tableDataItem[findKey]) > -1) {
                    theFilterDateTable.push(tableDataItem);
                }
            }
        });
        self.tableData = theFilterDateTable;
    }

    releaseFilter(filters: any) {
        let self = this;
        let key: any = Object.keys(filters);
        self.filterCache[key] = filters[key];
    }

    changeFilterChache() {
        let self = this;
        let changedFilter: any[] = [];
        for (var key in self.filterCache) {
            let filterItem: any = {
                key: "",
                value: null
            };
            filterItem["key"] = key;
            filterItem["value"] = self.filterCache[key];
            if (self.filterCache[key].length > 0) {
                changedFilter.push(filterItem);
            }
        }
        console.log(changedFilter);
        return changedFilter;
    }
}
</script>
