<template>
	<view>
		<view class="store_list_view">
			<view class="store_title">
				<view class="store_title_left">我的关注</view>
				<view class="store_title_right">查看全部<image src="../../static/my/right.png"></image></view>
			</view>
			<view class="store_list">
				<view class="store_item" v-for="(item,index) in storesList" :key="index">
					<view class="photo">
						<image :src="item.storeLogo"></image>
					</view>
					<view class="name">
						{{item.storeName}}
					</view>
				</view>
			</view>
		</view>
		<view class="dynamic_list">
			<view class="dynamic_list_title">关注动态</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				storesList:[
					{
						storeLogo:'../../static/product/1.jpg',
						storeName:'清清'
					},
					{
						storeLogo:'../../static/product/4.jpg',
						storeName:'贝比兔童书'
					},{
						storeLogo:'../../static/product/6.jpg',
						storeName:'轩仔婴童服装店'
					},
					{
						storeLogo:'../../static/product/3.jpg',
						storeName:'wawa童服装店'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.store_list_view{
		background-color: #FFFFFF;
		border-top: 1rpx solid #EEEEEE;
		.store_title{
			display: flex;
			padding: 20rpx;
			.store_title_left{
				width: 40%;
				font-size: 30rpx;
				color: #333333;
			}
			.store_title_right{
				width: 60%;
				font-size: 26rpx;
				color: #999999;
				text-align: right;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left:10rpx;
				}
			}
		}
		.store_list{
			display: flex;
			padding: 20rpx;
			.store_item{
				width: 25%;
				text-align: center;
				.photo{
					image{
						width: 160rpx;
						height: 160rpx;
						border-radius: 4rpx;
					}
				}
				.name{
					font-size: 30rpx;
					color: #333333;
				}
			}
		}
	}
	
</style>
