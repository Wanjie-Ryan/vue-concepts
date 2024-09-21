import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

// Create the store, the store is the equivalent of the data, but now globally
const store = createStore({
    state() {
        return {
            counter: 5
        }
    },
    // mutations is the same as method which is utilized in components for writing logic, but now for global

    // passing data to a mutation via payloads
    //mutations are syncrhonous
    mutations: {

        increment(state, payload) {
            // state.counter++
            state.counter = state.counter + payload
        }

    },
    getters: {
        getCounter(state) {
            return state.counter
        }
    }
})

// Create the app instance
const app = createApp(App)

// Use Vuex store in the app
app.use(store)

// Mount the app to the DOM
app.mount('#app')
