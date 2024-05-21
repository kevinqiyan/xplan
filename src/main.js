import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './index.css'

import globalComponents from './components/index.ts'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(globalComponents)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
