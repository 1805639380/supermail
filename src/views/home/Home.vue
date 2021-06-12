<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
          <h3>购物街</h3>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home.js'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res
    })
  }
}
</script>

<style>
.home-nav {
  background-color: rgb(245, 107, 130);
  color: #fff;
}
</style>