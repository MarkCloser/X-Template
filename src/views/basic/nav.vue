<template>
    <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#409EFF">
        <template v-for="(levelOneMenu, levelOneIndex) in menuDataGroup">
            <template  v-if="levelOneMenu.childMenu && levelOneMenu.childMenu.length > 0">
                <el-submenu :key="levelOneIndex"   :index="levelOneMenu.index">
                    <template slot="title">{{ levelOneMenu.name }}</template>
                    <el-menu-item :key="levelTwoIndex" v-for="(levelTwoMenu, levelTwoIndex) in levelOneMenu.childMenu" :index="levelTwoMenu.index" @click="routeTo(levelTwoMenu.routeUrl)">
                        {{ levelTwoMenu.name }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                    <el-menu-item :key="levelOneIndex" :index="levelOneMenu.index">{{ levelOneMenu.name }}</el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { NavMenu } from '../../interface/mix-interface/NavMenu'
import { mockNavMenu } from '../../interface/Mock/MockNavMenu'
import router from "../../router"
import { log } from "util"

@Component
export default class Nav extends Vue {
    /**
     * 1. request for server, get the nav list
     * 2. if server close, use default nav list
     */
      // Nav 菜单
    menuDataGroup: NavMenu[] =  mockNavMenu
    activeIndex: string = '7'
    @Watch('$route')
    routechange(to: any, from: any) {
        let self = this
        console.log(to.path)
    }


    handleSelect(key: string, keyPath: string[]) {
        console.log(key, keyPath);
    }
    // 狀態函數
    created() {
        let self = this
        for (let menuDataItem of self.menuDataGroup) {
            if(menuDataItem.childMenu && menuDataItem.childMenu.length > 0) {
                for (let childMenuItem of menuDataItem.childMenu) {
                    if(childMenuItem.routeUrl === self.$route.path) {
                        self.activeIndex = menuDataItem.index
                    }
                }
            }
        }
    }

    routeTo(link: string) {
        let self = this
        if ( self.$route.path === link ) {
            console.log('same path')
        } else {
            router.push(link)
        }
    }
}
</script>