<template>
	<base-layout>
		<div class="flex w-full">
			<div class="w-1/4">
				<ul>
					<li v-for="(item, index) in newList" :key="index">
						<a :href="item.link">{{ item.name }}</a>
					</li>
				</ul>
			</div>
			<div class="w-2/4">
				<base-card
					v-for="(item, index) in cardList"
					:key="index"
					:cardData="item"
				>
					<template v-slot:btn>
						<el-button>test</el-button>
					</template>
				</base-card>
			</div>
			<div class="w-1/4 p-6">
				<el-card class="box-card" shadow="hover">
					<template #header>
						<div class="card-header">
							<span>Card name</span>
						</div>
					</template>

					<div v-for="o in 4" :key="o" class="text item">
						<a href="">{{ '列表内容 ' + o }}</a>
					</div>
					<template #footer>
						<div class="text-right">
							<el-button text type="primary">操作按钮</el-button>
						</div>
					</template>
				</el-card>
			</div>
		</div>
	</base-layout>
</template>

<script setup>
import { ref } from 'vue'
const cardList = ref([
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
	{
		time: '2024-04-11',
		tag: '测试标签',
		title: '>Squeezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent elementSqueezed by parent element++Squeezed by parent element',
		img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
		link: 'www.baidu.com',
	},
])

// 新闻
const newList = ref([
	{
		name: 'baidu',
		link: 'baidu.com',
	},
])
</script>
<style lang="scss" scoped>
.box-card {
	.text {
		font-size: 14px;
		color: #213aa6;
	}

	.item {
		padding: 14px 0;
		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
