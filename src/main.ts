import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import globalRegister from './global'

const app = createApp(App)

// globalRegister(app)

app.use(store).use(router).use(globalRegister)
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
