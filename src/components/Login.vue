<template>
    <div id="login" class="login">
        <div>
            <el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue{

    ruleForm: any = {
        name: '',
        pass: ''
    }

    rules: any = {
        name: [
            {
                min: 5,
                max: 8,
                message: '用户名长度在 5 到 8 位',
                trigger: 'blur'
            }
        ],
        pass: [
            {
                 min: 5,
                max: 8,
                message: '密码长度在 5 到 8 位',
                trigger: 'blur'
            }
        ]
    }


    submitForm(formName: any) {
        let self: any = this
        let that: any = this.$refs[formName]
        that.validate((valid: any) => {
            if (valid) {
                // Request For Server Logic
                self.$store.commit('handleUserName', self.ruleForm.name)
                self.$store.commit('isLogin', true)
                self.$router.go(0)
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    resetForm(formName: any) {
        let that: any = this.$refs[formName]
        that.resetFields()
    }

}
</script>
<style scoped>
.login {
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    position: absolute;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>