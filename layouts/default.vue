<template>
	<div class="dark:bg-black min-h-screen">

		<base-notification />
		<!-- Header -->
		<commons-navigation />

		<!-- Main -->
		<main>
			<Nuxt />
		</main>

		<!-- Footer -->
		<commons-the-footer />
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>