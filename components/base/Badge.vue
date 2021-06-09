<template>
	<span
		class="inline-flex items-center px-4 py-3 rounded text-xs font-medium bg-gray-100 text-gray-800"
		:class="resolveColor"
	>
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: ''
		},
	},

	computed: {
		resolveColor() {
			return {
				yellow: 'bg-yellow-100 text-yellow-800',
				purple: 'bg-purple-100 text-purple-800',
				red: 'bg-red-100 text-red-800',
				indigo: 'bg-indigo-100 text-indigo-800',
				green: 'bg-green-100 text-green-800',
				'': 'bg-gray-100 text-gray-800'
			}[this.color]
		}
	}
}
</script>