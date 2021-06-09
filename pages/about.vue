<template>
	<div class="space-y-24 py-16">
		<div class="bg-white overflow-hidden">
			<div class="relative max-w-7xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8">
				<div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
				<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
					<div>
						<h2 class="text-base text-base-red-darken-3 font-extrabold tracking-wide uppercase">A propos</h2>
						<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Qui sommes-nous</h3>
					</div>
				</div>
				<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
					<div class="relative lg:row-start-1 lg:col-start-2">
						<svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
							<defs>
								<pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
						</svg>
						<div class="relative text-base mx-auto max-w-prose lg:max-w-none lg:mt-32">
							<figure>
								<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
									<img class="rounded-lg shadow-lg object-cover object-center" src="https://gameher.fr/build/img/donations/TirelireTaillesite.png" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
								</div>
							</figure>
						</div>
					</div>
					<div class="mt-8 lg:mt-0">
						<div class="text-base max-w-prose mx-auto lg:max-w-none">
							<p class="text-lg text-gray-500">
								Game'Her est une association créée en août 2017 ayant pour but de développer un environnement sain pour tous les joueurs souhaitant s’investir dans le gaming, en leur fournissant les outils nécessaires pour qu’ils puissent s’épanouir dans ce milieu.
							</p>
						</div>
						<div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
							<p>
								Nous voulons promouvoir la mixité, que ce soit dans la pratique professionnelle du jeu vidéo (esport) ou casual et dans sa transmission. Il est essentiel, pour nous, de valoriser la mixité en toutes circonstances et non la supériorité d'un genre sur un autre. Nous pensons que s'il y avait plus de femmes présentes dans cet environnement, cela aiderait à créer des vocations pour un public moins informé.
							</p>
							<p>
								Nous souhaitons aussi créer une zone de confort et favoriser l'insertion dans le monde du jeu vidéo. En effet, de nombreuses personnes sont victimes de harcèlement moral et/ou sexuel au travers du jeu vidéo, et certaines ne s'aventurent pas dans cet environnement de peur d'être jugées ou critiquées à cause de leur genre. Par conséquent, nous souhaitons amener un dialogue et améliorer l'image des joueuses en dénonçant les préjugés et en changeant les mentalités dominantes.
							</p>
							<p>
								Chez Game'Her, nous aspirons à offrir des perspectives d'avenir à la diversité dans le monde du jeu vidéo. Nous mettons non seulement en valeur les femmes, mais chacun individuellement. C'est ainsi que nous entendons soutenir ceux qui cherchent à défendre ces valeurs. La tolérance, la bonne entente et le travail sur soi sont l'affaire de tous, au quotidien. Ce sont les principes avec lesquels nous souhaitons participer pleinement à travers des actions de communication, des événements et plus encore.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-900">
			<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div class="space-y-12">
					<div class="lg:flex lg:justify-between">
						<div class="max-w-xl">
							<h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Notre equipe</h2>
							<p class="mt-5 text-xl text-gray-400">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
						</div>
						<div class="mt-10 w-full max-w-md flex justify-end items-center space-x-4">
							<base-badge
								v-for="(badge, index) in badges"
								:color="badge.color"
								:key="index"
								:text="badge.text"
							>
								{{ badge.text }}
							</base-badge>
						</div>
					</div>
					<div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">

						<base-team-member-card v-for="(member, index) in members" :key="index" :member="member" />
						<!-- More people... -->
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
</template>

<script>
import members from '~/data/members.json'

export default {
	data () {
		return {
			badges:[
				{text: 'Bureau', color:'yellow'},
				{text: 'Administration', color:'red'},
				{text: 'Membres', color: ''},
				{text: 'Esport', color: 'indigo'}
			],
			members: members
		}
	}
}
</script>