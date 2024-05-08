<template>
	<section>
		<baseHead></baseHead>
		<main id="main">
			<slot />
		</main>
		<baseFooterVue></baseFooterVue>
	</section>
</template>

<script setup>
import baseFooterVue from './base-footer.vue'
import baseHead from './base-head.vue'
</script>
<style lang="scss" scoped>
#main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 24px 0px;
}
</style>
