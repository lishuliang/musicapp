<script setup>
import { Button } from "vant";
import { changeValue } from "../util/index";

const props = defineProps({
  playlist: {
    type: Object,
  },
  flag: {
    type: Boolean,
  },
});
</script>

<template>
  <div v-if="props.flag" class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ props.playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right">
        <van-button type="default" size="small" round color="#e60026"
          >+收藏({{ changeValue(props.playlist.subscribedCount) }})</van-button
        >
      </div>
    </div>

    <div class="list">
      <div
        class="play-item"
        v-for="(item, index) in props.playlist.tracks"
        :key="index"
      >
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="content">
            <div class="title">
              {{ item.name }}
            </div>
            <div class="author">
              <span
                class="tag"
                v-for="(tag, index) in props.playlist.tags"
                :key="index"
              >
                {{ tag }}</span
              >
              <span class="name">{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang2"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0.1rem 0.4rem;
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
  .list {
    .play-item {
      display: flex;
      justify-content: space-between;
      height: 1rem;
      margin: 0.1rem 0;
      .left {
        display: flex;
        align-items: center;
        .index {
          font-size: 0.4rem;
          width: 0.2rem;
        }
        .content {
          margin-left: 0.4rem;
        }
        .title {
          font-size: 0.3rem;
          font-weight: 900;
          margin-bottom: 0.1rem;
        }

        .author {
          display: flex;
          align-items: center;
          .tag {
            font-size: 0.2rem;
            width: 0.5rem;
            color: orangered;
            border: 1px solid orangered;
            border-radius: 0.05rem;
            margin: 0 0.05rem;
          }
          .name{
            font-size: 0.1rem;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .icon {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.1rem;
          fill: #ccc;
        }
      }
    }
  }
}
</style>