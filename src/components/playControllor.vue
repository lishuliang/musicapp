<script setup>
import { ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const audio = ref(null);
const reaFlag = reactive({ flag: false });

onMounted(() => {});

const play = () => {
  if (audio.value.paused) {
    audio.value.play();
    // flag.value = true;
    reaFlag.flag = true;
  } else {
    audio.value.pause();
    reaFlag.flag = false;
  }
};
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
      <svg v-if="reaFlag.flag" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>
      <audio
        :src="`https://music.163.com/song/media/outer/url?id=${
          store.state.playlist[store.state.playCurrentIndex].id
        }.mp3`"
        ref="audio"
      ></audio>
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