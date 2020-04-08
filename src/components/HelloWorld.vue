<template>
	<div class="box">
		<p>count: {{ this.$store.state.count }}</p>
		<p>getters count: {{ this.$store.getters.getCount }}</p>
		<p>getters name: {{ this.$store.getters.getName }}</p>
		<button @click="increment">increment</button>
		<button @click="sub">sub</button>
		<button @click="setName">setName</button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		computed: {
			count() {
				return this.$store.state.count
			},
		},
		methods: {
			increment() {
				this.$store.commit('increment', 3)
			},
			sub() {
				this.$store.commit('sub')
			},
			setName() {
				this.$store.dispatch('setName', { name: Math.random() * 100 })
			},
		},
	}
</script>
