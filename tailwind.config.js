  const colors = require('tailwindcss/colors')

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
  				'base-light-gray': '#051623',
  				'base-red-darken-3' : '#b93c4e',
  				'base-yellow': '#fbf3ab',
  				'base-yellow-2': '#e29337',
  				'warm-gray': colors.warmGray,
  				teal: colors.teal
  			}
  		},
  	},
  	variants: {
  		extend: {},
  	},
  	plugins: [
  		require('@tailwindcss/forms'),
  	],
  }
