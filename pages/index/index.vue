<template>
	<view class="content">
<view class="u-page">
		<up-list
			@scrolltolower="scrolltolower"
		>
			<up-list-item v-for="(item, index) in indexList"
				:key="index">
				<up-cell
					:title="`列表长度-${index + 1}`">
					<template #icon>
						<up-avatar
							shape="square"
							size="35"
							:src="item.url"
							customStyle="margin: -3px 5px -3px 0"
						></up-avatar>
					</template>
				</up-cell>
			</up-list-item>
		</up-list>
	</view>
	</view>
</template>

<script>
	export default {
		name:"index",		
	}
</script>
<script setup>
import { ref, reactive } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';  

const indexList = reactive([]);
const urls = [
  'https://uview-plus.jiangruyi.com/album/1.jpg',
  'https://uview-plus.jiangruyi.com/album/2.jpg',
  'https://uview-plus.jiangruyi.com/album/3.jpg',
  'https://uview-plus.jiangruyi.com/album/4.jpg',
  'https://uview-plus.jiangruyi.com/album/5.jpg',
  'https://uview-plus.jiangruyi.com/album/6.jpg',
  'https://uview-plus.jiangruyi.com/album/7.jpg',
  'https://uview-plus.jiangruyi.com/album/8.jpg',
  'https://uview-plus.jiangruyi.com/album/9.jpg',
  'https://uview-plus.jiangruyi.com/album/10.jpg',
];

onLoad(() => {
  loadmore();
});

const scrolltolower = () => {
  loadmore();
};

const loadmore = () => {
	console.log("zzzz");
  for (let i = 0; i < 30; i++) {
    indexList.push({
      url: urls[uni.$u.random(0, urls.length - 1)],
    });
  }
};
	
</script>

<style>
	.content {
		width: 100%;
	/* 	display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
