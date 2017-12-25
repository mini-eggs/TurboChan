<template>
  <section class="header-container">
    <div class="header-shadow">
      <header>
        <transition name="up-and-out">
          <nuxt-link to="/" v-if="displayBrand" class="brand">
            <img src="../assets/logo_white.png" />
            <span>TurboChan</span>
          </nuxt-link>
        </transition>
        <nav>
          <nuxt-link to="/">
            <img src="../assets/ic_home_white_24px.svg"/>
          </nuxt-link>
          <nuxt-link to="/search">
            <img src="../assets/ic_search_white_24px.svg"/>
          </nuxt-link>
          <nuxt-link to="/contact">
            <img src="../assets/ic_mail_white_24px.svg"/>
          </nuxt-link>
          <nuxt-link to="/about">
            <img src="../assets/ic_settings_white_24px.svg"/>
          </nuxt-link>
        </nav>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({ displayBrand: true, posY: 0 }),

  mounted() {
    window.onscroll = this.handleScroll;
  },

  methods: {
    handleScroll() {
      const posY = window.pageYOffset || document.documentElement.scrollTop;
      const diff = Math.abs(posY - this.posY);
      this.displayBrand = !(posY > 50);
      // if (diff > 25) this.displayBrand = posY < this.posY;
      this.posY = posY;
    }
  }
};
</script>

<style>
section.header-container {
  min-height: 116.72px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-shadow {
  background-color: #343442;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
}

header {
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

header a {
  color: white;
  text-decoration: none;
}

header img {
  max-width: 30px;
  width: 100%;
}

header .brand {
  padding: 0 5px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  margin-right: calc(100% / 8 - 15px);
  margin-left: calc(100% / 8 - 15px);
}

header .brand img {
  margin-right: 30px;
}

header nav {
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}

header nav a {
  text-align: center;
  width: 25%;
  display: block;
}
</style>

<style>
.up-and-out-enter-active,
.up-and-out-leave-active {
  transition-duration: 250ms;
}

.up-and-out-enter,
.up-and-out-leave-to {
  margin-top: -56.72px;
}
</style>
