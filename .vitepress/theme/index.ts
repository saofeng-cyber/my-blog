// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import AsideBefore from './layout/AsideBefore.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // "aside-outline-before": () => h(AsideBefore),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
