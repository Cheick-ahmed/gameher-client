let defaults = {
	time : 3000,
	delay : 0,
	notif : '',
	type : null
}

export const state = () => ({
	notification : {
		notif : null,
		type : null
	}
})

export const getters = {
	notif (state) {
		return state.notification
	},
}

export const mutations = {
	SET_NOTIF (state, payload) {
		state.notification.notif = payload.notif
		state.notification.type = payload.type
	},

}

export const actions = {
	notify ({ commit }, options) {
		options = { ...defaults, ...options }

		setTimeout(() => {
			commit('SET_NOTIF', {
				notif : options.notif,
				type : options.type
			})

			setTimeout(() => {
				commit('SET_NOTIF', {
					notification : null,
				})
			},options.time)

		},options.delay)
	}
}
