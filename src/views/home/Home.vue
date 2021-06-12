<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
          <h3>购物街</h3>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" @loadData="loadData" :pull-up-load="true">
        <home-swiper :banners="banners.list"></home-swiper>
        <home-recommend-view :recommends="recommends.list"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isBackTopShow" class="backTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRemmendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop':{page: 0, list: []},
        'new':{page: 0, list: []},
        'sell':{page: 0, list: []}
      },
      currentType: 'pop',
      isBackTopShow: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break    

      }
    },
    backClick(scroll) {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      this.isBackTopShow = -position.y > 1000
    },
    

    /**
     * 网络请求
     */
      getHomeMultidata() {
          getHomeMultidata().then(res => {
          this.banners = res.data.banner,
          this.recommends = res.data.recommend
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    loadData() {
      this.getHomeGoods(this.currentType)
    },
  },
}
</script>

<style scoped>
#home {
  padding-bottom: 49px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: rgb(245, 107, 130);
  color: #fff;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 60px;
}
.content {
  position: absolute;
  top: 55px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.backTop {
  width: 50px;
  position: fixed;
  right: 0;
  bottom: 49px;
  z-index: 9;
}
</style>