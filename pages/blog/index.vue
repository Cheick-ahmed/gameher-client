<template>
	<div>
		<div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
			<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
				<div>
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						News & Articles
					</h2>
					<div class="mt-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
						<p class="text-xl text-gray-500">
							Get weekly articles in your inbox on how to grow your business.
						</p>
						<form class="mt-6 flex space-x-4 flex-col sm:flex-row lg:mt-0 lg:justify-end" @submit.prevent="search">
							<div class="flex-1 min-w-0">
								<label for="search" class="sr-only">Search</label>
								<div class="relative rounded-md shadow-sm">
									<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<!-- Heroicon name: solid/search -->
										<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
										</svg>
									</div>
									<input type="search" name="search" v-model="search" autocomplete="off" id="search" class="py-3 focus:ring-base-orange focus:border-base-orange block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Ex: streaming, actualités ...">
								</div>
							</div>
							<button type="submit" class="inline-flex justify-center px-3.5 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-orange">
								<!-- Heroicon name: solid/filter -->
								<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
								</svg>
								<span class="sr-only">Search</span>
							</button>
						</form>
					</div>
				</div>
				<div class="mt-12 divide-y divide-gray-200">
					<base-article v-for="article in articles" :key="article.uuid" :article="article" />

					<nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-12">
						<div class="-mt-px w-0 flex-1 flex">
							<a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
								<!-- Heroicon name: solid/arrow-narrow-left -->
								<svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
								</svg>
								Précédent
							</a>
						</div>
						<div class="hidden md:-mt-px md:flex">
							<a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								1
							</a>
							<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
							<a href="#" class="border-base-yellow-2 text-base-yellow-2 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">
								2
							</a>
							<a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								3
							</a>
							<span class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								...
							</span>
							<a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								8
							</a>
							<a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								9
							</a>
							<a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
								10
							</a>
						</div>
						<div class="-mt-px w-0 flex-1 flex justify-end">
							<a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
								Suivant
								<!-- Heroicon name: solid/arrow-narrow-right -->
								<svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</a>
						</div>
					</nav>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
import articles from '~/data/articles.json'
export default {
	data () {
		return {
			search: '',
			articles: articles
		}
	},
	computed: {
		filteredArticles() {
			return this.articles.filter((article) => {
				return article.author.name === this.search
			})
		}
	},

	methods: {
		submit() {
			console.log('search ...')
		}
	}
}
</script>