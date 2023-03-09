<template>
	<footer class="mt-20 w-full bg-white" aria-labelledby="footer-heading">
		<div class="mx-auto flex max-w-7xl items-center justify-center py-12 px-6">
			<div class="mt-0">
				<p class="text-center text-xs leading-5 text-gray-900">
					Copyright &copy; {{ actualYear }} gifty.land. All rights reserved. We
					are part of the Amazon Affiliate program. Made with ❤️ in Hungary.
				</p>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
const actualYear = new Date().getFullYear()
</script>
