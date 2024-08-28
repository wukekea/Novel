<script setup>
import { reactive } from 'vue';  
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';  

const height = ref('150px');
const novelDesc = reactive({
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
});

// 组件挂载后设置CSS变量  
onMounted(() => {  
  document.documentElement.style.setProperty('--container-height', height.value);  
}); 
</script>


<template>
    
    <div class="border-styles container">
        <el-image>
            <template #error>
                <div class="image-slot">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </template>
        </el-image>
            
        <div class="border-styles desc">
            <div class="border-styles desc-header">
                <div class="word title">
                    {{novelDesc.name}}
                </div>
                <div class="word author">
                    {{novelDesc.author}}
                </div>
            </div>

            <div class="line"></div>

            <div class="border-styles desc-main word">
                &emsp;&emsp;{{novelDesc.desc}}
            </div>
        </div>
    </div>

        
    
</template>



<style scoped>
.border-styles {  
    border: 1px solid blue;
}
.container {
    display: flex;
    height: var(--container-height);
    width: 300px;
}
.el-image {
  width: 120px;
  height: 100%;
}
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.desc {
    width: 180px;
    /* width: 100%; */
    height: 100%;
}
.desc-header {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.desc-main {
    width: 100%;
    height: 80%;
}
.word {
    font-size: 12px;
    padding: 0 10px;
}
.title {
    color: blue;
}
.author {
    color: gray;
}
.line {
    border-top: 1px solid #000;
    margin: 0 10px;
}
</style>

