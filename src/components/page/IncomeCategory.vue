<template>
  <div>
    <v-bread title="收入类别" desc="收入类别管理" :list="list"></v-bread>

    <div class="container"> 
      <div class="table">
        <el-table ref="multipleTable" :data="incomeCategorys" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column prop="name" label="分类名称" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
        <el-form ref="form" :model="form" label-width="50px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
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
  name: 'IncomeCategory',
  data () {
    return {
      list: [
        {name: '收支分类', path: ''},
        {name: '收入类别', path: '/incomeCategory'}
      ],
      incomeCategorys: [
        {name: '奖金'}, {name: '红包'}, {name: '工资'},
        {name: '投资回报'}, {name: '利息收入'}, {name: '报销收入'},
      ],
      form: {name: ""},
      editVisible: false,
      delVisible: false
    }
  },
  components: {
    vBread
  },
  methods: {
    handleEdit(index, row) {
      console.log(`handleEdit > index: ${index}, row: ${JSON.stringify(row)}.`);
      this.form = row;
      this.editVisible = true;
    },
    handleDel(index, row) {
      console.log(`handleDel > index: ${index}, row: ${JSON.stringify(row)}.`);
      this.delVisible = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  float: right;
}
</style>