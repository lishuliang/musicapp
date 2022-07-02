<script setup>
import { defineEmits } from "vue";
import { useStore } from "vuex";
import { useFeatureX } from "../util/index";

const store = useStore();
const emit = defineEmits(["changeShow", "test"]);
const { playCurrentIndex, playlist } = useFeatureX(store.state);

const back = () => { //记录 背景图片层级太高导致点击事件无法触发
  emit("changeShow");
};
</script>

<template>
  <div class="play-music">
    <div
      class="bg"
      :style="{
        backgroundImage: `url(${playlist[playCurrentIndex].al.picUrl})`,
      }"
    ></div>
    <div class="play-top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true" @click="back">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">1111111</div>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="play-content"></div>
    <div class="play-lyric"></div>
    <div class="play-progress"></div>
    <div class="play-footer"></div>
  </div>
</template>

<style lang="less" scoped>
.play-music {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
    z-index: -1;
  }
  .play-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.2rem;
    padding: 0 0.2rem;
    .top-left {
      display: flex;
      align-items: center;
    }
    .top-right {
      display: flex;
      align-items: center;
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>