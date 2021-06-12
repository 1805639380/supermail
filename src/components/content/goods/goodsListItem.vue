<template>
  <div class="goods-list-item">
      <img :src="goodsItem.show.img" alt="">
      <div>
          <p>{{goodsItem.title}}</p>
          price:<span class="price">{{goodsItem.price}}</span>
          <span class="collect">💛{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return null
            }
        }
    }
}
</script>

<style>
.goods-list-item {
    width: 150px;
}
.goods-list-item img {
    width: 100%;
    height: 70%;
    border-radius: 5px;
}
.goods-list-item div p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.price {
    color: salmon;
}
</style>