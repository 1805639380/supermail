<template>
  <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .nav-bar {
        display: flex;
        line-height: 24px;
        text-align: center;
        box-shadow: 0 1px 10px rgba(100,100,100,.5);
    }
    .left,
    .right {
        width: 60px;
    }
    .center {
        flex: 1;
        
    }
</style>