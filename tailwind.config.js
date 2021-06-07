module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
	],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'base-light-gray': '#191a1b',
				'base-red-darken-3' : '#c62828',
				'base-yellow': '#fbf3ab'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
