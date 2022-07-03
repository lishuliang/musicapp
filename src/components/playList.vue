<script setup>
import { useStore } from "vuex";
import { Button } from "vant";
import { changeValue, useFeatureX } from "../util/index";
import songList from "./songList.vue";

const props = defineProps({
  playlist: {
    type: Object,
  },
  flag: {
    type: Boolean,
  },
});
const { flag, playlist } = useFeatureX(props);
const store = useStore();

const changeSong = (index) => {
  store.dispatch("setPlaycurrentindex", { index: index });
};
</script>

<template>
  <div v-if="flag" class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right">
        <van-button type="default" size="small" round color="#e60026"
          >+收藏({{ changeValue(playlist.subscribedCount) }})</van-button
        >
      </div>
    </div>
    <song-list
      :playlist="playlist.tracks"
      :tags="playlist.tags"
      @changeSong="changeSong"
    ></song-list>
  </div>
</template>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0.1rem 0.2rem 1.2rem 0.2rem;
  margin-top: 0.2rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  min-height: 10rem;
  .playlist-top {
    display: flex;
    height: 0.8rem;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      .text {
        display: flex;
        align-items: center;
        padding-left: 0.1rem;
        .title {
          font-size: 0.4rem;
          font-weight: 900;
        }
        .num {
          font-size: 0.35rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>