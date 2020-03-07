<template>
    <div id="app">  
        <Login v-if="!isUserLogin"></Login>
        <template v-else>
            <el-container>
                <el-header style="padding: 0" >
                    <router-view name="nav"></router-view>
                </el-header>
                <el-container>
                    <el-aside v-if="!isHiddenAside" width="500px">
                        <router-view name="aside"></router-view>
                    </el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Login from './components/Login.vue'

@Component({
    components: {
        Login
    }
})
export default class App extends Vue {

    isUserLogin: boolean = false;
    isHiddenAside: boolean = false;

    @Watch('$route')
    routechange(to: any, from: any) {
        let self = this
        console.log(to.path)
        if(to.path === '/') {
            self.isHiddenAside = false
        } else {
            self.isHiddenAside = true
        }
    }

    created() {
        let self: any = this
        if(self.$store.getters.isLogin) {
            self.isUserLogin = true
        }
    }
}
</script>

<style scoped>
.login__content {
   height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
