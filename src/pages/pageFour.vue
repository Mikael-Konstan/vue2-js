<template>
  <div class="hello">
    <h1 class="tile">pageFour</h1>
    <dl class="dlStyle">
      <dt>
        组件名书写格式
      </dt>
      <dd>
        <compGlobalNme>
          <p slot="title1">{{ tlt1 }}</p>
        </compGlobalNme>
      </dd>
      <dd>
        <nameTest>
          <p slot="title1">{{ tlt2 }}</p>
        </nameTest>
      </dd>
      <dd>
          <Name-Test>
            <p slot="title1">{{ tlt3 }}</p>
          </Name-Test>
      </dd>
    </dl>
  </div>
</template>

<script>
import NameTest from './../components/nameTest'
export default {
  name: 'pageFour',
  data() {
    return {
      tlt1: "此为全局组件, 用组件name属性书写组件标签名 compGlobalNme",
      tlt2: "此为局部组件, 组件标签名采用驼峰格式 nameTest",
      tlt3: "此为局部组件, 组件标签名采用'-'隔开 Name-Test",
    }
  },
  components:{
    NameTest
  }
}
</script>

<!-- Add "scoped" attribute to ddmit CSS to this component only -->
<style scoped lang="scss">
</style>
