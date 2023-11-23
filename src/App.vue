<template>
  <el-container>
    <el-header style="padding: 0px">
      <div class="container">
        <div class="icon"></div>
        <div class="menu">
          <ul>
            <li>首页</li>
            <li>item - 1</li>
            <li>item - 2</li>
            
          </ul>
          <!-- <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">item two</el-menu-item>
            <el-menu-item index="3">item three</el-menu-item>
          </el-menu> -->
        </div>

        <div class="person"></div>
      </div>
    </el-header>
    <el-main id="main" style="padding: 0px">
      <router-view></router-view>
    </el-main>
    <el-footer style="padding: 0px">
      <div class="footer">kevin footer</div>
    </el-footer>
  </el-container>
</template>

<script setup>
// import { ref } from "vue";
// const activeIndex = ref("1");
// const handleSelect = (key, keyPath) => {
//   console.log("key", key, keyPath);
// };
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
#app {
  overflow: hidden;
  background: bisque;
}
#main {
  min-height: calc(100vh - 140px);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  opacity: 1;
  filter: blur(0.3);
  width: 100%;
  height: 100%;
}
.el-header {
  width: 100%;
  background: #fff;
  .container {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    .icon {
      width: 40px;
      height: 40px;
      background: #bfa;
    }
    .menu {
      display: flex;
      flex-basis: auto;
      flex-grow: 1;
      .el-menu {
        width: 100%;
      }
    }
  }
}
</style>
