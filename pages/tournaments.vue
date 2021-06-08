<template>
	<div>
		<div class="text-center pt-10 pb-16">
			<h2 class="text-base font-extrabold text-base-red-darken-3 tracking-wide uppercase"></h2>
			<p class="mt-1 text-4xl font-extrabold text-base-light-gray sm:text-5xl sm:tracking-tight lg:text-6xl">
				Nos tournois
			</p>
			<p class="max-w-lg mt-5 mx-auto text-xl text-gray-500">Découvrez tous nos tournois mettant en avant la mixité dans l'esport</p>
		</div>

		<div class="relative bg-base-light-gray">
			<div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
				<div class="h-full w-full xl:grid xl:grid-cols-2">
					<div class="h-full xl:relative xl:col-start-2">
						<img class="h-full w-full object-cover opacity-5 xl:absolute xl:inset-0" src="~/assets/SVG/GH_white_vertical.svg" alt="People working on laptops">
						<div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-base-light-gray xl:inset-y-0 xl:left-0 xl:h-full xl:w-28 xl:bg-gradient-to-r"></div>
					</div>
				</div>
			</div>
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
				<div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
					<h2 class="text-sm font-semibold tracking-wide uppercase">
						<span class="text-base-orange uppercase">Game'her league</span>
					</h2>
					<p class="mt-3 text-3xl font-extrabold text-white">Découvrez le premier tournoi mettant en avant la mixité dans l'esport, la Game'Her League.</p>
					<div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
						<p>
							<span class="block text-2xl font-bold text-base-orange">210</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Joueurs</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-base-orange">52+</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Equipes</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-base-orange">59+</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Match disputés</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-base-orange">13+</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Nombres de qualifiers</span></span>
						</p>
					</div>
					<div class="mt-16 transform -translate-x-4 lg:mt-8 lg:-translate-x-10 lg:translate-y-8">
						<img src="https://gameher.fr/build/img/tournaments/podium.png">
					</div>
				</div>
			</div>
		</div>
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