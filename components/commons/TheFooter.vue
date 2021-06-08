<template>
	<footer class="bg-gray-50" aria-labelledby="footerHeading">
		<h2 id="footerHeading" class="sr-only">Footer</h2>
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="xl:grid xl:grid-cols-3 xl:gap-16">
				<div class="space-y-8 xl:col-span-1">
					<img class="h-32 transform -translate-x-10" src="~/assets/SVG/GH_color_vertical.svg" alt="Company name">
					<p class="text-gray-500 text-base">
						Making the world a better place through constructing elegant hierarchies.
					</p>
					<div class="flex space-x-6">
						<a href="#" class="text-base-light-gray hover:text-gray-500">
							<span class="sr-only">Twitter</span>
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
							</svg>
						</a>

						<a href="#" class="text-base-light-gray hover:text-gray-500">
							<span class="sr-only">Facebook</span>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
							</svg>
						</a>

						<a href="#" class="text-base-light-gray hover:text-gray-500">
							<span class="sr-only">Youtube</span>
							<svg class="h-6 w-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
								<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
							</svg>
						</a>

						<a class="text-base-light-gray hover:text-gray-500" href="#">
							<span class="sr-only">Twitch</span>
							<svg class="h-6 w-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path fill="currentColor" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
							</svg>
						</a>

						<a class="text-base-light-gray hover:text-gray-500" href="#">
							<span class="sr-only">Discord</span>
							<svg class="h-6 w-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" />
							</svg>
						</a>

						<a href="#" class="text-base-light-gray hover:text-gray-500">
							<span class="sr-only">Instagram</span>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
				<div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Game'Her
							</h3>
							<ul class="mt-4 space-y-4">
								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										News & Articles
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Esport
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										WebTV
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Tournois
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										A propos
									</a>
								</li>
							</ul>
						</div>
						<div class="mt-12 md:mt-0">
							<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Liens utiles
							</h3>
							<ul class="mt-4 space-y-4">
								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Media kit
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Partenaires
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Connexion
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<div class="mt-12 md:mt-0">
							<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Legal
							</h3>
							<ul class="mt-4 space-y-4">
								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Politique de confidentialité
									</a>
								</li>

								<li>
									<a href="#" class="text-base text-gray-500 hover:text-gray-900">
										Mentions Légales
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 border-t border-gray-200 pt-8">
				<p class="text-base text-gray-400 xl:text-center">
					&copy; 2020 Workflow, Inc. All rights reserved.
				</p>
			</div>
		</div>
	</footer>

</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>