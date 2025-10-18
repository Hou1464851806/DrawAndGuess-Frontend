<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 房间列表
const rooms = ref([])
const selectedRoom = ref(null)

// 获取房间列表
const fetchRooms = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  rooms.value = [
    { id: 'r001', name: '快乐玩耍房', currentPlayers: 2, maxPlayers: 4, status: 'waiting' },
    { id: 'r002', name: '大佬勿扰', currentPlayers: 4, maxPlayers: 4, status: 'in-game' },
    { id: 'r003', name: '私密小聚', currentPlayers: 1, maxPlayers: 3, status: 'waiting' },
    { id: 'r004', name: '新手练习', currentPlayers: 3, maxPlayers: 5, status: 'waiting' },
  ]
}

// 选择房间
const selectRoom = (room) => {
  // 再次点击被选中的房间则取消选中
  if (selectedRoom.value && selectedRoom.value.id === room.id) {
    selectedRoom.value = null
    return
  }

  selectedRoom.value = room
}

const currentPage = ref(1)

// 导航返回
const onClickLeft = () => {
  //console.log(history.state['back'])
  if (history.state['back'] !== null) {
    history.back()
  } else {
    router.push({ name: 'Begin' })
  }
}

// 生命周期
onMounted(() => {
  fetchRooms()
})
</script>

<template>
  <header>
    <VanNavBar title="房间" left-text="返回" left-arrow @click-left="onClickLeft" />
  </header>
  <main class="main-container">
    <h4>用户信息</h4>
    <VanCellGroup>
      <template #title>
        <span class="rooms-title">房间列表</span>
      </template>
      <VanCell
        v-for="room in rooms"
        :key="room.id"
        :title="room.name"
        clickable
        @click="selectRoom(room)"
        :class="{ 'selected-room': selectedRoom && selectedRoom.id === room.id }"
      >
        <template #value>
          <span class="room-value">{{ room.currentPlayers }}/{{ room.maxPlayers }} 人</span>
        </template>
        <template #label>
          <VanTag :type="room.status === 'waiting' ? 'success' : 'warning'">
            {{ room.status === 'waiting' ? '准备中' : '游戏中' }}
          </VanTag>
        </template>
      </VanCell>
    </VanCellGroup>
  </main>
  <footer>
    <div class="footer-button">
      <VanButton plain type="primary" to="/library"> 词库 </VanButton>
      <VanPagination
        v-model="currentPage"
        :items-per-page="6"
        :show-page-size="3"
        :total-items="25"
        force-ellipses
      />
      <div class="room-button">
        <VanButton plain type="primary"> 新建 </VanButton>
        <VanButton plain type="primary"> 加入 </VanButton>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#function-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rooms-col {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f8fa;
}
.main-container {
  display: flex;
  flex-direction: column;
}
.footer-button {
  display: flex;
  justify-content: space-between;
}
.room-button {
  display: flex;
  justify-content: end;
}
.selected-room {
  background-color: var(--van-primary-color);
}
.rooms-title {
  color: var(--van-cell-text-color);
}
.room-value {
  color: var(--van-cell-text-color);
}
</style>
