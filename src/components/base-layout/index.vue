<template>
	<section>
		<baseHead @openPersonInfo='openPersonInfo'></baseHead>
		<main id="main">
			<slot />
		</main>
		<baseFooterVue></baseFooterVue>
	</section>
	<personInfo :isOpen='isOpen' @closed='openPersonInfo' />
</template>

<script setup>
import baseFooterVue from './base-footer.vue'
import baseHead from './base-head.vue'
import personInfo from '../personInfo/index.vue'
import { ref } from 'vue'
const isOpen = ref(false)
const openPersonInfo = (value) => {
	isOpen.value = value
}



</script>
<style lang="scss" scoped>
#main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 24px 0px;
}
</style>
