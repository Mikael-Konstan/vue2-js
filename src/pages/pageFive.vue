<template>
  <div class="hello">
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
</style>
