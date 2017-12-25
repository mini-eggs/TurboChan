import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2c972a65 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _120cfba5 = () => import('../pages/search.vue' /* webpackChunkName: "pages/search" */).then(m => m.default || m)
const _54c6bbf3 = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _0cdf4fa0 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _37a15be7 = () => import('../pages/_board/index.vue' /* webpackChunkName: "pages/_board/index" */).then(m => m.default || m)
const _ab486042 = () => import('../pages/_board/thread/_thread.vue' /* webpackChunkName: "pages/_board/thread/_thread" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _2c972a65,
			name: "index"
		},
		{
			path: "/search",
			component: _120cfba5,
			name: "search"
		},
		{
			path: "/contact",
			component: _54c6bbf3,
			name: "contact"
		},
		{
			path: "/about",
			component: _0cdf4fa0,
			name: "about"
		},
		{
			path: "/:board",
			component: _37a15be7,
			name: "board"
		},
		{
			path: "/:board/thread/:thread?",
			component: _ab486042,
			name: "board-thread-thread"
		}
    ],
    fallback: false
  })
}
