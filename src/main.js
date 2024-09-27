/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'





// Composables
import { createApp } from 'vue'

const app = createApp(App)
const vuetify = createVuetify ({
  
  
})

registerPlugins(app)

app.mount('#app')
app.use(vuetify)
