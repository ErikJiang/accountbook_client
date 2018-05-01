<template>
    <div>
        <v-bread title="导入导出" desc="数据文件导入导出" :list="list"></v-bread>
        

        <!-- <div class="container"> -->
          
          


          <el-card class="box-card export">
            <div slot="header"><span>数据导出</span></div>

            <div>
              <el-date-picker v-model="dateVal" type="daterange" align="right" unlink-panels
                start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期">
              </el-date-picker>

            </div>
          </el-card>


          <el-card class="box-card import">
            <div slot="header"><span>数据导入</span></div>

            <div>
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">仅允许导入CSV文件，且不超过500KB</div>
              </el-upload>
            </div>
          </el-card>

          

          

        <!-- </div> -->
        

    </div>
</template>

<script>
import vBread from "../common/Bread";
export default {
  name: "DataIO",
  data() {
    return {
      list: [{ name: "导入导出", path: "/dataIO" }],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  components: {
    vBread
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style scoped>

.line {
  height:1px;
  border:none;
  border-top:1px dashed;
  color: #636467;
}
.import {
  margin-top: 20px;
}

.export {
  margin: 20px 0 10px 0;
}

</style>
