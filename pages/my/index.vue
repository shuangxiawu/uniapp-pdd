<template>
	<view>
		<view class="my_top">
			<view class="my_photo">
				<image class="head_photo" v-if="userInfo&&userInfo.photo" :src="userInfo.photo"></image>
				<image class="head_photo" v-else src="../../static/my/photo.png"></image>
			</view>
			<view class="my_info"><text class="user_name">{{userInfo.nickName}}</text></view>
		</view>
		<view class="order_view">
			<view class="my_order"  @click="openPage('/pages/orderManage/index')">
				<view class="my_order_left">我的订单</view>
				<view class="my_order_right">查看全部<image src="../../static/my/right.png"></image></view>
			</view>
			<view class="order_classify">
				<view class="order_classify_item"  @click="openPage('/pages/orderManage/index?state=0')"><image src="../../static/my/payment.png"></image><view>待付款</view></view>
				<view class="order_classify_item"  @click="openPage('/pages/orderManage/index?state=1')"><image src="../../static/my/share.png"></image><view>待分享</view></view>
				<view class="order_classify_item"  @click="openPage('/pages/orderManage/index?state=2')"><image src="../../static/my/delivery.png"></image><view>待发货</view></view>
				<view class="order_classify_item"  @click="openPage('/pages/orderManage/index?state=3')"><image src="../../static/my/goods.png"></image><view>待收货</view></view>
				<view class="order_classify_item"  @click="openPage('/pages/orderManage/index?state=4')"><image src="../../static/my/evaluation.png"></image><view>评价</view></view>
			</view>
		</view>
		<view class="function_view">
			<view class="function_item" @click="openPage('/pages/couponsManage/index')"><image src="../../static/my/coupons.png"></image><view>优惠券</view></view>
			<view class="function_item" @click="openPage('/pages/selectGoodsManage/index')"><image src="../../static/my/collect.png"></image><view>商品收藏</view></view>
			<view class="function_item" @click="openPage('/pages/focusStores/index')"><image src="../../static/my/focus.png"></image><view>店铺关注</view></view>
			<view class="function_item" @click="openPage('/pages/footprintManage/index')"><image src="../../static/my/footprint.png"></image><view>历史浏览</view></view>
			<view class="function_item_last"><image src="../../static/my/refund.png"></image><view>退款售后</view></view>
		</view>
		<view class="function_view">
			<view class="function_item"><image src="../../static/my/tree.png"></image><view>果园</view></view>
			<view class="function_item"><image src="../../static/my/train.png"></image><view>火车票</view></view>
			<view class="function_item" @click="openPage('/pages/addressManage/index')"><image src="../../static/my/location.png"></image><view>收货地址</view></view>
			<view class="function_item"><image src="../../static/my/service.png"></image><view>官方客服</view></view>
			<view class="function_item" @click="openPage('/pages/setting/index')"><image src="../../static/my/set.png"></image><view>设置</view></view>
		</view>
		<view class="product_view">
			<view class="product_title"><image src="../../static/my/select.png"></image>精选推荐</view>
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
</template>

<script>
	export default{
		data(){
			return{
				userInfo:{
					nickName:'吴双'
				},
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
		},
		methods:{
			openPage(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.my_top{
		background-color: #fff;
		padding: 20rpx;
		display: flex;
		.my_photo{
			width:150rpx ;
			.head_photo{
				width: 120rpx;
				height: 120rpx;
				border-radius: 60rpx;
			}
		}
		.my_info{
			.user_name{
				font-size: 28rpx;
				color: #333;
				position: relative;
				top: 20rpx;
			}
		}
	}
	.order_view{
		border-top: 1rpx solid #eeeeee;
		background-color: #ffffff;
		padding: 20rpx 0;
		.my_order{
			display: flex;
			margin-bottom: 30rpx;
			padding: 20rpx;
			.my_order_left{
				width: 50%;
				font-size: 28rpx;
				color: #333333;
			}
			.my_order_right{
				width: 50%;
				text-align: right;
				font-size: 22rpx;
				color: #D1D1D1;
				image{
					width: 22rpx;
					height: 22rpx;
					margin-left: 10rpx;
				}
			}
		}
		.order_classify{
			display: flex;
			.order_classify_item{
				width: 20%;
				text-align: center;
				image{
					width: 50rpx;
					height: 50rpx;
				}
				view{
					font-size: 24rpx;
					color: #999;
				}
			}
		}
	}
	.function_view{
		margin-top: 20rpx;
		display: flex;
		background-color: #fff;
		padding: 30rpx 0;
		.function_item{
			width: 20%;
			text-align: center;
			image{
				width: 50rpx;
				height: 50rpx;
			}
			view{
				font-size: 24rpx;
				color: #999;
			}
		}
		.function_item_last{
			width: 20%;
			text-align: center;
			image{
				width: 68rpx;
				height: 50rpx;
			}
			view{
				font-size: 24rpx;
				color: #999;
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
</style>
