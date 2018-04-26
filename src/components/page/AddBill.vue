<template>
  <div>
    <v-bread title="新增账目" desc="新增收入支出账目数据" :list="list"></v-bread>

    <div class="container">
      <div class="form-box">

        <el-form :model="createData" ref="createData" label-width="100px" class="demo-ruleForm">
          
          <el-form-item label="账单类型">
            <el-radio-group v-model="createData.billType">
              <el-radio label="income" border>收入类型</el-radio>
            <el-radio label="outgo" border>支出类型</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="分类选择">
            <el-select v-model="createData.category" placeholder="请选择" clearable>
              <el-option-group v-for="group in categoryList" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>

          <el-form-item label="日期设置">
            <el-date-picker v-model="createData.date" type="date" placeholder="选择日期" value-format='timestamp'></el-date-picker>
          </el-form-item>

          <el-form-item class='amount' label="金额" prop="amount" :rules="amountRules">
            <el-input type="amount" v-model.number="createData.amount" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('createData')">提交</el-button>
            <el-button @click="resetForm('createData')">重置</el-button>
          </el-form-item>

        </el-form>

      </div>
    </div>

  </div>
</template>

<script>
import vBread from "../common/Bread";
export default {
  name: "AddBill",
  data() {
    return {
      list: [
        {
          name: "新增账目",
          path: "/addBill"
        }
      ],
      categoryList: [
        {
          label: "餐饮",
          options: [
            { value: "zaocan", label: "早餐" },
            { value: "wucan", label: "午餐" },
            { value: "wancan", label: "晚餐" }
          ]
        },
        {
          label: "零食烟酒",
          options: [
            { value: "shuiguo", label: "水果" },
            { value: "yinliao", label: "饮料" },
            { value: "lingshi", label: "零食" },
            { value: "tangguo", label: "糖果" }
          ]
        }
      ],
      amountRules: [
        { required: true, message: "金额不能为空" },
        { type: "number", message: "金额必须为数字值" }
      ],
      createData: {
        billType: "income",
        category: "",
        date: "",
        amount: 0
      }
    };
  },
  components: {
    vBread
  },
  methods: {
    submitForm(data) {
      console.log(`submitForm data: ${JSON.stringify(this.createData)}`);
    },
    resetForm(data) {
      console.log(`resetForm data: ${JSON.stringify(this.createData)}`);
      this.createData = {
        billType: "income",
        category: "",
        date: "",
        amount: 0
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amount {
  width: 25%;
}
</style>
