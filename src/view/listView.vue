<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPlaylistDetail } from "../api/index";
import listviewTop from "../components/listviewTop.vue";
import playLst from "../components/playList.vue";

let dateState = reactive({ detail: [], flag: false });
const router = useRoute();

onMounted(async () => {
  const res = await getPlaylistDetail(router.query.id);
  dateState.detail = res.data;
  dateState.flag = true;
});
</script>

<template>
  <!-- <div v-if="dateState.flag"> -->
    <listview-top :flag="dateState.flag" :playlist="dateState.detail.playlist"></listview-top>
    <play-list :flag="dateState.flag" :playlist="dateState.detail.playlist"></play-list>
  <!-- </div> -->
</template>

<style lang="less" scoped>
.listView {
  height: 8rem;
}
</style>