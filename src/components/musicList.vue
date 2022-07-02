<script setup>
import { reactive, onMounted } from "vue";
import { Button, Swipe, SwipeItem } from "vant";
import { getRecommendPlaylist } from "../api/index";
import { RouterLink, useRouter } from "vue-router";
import { changeValue } from "../util/index";

const dataState = reactive({
  playlists: [],
});

onMounted(async () => {
  const result = await getRecommendPlaylist();
  dataState.playlists = result.data.result;
});

const router = useRouter();

const clickEvent = (id) => {
  router.push({ path: "/listview", query: { id: id } });
};
</script>

<template>
  <div class="musicList">
    <div class="music-top">
      <div class="title">发现好歌单</div>
      <van-button class="more" size="mini" round type="default"
        >查看更多</van-button
      >
    </div>
    <div class="mlist">
      <div class="swipe-container">
        <van-swipe
          class="my-swipe"
          :show-indicators="false"
          :height="130"
          :width="100"
        >
          <van-swipe-item
            v-for="item in dataState.playlists"
            :key="item.id"
            @click="clickEvent(item.id)"
          >
            <img :src="item.picUrl" alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="count">▷ {{ changeValue(item.playCount) }}</div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  height: 3.5rem;
  padding: 0 0.4rem;
  .music-top {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      font-size: 0.24rem;
    }
  }
  .mlist {
    width: 100%;
    height: 3rem;
    padding: 0.1rem 0;
    .swipe-container {
      .van-swipe-item {
        margin: 0 0.1rem;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
        }
        .name {
          font-size: 0.1rem;
        }
        .count {
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.05rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>