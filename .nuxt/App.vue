<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Turbo Chan","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},{"rel":"apple-touch-icon","sizes":"57x57","href":"/apple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"/apple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"/apple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"/apple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"/apple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"/apple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"/apple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"/apple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"/apple-icon-180x180.png"},{"rel":"icon","type":"image/png","sizes":"192x192","href":"/android-icon-192x192.png"},{"rel":"icon","type":"image/png","sizes":"32x32","href":"/android-icon-32x32.png"},{"rel":"icon","type":"image/png","sizes":"96x96","href":"/android-icon-96x96.png"},{"rel":"icon","type":"image/png","sizes":"16x16","href":"/android-icon-16x16.png"},{"rel":"icon","type":"image/png","sizes":"TEST","href":"/android-icon-192x192.png"},{"rel":"manifest","href":"/manifest.json"},{"name":"msapplication-TileColor","content":"#343442"},{"name":"msapplication-TileImage","content":"/ms-icon-144x144.png"},{"name":"theme-color","content":"#343442"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-title","content":"Turbo Chan"},{"rel":"apple-touch-startup-image","href":"/android-icon-192x192.png","media":"(device-height:480px)"},{"rel":"apple-touch-startup-image","href":"/android-icon-192x192.png","media":"(device-height:568px)"},{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Roboto"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

