<template>
	<div class="rounded-lg border-2 border-inherit p-6 mb-8 hover:shadow-lg cursor-pointer min-w-96">
		<section class="flex mb-6">
			<div class="min-w-60 min-h-40 bg-[url('/src/assets/1.jpg')] bg-auto bg-center bg-no-repeat"></div>
			<div class="pl-10  max-h-40 overflow-hidden">
				<h1 class="mb-5 truncate"><b> Kevin 同学的杂志</b></h1>
				<p>
					kevin
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
					kevin
					kevin
					kevinkevinkevinkevin
					kevinkevin
					同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢同学进行测试看看这个文件是什么呢，为什么现在的人都要进行测试看看呢你说呢
				</p>
			</div>
		</section>
		<footer class="flex flex-row justify-end items-end">
			<el-tag class="ml-2">时间：{{ cardData.tag }}</el-tag>
			<el-tag type="danger" class="ml-2">分类{{ cardData.tag }}</el-tag>
		</footer>
	</div>
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
