<template>
	<div class="w-full bg flex items-center bg-clip-text justify-center flex-col">
		<span class="name">kevin's blog</span>
		<h3>不断学习</h3>
		<div class="menu">
			<el-icon @click="openPersonInfo">
				<Menu />
			</el-icon>
		</div>
	</div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['openPersonInfo'])
const openPersonInfo = () => {
	emit('openPersonInfo', true)
}
</script>
<style lang="scss" scoped>
.bg {

	background: linear-gradient(to bottom right, #2177a7, #5fb7ac);
	padding: 18px 40px;
	position: relative;

	.name {
		height: 40px;
		font-size: 30px;
		color: white;
		font-family: 'Courier New', Courier, monospace;
	}

	h3 {
		margin: 20px 0px;
		color: #eaeab3;
		font-size: 20px;
		font-weight: 400;
		text-shadow: 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424;
	}

	.menu {
		position: absolute;
		top: 20px;
		left: 20px;

		&:hover {
			cursor: pointer;
			color: white;
		}
	}
}
</style>
