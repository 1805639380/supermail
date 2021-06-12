<template>
  <div id="app">
    <router-view></router-view>
    <main-tar-bar></main-tar-bar>
  </div>

</template>

<style>
@import url('/src/assets/css/base.css');
body {
  margin: 0;
}
</style>

<script>
import MainTarBar from 'components/content/maintarbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTarBar
  }
}
</script>
