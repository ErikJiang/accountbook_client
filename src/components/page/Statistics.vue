<template>
  <div>
    <v-bread title="统计报表" desc="统计收入支出数据" :list="list"></v-bread>

    <div class="container">
      <div class="schart">
          <div class="content-title">柱状图</div>
          <schart canvasId="bar" class="schart-item" :data="data1" type="bar" :options="options1"></schart>
      </div>
      <div class="schart">
      <div class="content-title">折线图</div>
      <schart canvasId="line" class="schart-item" :data="data1" type="line" :options="options1"></schart>
      </div>
      <div class="schart">
      <div class="content-title">饼状图</div>
      <schart canvasId="pie" class="schart-item" :data="data2" type="pie" :options="options2"></schart>
      </div>
      <div class="schart">
      <div class="content-title">环形图</div>
      <schart canvasId="ring" class="schart-item" :data="data2" type="ring" :options="options2"></schart>
      </div>
    </div>
    
  </div>
</template>

<script>
import vBread from '../common/Bread'
import Schart from 'vue-schart';
export default {
  name: 'Statistics',
  data () {
    return {
      msg: '图表统计页面',
      list: [
        {
          name: "统计报表",
          path: "/statistics"
        }
      ],
      data1:[
          {name:'2012',value:1141},
          {name:'2013',value:1499},
          {name:'2014',value:2260},
          {name:'2015',value:1170},
          {name:'2016',value:970},
          {name:'2017',value:1450}
      ],
      data2 : [
          {name:'短袖',value:1200},
          {name:'休闲裤',value:1222},
          {name:'连衣裙',value:1283},
          {name:'外套',value:1314},
          {name:'羽绒服',value:2314}
      ],
      options1: {
          title: '某商店近年营业总额',
          bgColor: '#009688',
          titleColor: '#ffffff',
          fillColor: '#e0f2f1',
          axisColor: '#ffffff',
          contentColor: '#999'
      },
      options2: {
          title: '某商店各商品年度销量',
          bgColor: '#607d8b',
          titleColor: '#ffffff',
          legendColor: '#ffffff'
      }
    }
  },
  components: {
    vBread, Schart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.schart{
    width: 600px;
    display: inline-block;
}
.content-title{
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.schart-item {
  width: 500px;
  height: 450px;
}
</style>
