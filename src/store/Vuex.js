let Vue

const install = (v) => {
	Vue = v
	Vue.mixin({
		beforeCreate() {
			// 在 main.js 中 new Vue 时给根组件注入的 store
			if (this.$options && this.$options.store) {
				this.$store = this.$options.store
			} else {
				this.$store = this.$parent && this.$parent.$store
			}
		},
	})
}

class Store {
	constructor({ state, mutations = {}, actions = {}, getters = {} }) {
		this.state = state || {}
		this.mutations = mutations
		this.actions = actions
		this.getters = {}

		this.vm = new Vue({
			data: {
				state: this.state,
			},
		})

		for (let key in getters) {
			Object.defineProperty(this.getters, key, {
				get: () => {
					return getters[key].bind(this)(this.state, this.getters)
				},
			})
		}
	}

	commit(mutation, payload) {
		if (this.mutations[mutation]) {
			this.mutations[mutation](this.state, payload)
		} else {
			console.error(`未定义的${mutation}`)
		}
	}

	dispatch(action, payload) {
		if (this.actions[action]) {
			this.actions[action](this, payload)
		} else {
			console.error(`未定义的${action}`)
		}
	}
}

export default { install, Store }
