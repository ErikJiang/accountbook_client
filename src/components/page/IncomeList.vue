<template>
  <div>
    <v-bread title="收入列表" desc="收入数据列表" :list="list"></v-bread>

    <div class="container">
      <div class="search">

        <el-select v-model="selectVal" placeholder="请选择" clearable>
          <el-option-group v-for="group in categoryList" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-option-group>
        </el-select>

        <el-date-picker v-model="dateVal" type="daterange" align="right" unlink-panels
          start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期">
        </el-date-picker>

      </div>
      <div class="table">

        <el-table ref="multipleTable" :data="outgoList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="60" fixed> </el-table-column>
          <el-table-column prop="category" label="分类" width="120"></el-table-column>
          <el-table-column prop="amount" label="金额" width="120"></el-table-column>
          <el-table-column prop="date" label="日期" width="120"></el-table-column>
          <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pagenation">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="5"
          layout="total, sizes, prev, pager, next, jumper" :total="40">
        </el-pagination>
      </div>

    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
        <el-form ref="form" :model="form" label-width="50px">
            <el-form-item label="分类">
                <el-input v-model="form.category"></el-input>
            </el-form-item>
            <el-form-item label="金额">
                <el-input v-model="form.amount"></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="form.remark"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
        <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="delVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteRow">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'IncomeList',
  data () {
    return {
      msg: '收入账单列表页面',
      list: [
        {
          name: '账单列表',
          path: ''
        },
        {
          name: '收入列表',
          path: '/incomeList'
        }
      ],
      selectVal: '',
      categoryList: [
        {
          label: '餐饮',
          options: [
            { value: 'zaocan', label: '早餐' }, 
            { value: 'wucan', label: '午餐' },
            { value: 'wancan', label: '晚餐' }
          ]
        }, {
          label: '零食烟酒',
          options: [
            { value: 'shuiguo', label: '水果' }, 
            { value: 'yinliao', label: '饮料' },
            { value: 'lingshi', label: '零食' }, 
            { value: 'tangguo', label: '糖果' }
          ]
        }
      ],
      dateVal: '',
      outgoList: [
        {category: '午餐', amount: 14.5, date: '2018-04-15', remark: '武汉热干面'},
        {category: '水果', amount: 20.0, date: '2018-04-15', remark: '西昌枇杷'},
        {category: '晚餐', amount: 30.0, date: '2018-04-15', remark: '麻辣小龙虾'},
      ],
      currentPage: 10,
      editVisible: false,
      delVisible: false,
      form: {
        category: '午餐', amount: 14.5, date: '2018-04-15', remark: '武汉热干面'
      }
    }
  },
  components: {
    vBread
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
      console.log(`handleEdit > index: ${index}, row: ${JSON.stringify(row)}.`);
      this.form = row;
      this.editVisible = true;
    },
    handleDel(index, row) {
      console.log(`handleDel > index: ${index}, row: ${JSON.stringify(row)}.`);
      this.delVisible = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>