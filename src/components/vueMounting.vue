<template>
  <div>
    <div :class="{'is_fixed' : isFixed}" ref="is_fixed">11111</div>
    <div ref='boxFixed'>触发吸顶效果位置</div>
  </div>
</template>
<script>
export default {
  name: "Mounting", // 吸顶
  data () {
    return {
      isFixed: false,
      offsetTop: 0,
    }
  },
  props: ['scrollDom'],
  mounted () {
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.scrollDom.addEventListener('scroll', this.initHeight);
      this.$refs.is_fixed.style.top = this.scrollDom.offsetTop + 'px';
      this.offsetTop = this.$refs.boxFixed.offsetTop - this.scrollDom.offsetTop;
    })
  },
  destroyed () {
    if (this.scrollDom) {
      this.scrollDom.removeEventListener('scroll', this.initHeight)
    }
  },
  methods: {
    initHeight () {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || this.scrollDom.scrollTop
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    }
  }
}
</script>
<style lang="scss" scoped>
.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>