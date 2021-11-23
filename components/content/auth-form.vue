<template>
  <el-form
    ref="rule-form"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <!-- <el-form-item label="Password" prop="pass"> -->
    <!-- <el-input
        v-model="ruleForm.pass"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >Submit</el-button
      >
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
export default {
  name: 'AuthForm',
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [],
      ruleForm: {},
    }
  },
}
</script>

<style lang="scss" scoped></style>
