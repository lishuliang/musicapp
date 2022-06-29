<script setup>
import { Swipe, SwipeItem } from "vant";
import { onMounted, ref, reactive } from "vue";
import { getBanners } from "../api/index";

let dataState = reactive({
  banners: [],
});

onMounted(async () => {
  const result = await getBanners();
  dataState.banners = result.data.banners;
});

</script>

<template>
  <div class="swipe-container">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="140"
      lazy-render
    >
      <van-swipe-item v-for="(image, index) in dataState.banners" :key="index">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.swipe-container {
  width: 7.1rem;
  height: 2.8rem;
  margin: 0 auto;
  border-radius: 0.1rem;
}
img {
  width: 100%;
}
</style>
