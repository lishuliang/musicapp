<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <span>{{ msg }}</span>
  <div id="test">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-bofang"></use>
    </svg>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
#test {
  width: 3.75rem;
  height: 3.75rem;
  background: #42b983;
}
</style>
