<template>
	<div>
		<div class="relative">
			<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
					<div class="absolute inset-0">
						<img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548686304-89d188a80029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="People working on laptops">
						<div class="absolute inset-0 bg-gradient-to-r from-base-yellow to-base-red-darken-3 mix-blend-multiply"></div>
					</div>
					<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
						<h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
							<span class="block text-white">Game'Her</span>
							<span class="block text-indigo-200">Reveal yourself today.</span>
						</h1>
						<p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-2xl">
							Notre objectif est de nous rapprocher de la diversité des genres et des cultures dans l'industrie du jeu vidéo.
						</p>
						<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
							<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
								<nuxt-link :to="{ name : 'index' }" v-scroll-to="'#join-us'" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-base-red-darken-3 bg-white hover:bg-white sm:px-8">
									Nous rejoindre
								</nuxt-link>
								<nuxt-link :to="{ name : 'about' }" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-base-red-darken-3 sm:px-8">
									En savoir plus
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Logo Cloud -->
		<div class="bg-gray-100">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
					Trusted by over 4 very average small businesses
				</p>
				<div class="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="https://gameher.fr/uploads/partners/lmn8_noir-5e9189665724e.png" alt="lmn8">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="~/assets/img/logo_NewGo-black.png" alt="New Go">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="https://gameher.fr/uploads/partners/e_a_noir-5e918b3086be4.png" alt="StaticKit">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
						<img class="h-12" src="~/assets/img/logo_konix-black.png" alt="KONIX">
					</div>
				</div>
			</div>
		</div>

		<!-- Alternating Feature Sections -->
		<div class="relative pt-16 pb-32 overflow-hidden" id="join-us">
			<div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
			<div class="relative">
				<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
						<div>
							<div>
								<span class="h-12 w-12 rounded-md flex items-center justify-center bg-base-red-darken-3">
									<!-- Heroicon name: outline/inbox -->
									<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
									</svg>
								</span>
							</div>
							<div class="mt-6">
								<h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
									Devenir Bénévole
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Vous souhaitez vous investir au sein de Game’Her en mettant à profit votre temps et vos compétences ?

									Nous travaillons exclusivement sur Discord, donc vous n’avez aucune contrainte physique ! Et nous essayons au maximum d’organiser des rencontres IRL entre les membres de l’association dès que nous le pouvons.
								</p>
								<div class="mt-6">
									<nuxt-link :to="{ name : '' }" class="inline-flex px-4 py-3 text-base font-medium rounded-md shadow-sm text-white bg-base-red-darken-3">
										Nous rejoindre
									</nuxt-link>
								</div>
							</div>
						</div>
						<div class="mt-8 border-t border-gray-200 pt-6">
							<blockquote>
								<div>
									<p class="text-base text-gray-500">
										&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
									</p>
								</div>
								<footer class="mt-3">
									<div class="flex items-center space-x-3">
										<div class="flex-shrink-0">
											<img class="h-6 w-6 rounded-full" src="https://gameher.fr/build/img/homepage/PHOTOGRAPHIE.png" alt="">
										</div>
										<div class="text-base font-medium text-gray-700">
											Marcia Hill
										</div>
									</div>
								</footer>
							</blockquote>
						</div>
					</div>
					<div class="mt-12 sm:mt-16 lg:mt-0">
						<div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
							<img class="w-full rounded-xl shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://gameher.fr/build/img/recrutement/PHOTOGRAPHIE.png" alt="Inbox user interface">
						</div>
					</div>
				</div>
			</div>
			<div class="mt-24">
				<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div>
								<span class="h-12 w-12 rounded-md flex items-center justify-center bg-base-light-gray">
									<!-- Heroicon name: outline/sparkles -->
									<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
									</svg>
								</span>
							</div>
							<div class="mt-6">
								<h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
									Qui sommes-nous ?
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Game'Her est une association loi 1901 créée en août 2017 et ayant pour but de développer un environnement sain pour tous les joueurs souhaitant s’investir dans le gaming, en leur fournissant les outils nécessaires pour qu’ils puissent s’ épanouir dans ce milieu.
									Nous souhaitons également les aider à évoluer dans les domaines du streaming et/ou de l’esport. Notre but étant de s’ouvrir à la mixité et à la diversité dans ces domaines tout en démocratisant la place de la femme dans l’univers du jeu vidéo.
								</p>
								<div class="mt-6">
									<nuxt-link :to=" { name : 'about' } " class="inline-flex px-4 py-3 text-base font-medium rounded-md shadow-sm text-white bg-base-light-gray">
										En savoir plus
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
							<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://gameher.fr/build/img/homepage/PHOTOGRAPHIE.png" alt="Customer profile user interface">
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Gradient Feature Section -->
		<div class="bg-gradient-to-r from-base-light-gray to-base-red-darken-3">
			<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
				<h2 class="text-3xl font-extrabold text-white tracking-tight uppercase">
					Ce que nous faisons
				</h2>
				<p class="mt-4 max-w-3xl text-lg text-purple-200">
					Afin de mener à bien notre mission, nous avons une équipe de bénévoles qui s'investit au quotidien.
				</p>
				<div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_ESPORT.png" alt="Pôle Esport">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Esport</h3>
							<p class="mt-2 text-base text-purple-200">
								Nous encadrons trois équipes 100% mixtes sur les jeux League of Legends et Hearthstone. Nous véhiculons notre message de mixité au travers de notre présence en LAN.
							</p>
						</div>
					</div>

					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_COMMUCATION.png" alt="PICTO COMMUCATION">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Communication</h3>
							<p class="mt-2 text-base text-purple-200">
								Développement de la stratégie de communication dans l'optique de développer la visibilité de l'association sur les réseaux sociaux, au quotidien lors de nos événements ou de ceux auxquels nous participons.
							</p>
						</div>
					</div>

					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_TWITCH.png" alt="PICTO_TWITCH">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Streaming</h3>
							<p class="mt-2 text-base text-purple-200">
								Via la plateforme Twitch, nos streamers et casters proposent des lives sur divers jeux afin de divertir notre communauté et de créer de l'interaction avec l'ensemble de la communauté.
							</p>
						</div>
					</div>

					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_TOURNOIS.png" alt="PICTO_TOURNOIS">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Evénementiel</h3>
							<p class="mt-2 text-base text-purple-200">
								Mise en place de tournois et d'événements au nom de l'association afin de permettre aux joueurs et joueuses d'appréhender le milieu et de s'insérer dans l'esport au travers d'un environnement sain.
							</p>
						</div>
					</div>

					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_GRAPHISME.png" alt="PICTO_GRAPHISME">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Graphisme</h3>
							<p class="mt-2 text-base text-purple-200">
								Nos graphistes produisent tous les visuels nécessaires à Game'Her pour sa communication, sa présence en ligne, ses événements, ses relations partenariales, ...
							</p>
						</div>
					</div>

					<div>
						<div>
							<span class="flex items-center justify-center h-12 w-12">
								<img src="https://gameher.fr/build/img/recrutement/PICTO_PRESSE.png" alt="PICTO_PRESSE">
							</span>
						</div>
						<div class="mt-6">
							<h3 class="text-lg font-medium text-white">Pôle Presse</h3>
							<p class="mt-2 text-base text-purple-200">
								Nos rédacteurs et éditeurs réalisent des articles de presse suivant une ligne éditoriale sur les thèmes de l'esport, du jeu vidéo et de la mixité dans ces secteurs.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Stats section -->
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
						<span class="text-base-yellow uppercase">Quelques chiffres</span>
					</h2>
					<p class="mt-3 text-3xl font-extrabold text-white">Get actionable data that will help grow your business</p>
					<p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
					<div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
						<p>
							<span class="block text-2xl font-bold text-white">2017</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Création</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-white">55+</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Membres</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-white">2</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Équipes</span></span>
						</p>

						<p>
							<span class="block text-2xl font-bold text-white">6+</span>
							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Compétitions</span></span>
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Newsletter Section -->
		<div class="bg-white">
			<div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
				<div class="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
					<div class="xl:w-0 xl:flex-1">
						<h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
							Restez informés
						</h2>
						<p class="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
							Inscrivez-vous à notre newsletter pour rester informé
						</p>
					</div>
					<div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
						<form class="sm:flex" @submit.prevent="submit">
							<label for="emailAddress" class="sr-only">Email address</label>
							<input id="emailAddress" v-model="email" name="emailAddress" type="email" autocomplete="off" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" placeholder="Entrez votre email">
							<button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
								Valider
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		head () {
			return {
				title: 'Game\'her',
				titleTemplate: ''
			}
		},
		data () {
			return {
				email : ''
			}
		},
		methods: {
			...mapActions({
				notify: 'notification/notify'
			}),

			submit() {
				this.notify({
					notif: 'Merci! Votre demande d\'adhésion a été prise en compte 👍',
					time: '1500'
				})

				this.email = ''
			}
		}
	}
</script>