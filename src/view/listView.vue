<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getPlaylistDetail } from "../api/index";
import listviewTop from "../components/listviewTop.vue";
import playLst from "../components/playList.vue";

const dateState = reactive({ playlist: [], flag: false });
const router = useRoute();
const store = useStore();

onMounted(async () => {
  const res = await getPlaylistDetail(router.query.id);
  dateState.playlist = res.data.playlist;
  dateState.flag = true;
  store.dispatch("setPlaylist", dateState.playlist.tracks);
});
</script>

<template>
  <listview-top
    :flag="dateState.flag"
    :playlist="dateState.playlist"
  ></listview-top>
  <play-list
    :flag="dateState.flag"
    :playlist="dateState.playlist"
  ></play-list>
</template>

<style lang="less" scoped>
.listView {
  height: 8rem;
}
</style>