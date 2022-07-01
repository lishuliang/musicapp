<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./view/Home.vue";
import playControllor from './components/playControllor.vue'
</script>

<template>
  <div>
    <router-view></router-view>
    <play-controllor></play-controllor>
  </div>
</template>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
