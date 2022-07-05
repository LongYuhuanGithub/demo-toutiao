<template>
  <div class="app-container">
    <!-- 路由占位符 -->
    <router-view />

    <!-- Tabbar 选项卡 -->
    <van-tabbar route>
      <!-- replace 跳转的时候不添加历史记录 -->
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
