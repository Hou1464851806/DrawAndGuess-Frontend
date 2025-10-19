//import './assets/main.css'
// 导入样式
import 'vant/lib/index.css'

// 导入依赖库
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@vant/touch-emulator'

// 导入组件
import {
  Button,
  Cell,
  CellGroup,
  Col,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  NavBar,
  Pagination,
  Popup,
  Row,
  Stepper,
  Tag,
} from 'vant'

const app = createApp(App)

// 使用依赖库
app.use(router)

// 注册组件
app.use(Col)
app.use(Row)
app.use(Field)
app.use(CellGroup)
app.use(Cell)
app.use(Icon)
app.use(Button)
app.use(NavBar)
app.use(Form)
app.use(Grid)
app.use(GridItem)
app.use(Pagination)
app.use(Tag)
app.use(Popup)
app.use(Stepper)

app.mount('#app')
