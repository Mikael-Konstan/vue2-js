<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
