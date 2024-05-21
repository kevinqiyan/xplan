<template>
	<div class="w-1/2 rounded-lg border-2 border-inherit p-6 mb-8">
		<!-- <div class="h-10">{{ cardData.time }}</div> -->
		<section class="flex mb-8">
			<div
				class="min-w-80 min-h-40 bg-[url('/src/assets/1.jpg')] bg-auto bg-center bg-no-repeat"
			></div>
			<div class="flex-1 pl-10 truncate text-wrap max-h-40">
				<h1 class="mb-5"><b> Kevin 同学的杂志</b></h1>
				<p>
					kevin
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					1同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					2同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					1同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					2同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
				</p>
			</div>
		</section>
		<footer class="flex">
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
		</footer>
	</div>
	<!-- <el-card id="card" shadow="hover" class="basis-1/2">
		<template #header>
			<div>
				<el-tag type="info"
					><b>{{ cardData.time }}</b>
				</el-tag>
				<el-tag type="danger">{{ cardData.tag }}</el-tag>
			</div>
			
		</template>
		<img :src="cardData.img" />

		<template #footer>
			<el-tag type="info"
				><b>{{ cardData.time }}</b>
			</el-tag>
			<el-tag type="danger">{{ cardData.tag }}</el-tag>
			<slot name="btn"></slot>
		</template>
	</el-card> -->
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
// #card {
// 	width: 70vw;
// 	margin-bottom: 20px;
// }
// .base-data {
// 	margin-bottom: 10px;
// 	span {
// 		margin-right: 10px;
// 	}
// }
// .title {
// 	.el-text {
// 		font-size: 20px;
// 		font-weight: 600;
// 		&:hover {
// 			cursor: pointer;
// 			text-decoration-line: underline;
// 			color: rgb(9, 100, 249);
// 		}
// 	}
// }
</style>
