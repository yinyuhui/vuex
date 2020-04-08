import Vue from 'vue'
import Vuex from './Vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		name: 'yyh',
	},

	mutations: {
		increment(state, value) {
			state.count = state.count + value
		},

		sub(state) {
			state.count--
		},

		setName(state, name) {
			state.name = name
		},
	},

	actions: {
		setName(context, payload = { name: 'yin yu hui' }) {
			setTimeout(() => {
				context.commit('setName', payload.name)
			}, 300)
		},
	},

	getters: {
		getCount(state, getters) {
			console.log(getters.getName)
			return state.count
		},
		getName() {
			return `${this.state.name} 18`
		},
	},
})

export default store
