<template>
	<base-layout>
		<base-card
			v-for="(item, index) in cardList"
			:key="index"
			:cardData="item"
		>
			<template v-slot:btn>
				<el-button>test</el-button>
			</template>
		</base-card>
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
</script>
<style></style>
