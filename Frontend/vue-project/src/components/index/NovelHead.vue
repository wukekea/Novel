<script setup>
import { reactive } from 'vue';  
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';  
import { Search } from '@element-plus/icons-vue'

const searchText = ref('')

</script>


<template>
    <el-row >
        <el-col :span="6" class="border-styles">
            <el-icon class="icon-book border-styles">
                <Notebook />
                <span class="icon-word">轻语</span>
            </el-icon>
        </el-col>
        <el-col :span="12" class="border-styles">
            <el-input
                v-model="searchText"
                class="search"
                placeholder="查找书名"
                :prefix-icon="Search"
            />
        </el-col>
        <el-col :span="6" class="border-styles col-right">
            <span class="login">登录</span>
            <span>｜</span>
            <span class="login">注册</span>
        </el-col>
    </el-row>
    
</template>



<style scoped>
.border-styles {  
    border: 1px solid green;
}
.el-row {
    height: 100%;
}
.icon-book {
  /* display: inline-block; */
  justify-content: left;
  align-items: center;
  height: 100%;
  width: 100%;
  color: black;
  font-size: 30px;
}
.icon-word {
    font-size: 20px;
    font-style: normal;
    font-family: "Kaiti SC", "SimSun", "宋体", sans-serif;
}
.search {
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 10px;
}
.col-right {
  display: flex; 
  justify-content: right;
  align-items: center;
  color: black;
  font-size: 15px;
}
.login {
    color: gray;
    font-weight: bold;
    /* 如果浏览器不支持 Times New Roman字体，则会依次尝试 Times, serif*/
    font-family: "Times New Roman", Times, serif;  
}
</style>

