<template>
	<div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
			<slot name="title" />
		</h1>
		<p class="mt-6 text-xl text-warm-gray-500 max-w-3xl" v-if="hasDescriptionSlot">
			<slot name="description" />
		</p>
	</div>
</template>

<script>
export default {
	methods: {
		hasDescriptionSlot() {
			return !! this.slots.description
		}
	}
}
</script>