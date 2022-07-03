<script setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import playMusic from "../components/playMusic.vue";
import { useFeatureX } from "../util/index";

const store = useStore();

const audio = ref(null);
const data = reactive({ show: false, currentTimeId: null });

const { show } = toRefs(data);
const { playCurrentIndex, playlist, lyric, currentTime, isPause } = useFeatureX(
  store.state
);

const updateTime = () => {
  data.currentTimeId = setInterval(() => {
    store.dispatch("setCurrenttime", { time: audio.value.currentTime });
  }, 1000);
};

const play = () => {
  if (audio.value.paused) {
    audio.value.play();
    store.dispatch("setIspause", { isPause: false });
    updateTime();
  } else {
    audio.value.pause();
    store.dispatch("setIspause", { isPause: true });
    clearInterval(data.currentTimeId);
    data.currentTimeId = null;
  }
};

const changeShow = () => {
  store.dispatch("setLyric", {
    id: store.state.playlist[store.state.playCurrentIndex].id,
  });
  data.show = !data.show;
};
</script>

<template>
  <div class="play-controllor">
    <div class="left" @click="changeShow">
      <img :src="playlist[playCurrentIndex].al.picUrl" />
      <div class="content">
        {{ playlist[playCurrentIndex].name }}
      </div>
    </div>
    <div class="right">
      <svg v-if="isPause" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>
      <audio
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
        ref="audio"
      ></audio>
      <play-music
        v-show="show"
        @changeShow="changeShow"
        @play="play"
      ></play-music>
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
  background-color: #ccc;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.5rem;
      margin: 0 0.2rem;
    }
    .content {
      width: 4.3rem;
    }
  }
  .right {
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.2rem;
    }
  }
}
</style>