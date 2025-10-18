<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <header>
    <VanNavBar title="词库" left-text="返回" left-arrow @click-left="onClickLeft" />
  </header>
</template>

<style scoped></style>
