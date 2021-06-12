<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null,
           
        }
    },
    props: {
         probeType: {
                type:Number,
                default: 0
            },
         pullUpLoad: {
             type: Boolean,
             default: false
         }   
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM: true,
            click: true,
            probeType: this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',position => {
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',() => {
            this.$emit('loadData')
            this.scroll.finishPullUp()
            this.scroll.refresh()
        })
    },
    methods: {
        scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x,y,time)
        }
    },
}
</script>

<style>

</style>