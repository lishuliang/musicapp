<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { Search } from "vant";
import { useFeatureX } from "../util/index";
import { searchSong } from "../api/index";
import songList from "./songList.vue";

const store = useStore();
const { history } = useFeatureX(store.state);
const { playlist } = useFeatureX(store.state.playControllor);
const songs = ref([]);

const searchText = ref("");

const search = async (value) => {
  store.dispatch("setHistory", {
    history: [...new Set([value, ...history.value])].slice(0, 10),
  });
  const result = await searchSong(value);
  songs.value = result.data.result.songs;
  searchText.value = "";
};
const delHistory = () => store.dispatch("setHistory", { history: [] });

const changeSong = (index) => {
  // console.log(playlist.value);
  store.dispatch("setPlaylist", songs.value[index]);
  // console.log(playlist.value);

  // store.dispatch("setPlaycurrentindex", {
  //   index: playlist.value.length - 1,
  // });
};
</script>

<template>
  <div class="searchview-top">
    <div class="searchview-top-nav">
      <div class="back">
        <svg @click="$router.back()" class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="right">
        <van-search
          v-model="searchText"
          :placeholder="history[0] ? history[0] : '请输入搜索内容'"
          @search="search"
        />
      </div>
    </div>
    <div class="history">
      <div class="history-left">历史</div>
      <div class="history-content">
        <div
          class="history-item"
          v-for="(item, index) in history"
          :key="index"
          @click="search(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="delete">
        <svg class="icon" aria-hidden="true" @click="delHistory">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
    </div>
    <song-list
      :playlist="songs"
      :tags="[]"
      @changeSong="changeSong"
    ></song-list>
  </div>
</template>

<style lang="less" scoped>
.searchview-top {
  width: 7.5rem;
  height: 6rem;
  padding: 0 0.25rem;
  .searchview-top-nav {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 1.2rem;
    font-size: 0.35rem;
    .back,
    .right {
      display: flex;
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .history {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .history-left {
      width: 1.2rem;
      font-size: 0.4rem;
      font-weight: 800;
    }
    .history-content {
      width: 5rem;
      display: flex;
      flex-wrap: wrap;
      .history-item {
        display: flex;
        margin: 0.05rem 0.05rem;
        padding: 0 0.1rem;
        align-items: center;
        background-color: #ccc;
        border-radius: 0.2rem;
      }
    }
    .delete {
      display: flex;
      width: 1rem;
      justify-content: center;
      align-items: stretch;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
}
</style>