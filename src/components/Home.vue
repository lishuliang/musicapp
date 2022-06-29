<script setup>
import { ref } from "vue";
import topNav from './topNav.vue'

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="home">
    <top-nav></top-nav>
  </div>
</template>

<style lang='less' scoped>
</style>
