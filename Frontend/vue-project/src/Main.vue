<script setup>
import NovelTabs from './components/index/NovelTabs.vue'
import NovelCard from './components/index/NovelCard.vue'
import NovelHead from './components/index/NovelHead.vue'

</script>

<template>
    <!-- <div class="div"> -->
        <el-container class="div">
            <el-header class=".el-header">
                <NovelHead/>
            </el-header>

            <el-main class=".el-main">
                <NovelTabs/>
            </el-main>

            <el-footer class=".el-footer">
                Footer
            </el-footer>

        </el-container>
    <!-- </div> -->

</template>

<style scoped lang="scss">
@mixin border-styles {  
    border: 1px solid red;
}  
.div {
    @include border-styles;
    width: 90vw;
    height: 100vh;
}
.el-header {
    @include border-styles;
}

.el-main {
    @include border-styles;
}

.el-footer {
    @include border-styles;
}
</style>
