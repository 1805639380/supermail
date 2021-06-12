<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem.vue'

export default {
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.goods {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>