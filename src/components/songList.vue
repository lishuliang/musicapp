<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({ playlist: { type: Array }, tags: { type: Array } });
const emit = defineEmits(["changeSong"]);

const play = (index) => emit("changeSong", index);
</script>

<template>
  <div class="list">
    <div class="play-item" v-for="(item, index) in playlist" :key="index">
      <div class="left">
        <div class="index">{{ index + 1 }}</div>
        <div class="content">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="author">
            <span class="tag" v-for="(tag, index) in tags" :key="index">
              {{ tag }}</span
            >
            <span class="name">{{ item.al.name }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true" @click="play(index)">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list {
  .play-item {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    margin: 0.1rem 0;
    .left {
      display: flex;
      align-items: center;
      width: 5rem;
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
        width: 4.5rem;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .author {
        display: flex;
        align-items: center;
        .tag {
          font-size: 0.2rem;
          color: orangered;
          border: 1px solid orangered;
          border-radius: 0.05rem;
          margin: 0 0.05rem;
        }
        .name {
          font-size: 0.1rem;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
          max-width: 2.8rem;
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
</style>