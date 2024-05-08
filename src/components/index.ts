import baseLayout from './base-layout'
import baseCard from './base-card/index.vue'

export default {
    install(app) {
        app.component('baseLayout', baseLayout)
        app.component('baseCard',baseCard)
        
    }
}
