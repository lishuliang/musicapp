<script setup>
import { reactive, toRefs } from "vue";
import { changeValue } from "../util/index";

const props = defineProps({
  playlist: {
    require: true,
    type: Object,
  },
  flag: {
    type: Boolean,
  },
});

const useFeatureX  = (obj) => {
  const newObj = reactive(obj);
  return toRefs(newObj);
}

//解构props
const {playlist, flag} = useFeatureX(props);

</script>

<template>
  <div v-if="flag" class="listview-top">
    <img class="background" :src="playlist.coverImgUrl" alt="背景图片" />
    <div class="listview-top-nav">
      <div class="back">
        <svg @click="$router.back()" class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="playlist.name" />
        <div class="count">▷ {{ changeValue(playlist.playCount) }}</div>
      </div>
      <div class="contentRight">
        <h4 class="name">{{ playlist.name }}</h4>
        <div class="author">
          <img
            class="avatar"
            :src="playlist.creator.avatarUrl"
            alt="avatar"
          />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="decription">{{ playlist.description }}</div>
      </div>
    </div>

    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.listview-top {
  width: 7.5rem;
  height: 6rem;
  padding: 0 0.25rem;
  .background {
    width: 7.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(40px);
  }
  .listview-top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    font-size: 0.35rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .back,
    .right {
      display: flex;
    }
    .title {
      margin-left: 0.3rem;
      color: #fff;
    }
    .search {
      margin-right: 0.3rem;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    height: 3.8rem;
    padding-top: 0.4rem;
    .contentLeft {
      position: relative;
      width: 2.8rem;
      height: 100%;
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        color: #ccc;
      }
    }
    .contentRight {
      width: 4.2rem;
      height: 100%;
      padding: 0 0.2rem;
      .author {
        display: flex;
        align-items: center;
        color: #ccc;
        .avatar {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
      }
      .decription {
        font-size: 0.24rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .name,
      .author,
      .description {
        padding: 0.15rem 0;
      }
      .name {
        color: #fff;
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-between;
    padding: 0 0.4rem;
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #fff;
      }
      span {
        padding-top: 0.1rem;
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }
}
</style>