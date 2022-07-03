<script setup>
import { defineEmits, defineProps, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { useFeatureX } from "../util/index";

const store = useStore();
const {
  playCurrentIndex,
  playlist,
  lyric,
  currentTime,
  isPause,
  currentLyricIndex,
} = useFeatureX(store.state.playControllor);
const emit = defineEmits(["changeShow", "play"]);
const isLyric = ref(true);
const lyricEle = ref(null);

//bug记录 背景图片层级太高导致点击事件无法触发
const back = () => emit("changeShow");

const play = () => emit("play");

const lyricList = computed(() => {
  return lyric.value.split(/\n/g).map((item, index) => {
    const min = parseInt(item.slice(1, 3));
    const sec = parseInt(item.slice(4, 6));
    const text = item.slice(11);
    const time = min * 60 * 1000 + sec * 1000;
    return { time, text };
  });
});

const goPlay = (num) => {
  !isPause.value && play();
  const newIndex =
    playCurrentIndex.value + num < 0
      ? playlist.value.length - 1
      : playCurrentIndex.value + num;
  store.dispatch("setPlaycurrentindex", { index: newIndex });
  store.dispatch("setLyric", {
    id: playlist.value[playCurrentIndex.value].id,
  });
  store.dispatch("setCurrenttime", { time: 0 });
  store.dispatch("setCurrentlyricindex", { index: 0 });
};

//监听currentTime 实现歌词滚动
watch(
  () => currentTime.value,
  (time, oldTime) => {
    const curTime = time * 1000;
    for (let i = 1; i < lyricList.value.length; i++) {
      if (
        curTime > lyricList.value[i - 1].time &&
        curTime <= lyricList.value[i].time
      )
        store.dispatch("setCurrentlyricindex", { index: i - 1 });
    }
    if (currentLyricIndex.value > 8) {
      lyricEle.value.scrollTop += 8;
    }
  }
);
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
      <svg class="icon" aria-hidden="true" @click="back">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div v-show="!isLyric" class="play-content">
      <div class="img-wrapper" :class="{ active: isPause }">
        <img :src="playlist[playCurrentIndex].al.picUrl" />
      </div>
    </div>
    <div v-show="isLyric" class="play-lyric" ref="lyricEle">
      <div
        class="lyric-item"
        :class="{ active: currentLyricIndex === index }"
        v-for="(item, index) in lyricList"
        :key="index"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="play-progress"></div>
    <div class="play-footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg v-if="isPause" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>
    </div>
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
    align-items: center;
    width: 100%;
    height: 1.2rem;
    padding: 0 0.2rem;
    .title {
      color: #fff;
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: #fff;
    }
    .content {
      width: 5rem;
      overflow: hidden;
      .title {
        display: flex;
        justify-content: center;
        position: relative;
        white-space: nowrap;
        width: 5rem;
        font-size: 0.4rem;
        animation: roll 3s linear infinite;
        &:hover {
          animation-play-state: paused;
        }
      }
    }
  }
  .play-content {
    width: 7.5rem;
    height: 7.5rem;
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-wrapper {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 1.75rem;
      }
    }
    .active {
      animation: rotate 10s linear infinite;
    }
  }
  .play-lyric {
    width: 7.5rem;
    height: 11rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    .lyric-item {
      display: flex;
      font-size: 0.4rem;
      align-items: center;
    }
    .active {
      font-size: 0.6rem;
      height: 0.6rem;
      margin: 0.2rem 0;
    }
  }
  .play-footer {
    width: 7.5rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0.5rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .play {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
@keyframes roll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>