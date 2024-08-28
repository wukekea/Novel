<script setup>
import { reactive } from 'vue';  
import NovelCard from './NovelCard.vue'

  
// 使用reactive定义一个响应式的数组  
const tabItems = reactive([{
  name: "首页",
},{
  name: "武侠",
},{
  name: "玄幻",
},{
  name: "都市",
},{
  name: "历史",
},{
  name: "网游",
}]);
const novelItems = reactive([{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
},{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
},{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
},{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
},{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
},{
  name: "不科学御兽",
  author: "轻泉流响",
  desc: "这是一个以御兽为主流的异世界。当时宇携带技能图鉴穿越到这里，并培育出一堆奇葩宠兽后，所有御兽师的三观都破碎了……关键词：御兽、宠兽、......",
}])
</script>


<template>
  <el-tabs type="border-card" stretch=true style="width: 100%;">
    <el-tab-pane v-for="(item, index) in tabItems" :key="index" :label="item.name">
      <NovelCard v-for="(novelItem, novelIndex) in novelItems" :key="novelIndex" class="novel-card"/>
    </el-tab-pane>
  </el-tabs>
</template>


<style scoped>
.el-tab-pane {
  display: flex;
  flex-wrap: wrap;
  /* margin: 5px; */
  justify-content: space-between;
}
.novel-card {
  margin-bottom: 10px;
}
</style>
