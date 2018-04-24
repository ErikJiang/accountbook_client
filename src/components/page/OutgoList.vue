<template>
  <div>
    <v-bread title="支出列表" desc="支出数据列表页面" :list="list"></v-bread>

    <div class="outgoContent">
      <div class="search">

        <el-select v-model="selectVal" placeholder="请选择" clearable>
          <el-option-group v-for="group in categoryList" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-option-group>
        </el-select>

        <el-date-picker v-model="dateVal" type="daterange" align="right" unlink-panels
          start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期" :picker-options="pickerOptions">
        </el-date-picker>

      </div>
      <div class="table">

        <el-table ref="multipleTable" :data="outgoList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="60" fixed> </el-table-column>
          <el-table-column prop="category" label="分类" width="120"></el-table-column>
          <el-table-column prop="amount" label="金额" width="120"></el-table-column>
          <el-table-column prop="date" label="时间" width="120"></el-table-column>
          <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small">编辑</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="pagenation">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="5"
            layout="total, sizes, prev, pager, next, jumper" :total="40">
          </el-pagination>
        </div>

      </div>
    </div>


    

  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'OutgoList',
  data () {
    return {
      msg: '支出账单列表页面',
      list: [
        { name: '账单列表', path: '' },
        { name: '支出列表', path: '/outgoList' }
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
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      outgoList: [
        {category: '午餐', amount: 14.5, date: '2018-04-15', remark: '武汉热干面'},
        {category: '水果', amount: 20.0, date: '2018-04-15', remark: '西昌枇杷'},
        {category: '晚餐', amount: 30.0, date: '2018-04-15', remark: '麻辣小龙虾'},
      ],
      currentPage: 10
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  margin-bottom: 15px;
}

.pagenation {
  margin-top: 15px;
  float: right;
}
</style>