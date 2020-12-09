<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h1 class="tile">pageFive</h1>
    <p>utcTime  {{ utcTime }}</p>
    <p>localTime  {{ localTime }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'pageFive',
  data() {
    return {
      utcTime: '2020-12-09 23:40:40',
    }
  },
  computed: {
    localTime: function () {
      return this.utcToLocalTime(this.utcTime, 'YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted() {

  },
  methods: {
    // utc时间转换为本地时间
    utcToLocalTime (utc, formatTime) {
        if (utc) {
            return moment.utc(utc)
                .local()
                .format(formatTime || 'DD/MM/YYYY HH:mm:ss')
        } else {
            return '--'
        }
    }
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
