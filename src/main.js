import { createApp } from 'vue'
import App from './App.vue'
import Parse from 'parse';
Parse.initialize('test', 'test', 'test');
Parse.serverURL = 'http://localhost:8378/1'

const app = createApp(App)
app.config.globalProperties.$Parse = Parse;
app.mount('#app')
