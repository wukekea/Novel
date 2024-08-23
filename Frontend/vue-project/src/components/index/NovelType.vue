<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <div class="green">hello</div>
    <div class="green">world</div>
  </div>
</template>

<style scoped>
.greetings {
  text-align: center;
}

</style>
