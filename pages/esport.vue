<template>
	<div>
		<div class="max-w-7xl mx-auto text-5xl py-16 ">
			<div class="">
				<div>
					<base-header-section description-color="text-base-red-darken-3">
					<template #title>
						Nos équipes Esport
					</template>
					<template #description>
						LES JOUEURS ET LE PERSONNEL ENCADRANT
					</template>
				</base-header-section>
			</div>
		</div>
	</div>
	<div class="bg-gray-900">
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-12">
				<div class="lg:flex lg:justify-between">
					<div class="max-w-xl">
						<h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">League of Legends</h2>
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

				<base-lolTeam-card v-for="(lolTeam, index) in lolTeams" :key="index" :lolTeam="lolTeam" />
				<!-- More people... -->
			</div>
		</div>
	</div>
</div>
<div class="bg-gray-900">
	<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-12">
			<div class="lg:flex lg:justify-between">
				<div class="max-w-xl">
					<h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Hearthstone</h2>
				</div>
			</div>
			<div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">

				<base-hsTeam-card v-for="(hsTeam, index) in hsTeams" :key="index" :hsTeam="hsTeam" />
				<!-- More people... -->
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import hsTeams from '~/data/hsTeams.json'
import lolTeams from '~/data/lolTeam.json'


export default {
	head () {
		return {
			title: 'Esport'
		}
	},
	data () {
		return {
			badges:[
			{text: 'Noctua', color:'yellow'},
			{text: 'Nebu', color:'red'},
			],
			hsTeams: hsTeams,
			lolTeams: lolTeams
		}
	}
}
</script>