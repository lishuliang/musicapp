<script setup>
import { toRefs } from "vue";
import { useStore } from "vuex";

const store = useStore();
console.log(store.state);
</script>

<template>
  <div class="play-controllor">
    <div class="left">
      <img
        :src="store.state.playlist[store.state.playCurrentIndex].al.picUrl"
      />
      <div class="content">
        {{ store.state.playlist[store.state.playCurrentIndex].al.name }}
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang1"></use></svg
      ><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
.play-controllor {
  width: 7.5rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #CCC;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.5rem;
      margin: 0 0.2rem;
    }
  }
  .right{
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.2rem;
    }
  }
}
</style>