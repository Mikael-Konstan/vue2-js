<template>
  <div class="hello">
    <h1 class="tile">pageFour</h1>  
    <HuGlobal></HuGlobal> 
    <hu-global></hu-global>
    <nameTest></nameTest>
    <Name-Test></Name-Test>
  </div>
</template>

<script>
import NameTest from './../components/nameTest'
export default {
  name: 'pageFour',
  components:{
    NameTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
