<template>
    <div class="container">
        <el-row>

            <!-- 左 -->
            <el-col :span="6">
                <div class="grid-content bg-purple-left">DEMO-EMO</div>
            </el-col>

            <!-- 中部空白 -->
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>

            <!-- 右侧导航 -->
            <el-col :span="12">
                <div class="grid-content bg-purple-right">
                    <el-col :span="6" class="nav-bar">
                        <div>首页</div>
                    </el-col>
                    <el-col :span="6" class="nav-bar">?/??</el-col>
                    <el-col :span="6" class="nav-bar">文件夹</el-col>
                    <el-col :span="6" class="nav-bar">搜索</el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {

        }
    },


}
</script>
<style lang="less">
.container {
    padding: 10px;
    background-color: #fff;
    .grid-content {
        height: 56px;
        line-height: 56px
    }
    .bg-purple-left {
        font-size: 24px;
        padding-left: 10px;
    }
    .bg-purple-right {
        font-size: 16px;
        padding-right: 10px;
        // .nav-bar {
        //     // padding: 10px;
        // }
    }
}
</style>