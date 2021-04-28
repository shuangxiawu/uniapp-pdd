<template>
	<view>
		<view class="shop_top">
			<view class="left_view"><image :src="shopDetail.logo"></image></view>
			<view class="center_view">
				<view class="store_name">{{shopDetail.storeName}}</view>
				<view class="store_equity">{{shopDetail.equity}}</view>
				<view class="store_num">已卖出{{shopDetail.saled}}件|{{shopDetail.focusNum}}人关注</view>
			</view>
			<view class="right_view">
				<button v-if="!shopDetail.isFocus" @click="clickFocus()">关注</button>
				<button v-if="shopDetail.isFocus" @click="clickFocus()">已关注</button>
				<button>客服</button>
			</view>
		</view>
		<view class="goods_view">
			<scroll-view scroll-x="true" class="type_view">
				<view class="type_view_item" v-for="(classify,index) in classifyArr" :key="index"  @click="selectStateType(classify.name)">
					<text class="number" :class="{activation: classify.name == selectStateIndex}">{{classify.name}}</text>
					<view class="line_view" v-if="classify.name == selectStateIndex"></view>
				</view>
			</scroll-view>
		</view>		
		<view class="product_view">
			<view class="product_list">
				<view class="product_list">
					<view class="product_item" v-for="(item,index) in goodsList" :key="index"  :class="{'product_item_right':index%2 == 1}" @click="openPage('/pages/goodsDetail/index')">
						<image :src="item.photo"></image>
						<view class="product_item_title">{{item.desc}}</view>
						<view class="product_freight">{{item.equity}}</view>
						<view class="product_price">￥{{item.price}}</view>
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
						name:'全部商品'
					},
					{
						name:'分类查看'
					}
				],
				selectStateIndex:"全部商品",
				shopDetail:{
					logo:'../../static/goodsDetail/4.jpg',
					storeName:'欣禾妞妞童装',
					equity:"4年老店 退货包运费",
					saled:101554,
					focusNum:18779,
					isFocus:false
				},
				goodsList:[
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
			selectStateType(type){
				this.selectStateIndex = type;
			},
			openPage(url){
				uni.navigateTo({
					url: url
				})
			},
			clickFocus(){
				this.shopDetail.isFocus=!this.shopDetail.isFocus;
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop_top{
		display: flex;
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		.left_view{
			width: 20%;
			image{
				width: 120rpx;
				height: 120rpx;
			}
		}
		.center_view{
			width: 60%;
			.store_name{
				color: #333333;
				font-size: 34rpx;
				font-weight: bold;
			}
			.store_equity{
				color: #666666;
				font-size: 30rpx;
			}
			.store_num{
				color: #999999;
				font-size: 30rpx;
			}
		}
		.right_view{
			width: 20%;
			button{
				width: 120rpx;
				display: inline-block;
				font-size: 26rpx;
				padding: 14rpx 10rpx;
				line-height: 26rpx;
				border-radius: 12rpx;
				background-color: #FFFFFF;
				color: #d81e06;
				margin-left: 10rpx;
				border: 1rpx solid #d81e06;
			}
		}
	}
	.type_view {
		display: flex;
		align-items: center;
		width: 100%;
		height: 90rpx;
		overflow: hidden;
		white-space: nowrap;
		background: #FFFFFF;
	
		.type_view_item {
			display: inline-block;
			margin-left: 40rpx;
			margin-top: 10rpx;
			.number {
				position: relative;
				font-size: 34rpx;
				color: #333333;
			}
			.activation{
				color:#d81e06;
			}
			.line_view {
				display: block;
				height: 6rpx;
				margin-top: -4rpx;
				background:#d81e06;
			}
			
		}
	}
	.product_view{
		margin-top: 20rpx;
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
