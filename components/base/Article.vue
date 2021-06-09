<template>
	<article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-start py-14">
		<dl>
			<dt class="sr-only">Published on</dt>
			<dd class="text-base leading-6 font-medium text-gray-500">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<nuxt-link :to="{ name : '' }">
							<span class="sr-only">{{ article.author.name }}</span>
							<img class="h-10 w-10 rounded-full" :src="article.author.image" :alt="article.author.image">
						</nuxt-link>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-gray-900">
							<nuxt-link :to="{ name : '' }" class="hover:underline">
								{{ article.author.name }}
							</nuxt-link>
						</p>
						<div class="flex space-x-1 text-sm text-gray-500">
							<time datetime="2020-03-10">
								{{ article.date }}
							</time>
							<span aria-hidden="true">
								&middot;
							</span>
							<span>
								4 min read
							</span>
						</div>
					</div>
				</div>
			</dd>
		</dl>
		<div class="space-y-5 xl:col-span-3">
			<div class="space-x-2">
				<base-badge v-for="tag in article.tags" :color="tag.color"> {{ tag.text }} </base-badge>
			</div>
			<div class="space-y-3">
				<h2 class="text-2xl leading-8 font-bold tracking-tight">
					<nuxt-link :to="{ name : '' }" class="text-gray-900">
						{{ article.title }}
					</nuxt-link>
				</h2>
				<div class="prose max-w-none text-gray-500">
					<p> {{ article.description }} </p>
				</div>
			</div>
			<div class="text-base leading-6 font-medium">
				<nuxt-link :to="{ name : '' }" class="text-teal-500 hover:text-teal-600" aria-label="Read &quot;Tailwind UI: Now with React + Vue support&quot;" href="/tailwind-ui-now-with-react-and-vue-support">
					Voir l'article →
				</nuxt-link>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		article: {
			required: true,
			type: Object
		}
	}
}
</script>