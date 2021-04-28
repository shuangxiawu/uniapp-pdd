<template>
	<view>
		<scroll-view scroll-x="true" class="type_view">
			<view class="type_view_item" v-for="(item,index) in classifyArr" :key="index" @click="selectStateType(item.key)">
				<text class="number" :class="{activation: item.key == selectStateIndex}">{{item.state}}</text>
				<view class="line_view" v-if="item.key == selectStateIndex"></view>
			</view>
		</scroll-view>
		<view class="content">
			<view v-for="(item,index) in list" :key="index" class="list_item">
				<view class="list_price list_item_view" :class="{unused:item.state==0}">
					<view class="price" >￥{{item.price}}</view>
					<view>{{item.threshold}}</view>
				</view>
				<view class="content list_item_view">
					<view>{{item.condition}} <text v-if="item.goods">:{{item.goods}}</text></view>
					<view class="validity">{{item.validity_at}}</view>
				</view>
				<view class="operate list_item_view">
					<button type="primary" v-if="item.state==0" class="evaluation_button">立即使用</button>
					<image v-if="item.state==2" src="../../static/my/overdue.png"></image>
					<image v-if="item.state==1" src="../../static/my/used.png"></image>
				</view>
			</view>
		</view>
		<view class="best_coupons_view">
			<view class="best_coupons_title"><image src="../../static/my/select.png"></image>推荐好券</view>
			<view class="coupon_item" v-for="(item,index) in selectList" :key="index">
				<view class="coupon_item_photo"><image :src="item.photo"></image></view>
				<view class="coupon_item_content">
					<view class="coupon_item_goods">{{item.goods}}</view>
					<view class="price">原价 ￥{{item.price}}</view>
					<view class="onsale_price">券后价 <text>￥{{item.onsalePrice}}</text></view>
				</view>
				<view class="coupon_item_right">
					<view class="price">￥ <text>{{item.couponValue}}</text></view>
					<text>{{item.threshold}}</text>
					<view class="operate">
						<button type="primary">立即领取</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				classifyArr:[
					{
						key:'0',
						state:'未使用'
					},{
						key:'1',
						state:'已使用'
					},{
						key:'2',
						state:'已过期/失效'
					}
				],
				selectStateIndex:'0',
				list:[
					{
						price:5,
						threshold:'无门槛',
						condition:"仅该商品可以使用",
						storeId:'111',
						goods:'云南紫皮大蒜',
						state:'1',
						validity_at:'2021.3.16-2021.3.17'
					},
					{
						price:20,
						threshold:'满59可用',
						condition:"生活日用品",
						storeId:'222',
						goods:'',
						state:'0',
						validity_at:'2021.4.12-2021.4.17'
					},
					{
						price:10,
						threshold:'无门槛',
						condition:"仅该商品可以使用",
						storeId:'333',
						goods:'新鲜红薯农家黄心番薯',
						state:'2',
						validity_at:'2021.4.12-2021.4.17'
					}
				],
				selectList:[
					{
						photo:'../../static/product/1.jpg',
						price:29.8,
						onsalePrice:9.8,
						couponValue:20,
						threshold:'无门槛',
						goods:'2021夏装新款女童装'
					},
					{
						photo:'../../static/product/2.jpg',
						price:34.9,
						onsalePrice:19.9,
						couponValue:15,
						threshold:'无门槛',
						goods:'女婴童撞色连衣裙运动风'
					},
					{
						photo:'../../static/product/3.jpg',
						price:26,
						onsalePrice:16,
						couponValue:10,
						threshold:'无门槛',
						goods:'【宝宝|婴儿】女宝宝连衣裙'
					}
				]
			}
		},
		methods:{
			selectStateType(type){
				this.selectStateIndex=type;
			}
		}
	}
</script>

<style  lang="less" scoped>
	.type_view {
		display: flex;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		background: #FFFFFF;
	
		.type_view_item {
			display: inline-block;
			width: 32%;
			text-align: center;
			margin-left: 1%;
			.activation{
				color:#d81e06;
			}
			.line_view {
				display: block;
				height: 6rpx;
				margin-top: 4rpx;
				background:#d81e06;
			}
		}
	}
	.content{
		padding: 20rpx;
		.list_item{
			background-color: #FFFFFF;
			border-radius: 8rpx;
			display: flex;
			margin-bottom: 20rpx;
			padding: 20rpx;
			.list_item_view{
				&:first-child{
					font-size: 30rpx;
					color: #999999;
					width: 20%;
					.price{
						font-size: 50rpx;
						font-weight: bold;
					}
				}
				&:nth-child(2n){
					width: 50%;
					font-size: 30rpx;
					color: #333333;
					.validity{
						color: #999999;
					}
				}
				&:last-child{
					width: 30%;
					text-align: center;
					button{
						width: 160rpx;
						display: inline-block;
						font-size: 30rpx;
						padding: 20rpx;
						padding-left: 10rpx;
						padding-right: 10rpx;
						line-height: 30rpx;
						border-radius: 8rpx;
						background-color: #FABF03;
						color: #FFFFFF;
						position: relative;
						top: 20rpx;
					}
					image{
						width: 120rpx;
						height: 120rpx;
						position: relative;
						top: 20rpx;
					}
				}
			}
			.unused{
				.price{
					color: #FABF03;
				}
				view{
					color: #FABF03;
				}
			}
		}
	}
	.best_coupons_view{
		padding: 20rpx;
		.best_coupons_title{
			image{
				width: 40rpx;
				height: 40rpx;
				position: relative;
				top: 10rpx;
			}
			font-size: 34rpx;
			color: #333333;
			font-weight: bold;
		}
		.coupon_item{
			display: flex;
			padding: 20rpx 0;
			background-color: #FFFFFF;
			margin-top: 20rpx;
			.coupon_item_photo{
				width: 30%;
				padding-left: 20rpx;
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 6rpx;
				}
			}
			.coupon_item_content{
				width: 45%;
				padding-left: 20rpx;
				padding-right: 20rpx;
				.coupon_item_goods{
					color: #333333;
					font-size: 30rpx;
				}
				.price{
					color: #666666;
					font-size: 28rpx;
				}
				.onsale_price{
					color: #d81e06;
					font-size: 28rpx;
					text{
						font-size: 36rpx;
						font-weight: bold;
					}
				}
			}
			.coupon_item_right{
				width: 25%;
				color: #d81e06;
				font-size: 30rpx;
				text-align: center;
				border-left: 1rpx dashed #EEEEEE;
				.price{
					font-weight: bold;
					font-size: 36rpx;
					text{
						font-size: 42rpx;
					}
				}
				.operate{
					button{
						width: 140rpx;
						display: inline-block;
						font-size: 28rpx;
						padding: 16rpx;
						padding-left: 8rpx;
						padding-right: 8rpx;
						line-height: 28rpx;
						border-radius: 8rpx;
						background-color: #d81e06;
						color: #FFFFFF;
						position: relative;
						top: 20rpx;
					}
				}
				
			}
		}
	}
</style>
