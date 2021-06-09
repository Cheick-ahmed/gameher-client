<template>
	<div class="fixed z-50 w-full flex top-0 items-end justify-center px-4 py-6 pointer-events-none sm:items-center sm:justify-center px-4 sm:px-6">
		<transition enter-active-class="transform ease-in-out duration-500 transition" enter-class="-translate-y-24" leave-active-class="transform transition ease-in-out duration-500" leave-class="translate-y-24" leave-to-class="-translate-y-24">
			<div class="max-w-md w-full bg-indigo-700 shadow-lg rounded-lg pointer-events-auto ring-2 ring-white overflow-hidden text-white" v-if="notification.notif">
				<div class="p-4">
					<div class="flex items-center">
						<div class="w-0 flex-1 flex justify-between">
							<p class="w-0 flex-1 text-sm font-medium">
								{{ notification.notif }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>

</template>

<script>
import { mapGetters} from 'vuex'
export default {
	computed : {
		...mapGetters ({
			notification : 'notification/notif'
		})
	}
}
</script>