import { createApp, h } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('parent', {
  setup(props, { slots }) {
    const defaultSlot = slots.default?.() ?? [];

    // Error here
    console.log(defaultSlot[1].children?.default());

    return () => h('div', defaultSlot)
  }
})

app.component('child', {
  setup(props, { slots }) {
    const defaultSlot = slots.default?.() ?? [];

    return () => h('div', defaultSlot)
  }
})

app.mount('#app')
