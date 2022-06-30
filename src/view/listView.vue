<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPlaylistDetail } from "../api/index";
import ListviewTop from "../components/listviewTop.vue";

let dateState = reactive({ detail: [], flag: false });
const router = useRoute();

onMounted(async () => {
  const res = await getPlaylistDetail(router.query.id);
  dateState.detail = res.data;
  dateState.flag = true;
});
</script>

<template>
  <listview-top
    :flag="dateState.flag"
    :playlist="dateState.detail.playlist"
  ></listview-top>
</template>

<style lang="less" scoped>
.listView {
  height: 8rem;
}
</style>