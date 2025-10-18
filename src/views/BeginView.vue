<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const userName = ref('')
const onSubmit = (value) => {
  console.log('submit', value)
  router.push({ name: 'Rooms' })
}
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="container">
    <h1>Draw And Guess</h1>

    <VanForm @submit="onSubmit" id="userName-form" submit-on-enter>
      <VanCellGroup inset id="input-container">
        <VanField
          v-model="userName"
          clearable
          center
          clear-trigger="always"
          label-align="center"
          input-align="center"
          name="userName"
          label="用户名"
          placeholder="用户名"
          error-message-align="center"
          :rules="[{ required: true, message: '请输入用户名', trigger: 'onSubmit' }]"
        />
      </VanCellGroup>
      <VanButton plain type="primary" native-type="submit">进入游戏</VanButton>
    </VanForm>
  </div>

  <footer class="app-footer">Galaxy Battleship Fujica &copy; {{ currentYear }}</footer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
#input-container {
  margin: 0 0 0 0;
}
#userName-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  margin: 0;
}
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  font-size: 0.9em;
  color: #666;
}
</style>
