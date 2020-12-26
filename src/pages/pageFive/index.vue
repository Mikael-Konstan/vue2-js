<template>
  <div class="hello">
    <h1 class="tile">pageFive</h1>
    <ul class="ulStyle">
      <li>
        <p>now</p>
        <p>{{ now }}</p>
      </li>
      <li>
        <p>now => utcTime</p>
        <p>{{ utcTime }}</p>
      </li>
      <li>
        <p>utcTime => localTime</p>
        <p>{{ localTime }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'pageFive',
  data () {
    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      utcTime: this.timeToUtc({
        time: this.now,
        formatTime: 'YYYY-MM-DD HH:mm:ss',
      }),
    }
  },
  computed: {
    localTime: function () {
      return this.utcToLocalTime({
        utc: this.utcTime,
        formatTime: 'YYYY-MM-DD HH:mm:ss',
      })
    }
  },
  methods: {
    //time转换为utc time
    timeToUtc ({ time, formatTime }) {
      let utcSeconds = time ? Date.UTC(time) : Date.UTC(new Date());
      return moment().utc(utcSeconds).format(formatTime || 'YYYY-MM-DD HH:mm:ss')
    },
    // utc time转换为local time
    utcToLocalTime ({ utc, formatTime }) {
      let utcDate = utc ? utc : new Date();
      return moment.utc(utcDate)
        .local()
        .format(formatTime || 'DD/MM/YYYY HH:mm:ss')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
