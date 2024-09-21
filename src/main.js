import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

// Create the store
const store = createStore({
    state() {
        return {
            counter: 0
        }
    }
})

// Create the app instance
const app = createApp(App)

// Use Vuex store in the app
app.use(store)

// Mount the app to the DOM
app.mount('#app')
