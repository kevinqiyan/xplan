<template>
	<el-card id="card" shadow="hover">
		<template #header>
			<div class="base-data">
				<el-tag type="info"
					><b>{{ cardData.time }}</b>
				</el-tag>
				<el-tag type="danger">{{ cardData.tag }}</el-tag>
			</div>
			<div class="title">
				<el-text truncated>{{ cardData.title }}</el-text>
			</div>
		</template>
		<img :src="cardData.img" />

		<template #footer>
			<slot name="btn"></slot>
		</template>
	</el-card>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
	cardData: {
		type: Object,
		default: () => ({}),
	},
})
</script>
<style lang="scss" scoped>
#card {
	width: 70vw;
	margin-bottom: 20px;
}
.base-data {
	margin-bottom: 10px;
	span {
		margin-right: 10px;
	}
}
.title {
	.el-text {
		font-size: 20px;
		font-weight: 600;
		&:hover {
			cursor: pointer;
			text-decoration-line: underline;
			color: rgb(9, 100, 249);
		}
	}
}
</style>
