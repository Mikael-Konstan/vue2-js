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

		<p>对象监听等级</p>
		<ul class="ulStyle">
			<li>
				<p>{{ objTest.value }}</p>
				<p @click.once="changeObjValue('level1')">change {{ objTest.value }}</p>
			</li>
			<li>
				<p>{{ objTest.level2.value }}</p>
				<p @click.once="changeObjValue('level2')">change {{ objTest.level2.value }}</p>
			</li>
			<li>
				<p>{{ objTest.level2.level3.value }}</p>
				<p @click.once="changeObjValue('level3')">change {{ objTest.level2.level3.value }}</p>
			</li>
			<li>
				<p>{{ objTest.level2.level3.level4.level5.value }}</p>
				<p @click.once="changeObjValue('level5')">change {{ objTest.level2.level3.level4.level5.value }}</p>
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
				objTest: {
					value: 'level1',
					level2: {
						value: 'level2',
						level3: {
							value: 'level3',
							level4: {
								value: 'level4',
								level5: {
									value: 'level5',
								}
							}
						}
					}
				}
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
			changeObjValue (val) {
				if (val === 'level1') {
					this.objTest.value += '...test';
				}
				if (val === 'level2') {
					this.objTest.level2.value += '... test';
				}
				if (val === 'level3') {
					this.objTest.level2.level3.value += '... test';
				}
				if (val === 'level5') {
					this.objTest.level2.level3.level4.level5.value += '... test';
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
