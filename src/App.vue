<template>
    <div id="app">  
        <Login v-if="!isUserLogin"></Login>
        <router-view v-else></router-view>
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
