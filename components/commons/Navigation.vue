<template>
	<header>
		<div class="relative bg-white z-50">
			<div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-8">
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<nuxt-link :to="{ name : 'index' }">
						<span class="sr-only">Game'Her</span>
						<img class="h-8 w-auto sm:h-20 transform -translate-x-2" src="~/assets/SVG/GH_color_horizontal.svg" alt="">
					</nuxt-link>
				</div>
				<div class="-mr-2 -my-2 md:hidden">
					<button type="button" @click.prevent="mobileMenu = true" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				<nav class="hidden md:flex space-x-10">
					<div class="relative bg-white" v-click-outside="hideBlogFlyoutMenu">
						<button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none outline-none" aria-expanded="false" @click.prevent="blogFlyoutMenu = !blogFlyoutMenu">
							<span>News & Articles</span>

							<svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>


						<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
							<div v-if="blogFlyoutMenu" class="absolute bg-white left-1/2 z-10 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-md sm:px-0">
								<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div class="px-5 py-5 white sm:px-8 sm:py-8">
										<div>
											<h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">
												Derniers articles
											</h3>
											<ul class="mt-4 space-y-4">
												<li class="text-base truncate">
													<nuxt-link :to="{ name : 'blog' }" class="font-medium text-gray-900 hover:text-gray-700">
														Féminisme et jeux vidéo
													</nuxt-link>
												</li>

												<li class="text-base truncate">
													<nuxt-link :to="{ name : 'blog' }" class="font-medium text-gray-900 hover:text-gray-700">
														Le speed'10 runs de BiiWiX
													</nuxt-link>
												</li>

												<li class="text-base truncate">
													<nuxt-link :to="{ name : 'blog' }" class="font-medium text-gray-900 hover:text-gray-700">
														Choisir son logiciel de streaming: OBS vs Streamlabs
													</nuxt-link>
												</li>
											</ul>
										</div>
										<div class="mt-5 text-sm">
											<nuxt-link :to="{ name : 'blog' }" class="font-medium text-base-red-darken-3"> Voir le blog <span aria-hidden="true">&rarr;</span></nuxt-link>
										</div>
									</div>
								</div>
							</div>
						</transition>
					</div>

					<nuxt-link :to="{ name : 'esport' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
						Esport
					</nuxt-link>

					<nuxt-link :to="{ name : '' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
						WebTV
					</nuxt-link>
					<nuxt-link :to="{ name : 'tournaments' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
						Tournois
					</nuxt-link>
					<nuxt-link :to="{ name : 'partners' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
						Partenaires
					</nuxt-link>
					<nuxt-link :to="{ name : 'donations' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
						Donation
					</nuxt-link>

					<div class="relative" v-click-outside="hideTeamFlyoutMenu">
						<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
						<button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none outline-none" aria-expanded="false" @click.prevent="teamFlyoutMenu = !teamFlyoutMenu">
							<span>La team</span>

							<svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>


						<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
							<div v-if="teamFlyoutMenu" class="absolute left-1/2 z-10 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-md sm:px-0">
								<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
										<nuxt-link :to="{ name : 'about' }" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<!-- Heroicon name: outline/support -->
											<svg class="flex-shrink-0 h-6 w-6 text-base-red-darken-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">
													A propos
												</p>
												<p class="mt-1 text-sm text-gray-500">
													Get all of your questions answered in our forums or contact support.
												</p>
											</div>
										</nuxt-link>

										<nuxt-link :to="{ name : 'contact' }" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<!-- Heroicon name: outline/bookmark-alt -->
											<svg class="flex-shrink-0 h-6 w-6 text-base-red-darken-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">
													Contact
												</p>
												<p class="mt-1 text-sm text-gray-500">
													Learn how to maximize our platform to get the most out of it.
												</p>
											</div>
										</nuxt-link>
									</div>
								</div>
							</div>
						</transition>
					</div>
				</nav>
				<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
					<a href="https://gameher.lmn8.fr/" target="_blank" rel="nofollow noopener noreferrer" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-base-red-darken-3">
						Boutique
					</a>
				</div>
			</div>

			<transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
				<div v-if="mobileMenu" class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div class="pt-5 pb-6 px-5">
							<div class="flex items-center justify-between">
								<div>
									<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
								</div>
								<div class="-mr-2">
									<button type="button" @click.prevent="mobileMenu = false" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span class="sr-only">Close menu</span>
										<!-- Heroicon name: outline/x -->
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
							</div>

							<div class="mt-6">
								<nav class="pt-2 pb-3 space-y-1">
									<nuxt-link :to="{ name : '' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">News & Articles</nuxt-link>

									<nuxt-link :to="{ name : 'esport' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Esport</nuxt-link>

									<nuxt-link :to="{ name : '' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">WebTV</nuxt-link>

									<nuxt-link :to="{ name : 'tournaments' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Tournois</nuxt-link>

									<nuxt-link :to="{ name : 'partners' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Partenaires</nuxt-link>

									<nuxt-link :to="{ name : 'donations' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Donations</nuxt-link>
								</nav>
							</div>
						</div>
						<div class="py-6 px-5">
							<div class="grid grid-cols-2 gap-4">

								<nuxt-link :to="{ name : 'about' }" class="text-base font-medium text-gray-900 hover:text-gray-700">
									A propos
								</nuxt-link>

								<nuxt-link :to="{ name : 'contact' }" class="text-base font-medium text-gray-900 hover:text-gray-700">
									Contact
								</nuxt-link>

							</div>
							<div class="mt-6">
								<nuxt-link :to="{ name : '' }" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-base-red-darken-3">
									Boutique
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</header>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
	data () {
		return {
			blogFlyoutMenu: false,
			teamFlyoutMenu: false,
			mobileMenu: false
		}
	},

	methods: {
		hideBlogFlyoutMenu () {
			if (this.blogFlyoutMenu) {
				this.blogFlyoutMenu = false
			}
		},

		hideTeamFlyoutMenu () {
			if (this.teamFlyoutMenu) {
				this.teamFlyoutMenu = false
			}
		}
	},

	watch: {
		'$route.name'() {
			this.mobileMenu = false
			this.teamFlyoutMenu = false
			this.blogFlyoutMenu = false
		}
	},

	directives: {
		ClickOutside
	}
}
</script>