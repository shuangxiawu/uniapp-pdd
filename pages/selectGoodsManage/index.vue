<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="(item,index) in goodsList" :key="index">
				<view class="goods_title"><image :src="item.storeLogo"></image><text>{{item.storeName}}</text></view>
				<view class="goods_info">
					<view class="operate"><checkbox :value="item.id"/></view>
					<view class="goods_photo">
						<image :src="item.goodsPhoto"></image>
					</view>
					<view class="goods_content">
						<view class="goods_desc">{{item.desc}}</view>
						<view class="price">￥ <text>{{item.price}}</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="product_view">
			<view class="product_title"><image src="../../static/my/select.png"></image>精选推荐</view>
			<view class="product_list">
				<view class="product_list">
					<view class="product_item" v-for="(item,index) in selectGoods" :key="index"  :class="{'product_item_right':index%2 == 1}">
						<image :src="item.photo"></image>
						<view class="product_item_title">{{item.desc}}</view>
						<view class="product_freight">{{item.equity}}</view>
						<view class="product_price">￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_view">
			<view class="bottom_left">
				<text>已选{{selectNum}}款</text>
			</view>
			<view class="bottom_center">
				合计：<text>￥{{totalPrice}}</text>
			</view>
			<view class="bottom_right">
				去结算
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goodsList:[
					{
						id:'111',
						storeLogo:'../../static/product/1.jpg',
						storeName:'清清',
						goodsPhoto:'../../static/product/1.jpg',
						desc:'2021夏装新款女童装',
						price:23.9
					},
					{
						id:'222',
						storeLogo:'../../static/product/4.jpg',
						storeName:'贝比兔童书',
						goodsPhoto:'../../static/product/4.jpg',
						desc:'宝宝启蒙有声挂图发声幼儿童早教语音识字',
						price:7.17
					},
					{
						id:'333',
						storeLogo:'../../static/product/6.jpg',
						storeName:'轩仔婴童服装店',
						goodsPhoto:'../../static/product/6.jpg',
						desc:'女童连衣裙纯棉夏装2021',
						price:19.9
					}
				],
				selectNum:0,
				totalPrice:0,
				selectGoods:[
					{
						photo:'../../static/product/1.jpg',
						desc:'2021夏装新款女童装',
						price:19.98,
						equity:'退货包运费'
					},
					{
						photo:'../../static/product/2.jpg',
						desc:'女婴童撞色连衣裙运动风',
						price:19.9,
						equity:'退货包运费'
					},
					{
						photo:'../../static/product/3.jpg',
						desc:'【宝宝|婴儿】女宝宝连衣裙',
						price:16.45,
						equity:''
					},
					{
						photo:'../../static/product/4.jpg',
						desc:'宝宝启蒙有声挂图发声幼儿童早教语音识字',
						price:7.17,
						equity:'退货包运费 满38返2'
					},
					{
						photo:'../../static/product/5.jpg',
						desc:'【防水防脏】儿童罩衣男',
						price:5.17,
						equity:'退货包运费'
					},
					{
						photo:'../../static/product/6.jpg',
						desc:'女童连衣裙纯棉夏装2021',
						price:19.98,
						equity:'退货包运费'
					}
				]
			}
		}
	}
</script>

<style  lang="less" scoped>
	.goods_list{
		.goods_item{
			background-color: #FFFFFF;
			padding: 20rpx;
			margin-bottom: 20rpx;
			.goods_title{
				padding: 20rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 30rpx;
					color: #333333;
					position: relative;
					top: -10rpx;
				}
			}
			.goods_info{
				display: flex;
				.operate{
					width: 10%;
				}
				.goods_photo{
					width: 30%;
					image{
						width: 180rpx;
						height: 180rpx;
						border-radius: 6rpx;
					}
				}
				.goods_content{
					width: 60%;
					.goods_desc{
						font-size: 32rpx;
						color: #333333;
					}
					.price{
						color: #d81e06;
						text{
							font-size: 40rpx;
						}
					}
				}
			}
		}
	}
	.product_view{
		margin-top: 20rpx;
		.product_title{
			// width: 100%;
			background-color: #ffffff;
			text-align: center;
			color: #d81e06;
			padding: 10rpx 0 30rpx 0;
			font-size: 26rpx;
			image{
				width: 50rpx;
				height: 50rpx;
				position: relative;
				top: 16rpx;
			}
			margin-bottom: 20rpx;
		}
		.product_list{
			margin-top: 20rpx;
			// width: 100%;
			.product_item{
				width: 49%;
				background-color: #FFFFFF;
				float: left;
				margin-bottom: 10rpx;
				image{
					width: 100%;
					height: 360rpx;
				}
				.product_item_title{
					color: #333333;
					font-size: 28rpx;
					white-space: nowrap;
					overflow: hidden;
					padding-left: 20rpx;
				}
				.product_freight{
					color: #999999;
					font-size: 26rpx;
					padding-left: 20rpx;
					height: 30rpx;
				}
				.product_price{
					color: #d81e06;
					font-size: 28rpx;
					padding-left: 20rpx;
				}
			}
			.product_item_right{
				margin-left: 2%;
			}
		}
		
	}
	.bottom_view{
		position: fixed;
		width: 100%;
		height: 100rpx;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		.bottom_left{
			width: 30%;
			font-size: 28rpx;
			color: #999999;
			text{
				margin-left: 20rpx;
			}
		}
		.bottom_center{
			width: 30%;
			text-align: center;
			font-size: 28rpx;
			color: #333333;
			text{
				color:#d81e06 ;
				font-size: 40rpx;
			}
		}
		.bottom_right{
			width: 40%;
			text-align: center;
			background: #d81e06;
			color: #FFFFFF;
			font-size: 36rpx;
			height: 100rpx;
			line-height: 100rpx;
		}
	}
</style>
