<template>
	<view>
		<view class="order_logistics"><image src="../../static/my/courier.png"></image><text>{{orderInfo.logistics}}</text></view>
		<view class="order_location">
			<image src="../../static/my/location.png"></image><text>{{orderInfo.address}}</text>
		</view>
		<view class="order_item">
			<view class="order_item_store">
				<view class="order_item_left"><image :src="orderInfo.goodsInfo.photo"></image><text>{{orderInfo.goodsInfo.storeName}}</text> <image src="../../static/my/right.png"></image></view>
			</view>
			<view class="order_item_detail">
				<view class="order_detail"><image :src="orderInfo.goodsInfo.photo"></image></view>
				<view class="order_detail">
					<view class="order_detail_desc">{{orderInfo.goodsInfo.desc}}</view>
					<view>{{orderInfo.goodsInfo.size}}</view>
				</view>
				<view class="order_detail">
					<view class="order_price">￥{{orderInfo.goodsInfo.price}}</view>
					<view class="order_num">x {{orderInfo.goodsInfo.num}}</view>
				</view>
			</view>
			<view class="more">
				<button type="default" >联系客服</button>
				<button  v-if="orderInfo.goodsInfo.state!=5" class="evaluation_button">申请退款</button>
			</view>
			<view class="real_pay">
				<image src="../../static/my/coupons.png" v-if="orderInfo.goodsInfo.coupons"></image>实付￥<text>{{orderInfo.goodsInfo.realPay}}</text>
			</view>
		</view>
		<view class="instruction" v-if="orderInfo.instruction">
			<view class="instruction_title">使用说明</view>
			<view class="instruction_content">{{orderInfo.instruction}}</view>
		</view>
		<view class="order_base_info">
			<view>订单编号：<text selectable="true">{{orderInfo.orderNo}} </text>
			<!-- <button type="default" @click="copy(orderInfo.orderNo)">复制</button> -->
			</view>
			<view>支付方式：<text>{{orderInfo.payType==1?"微信":"支付宝"}}</text></view>
			<view>物流公司：{{orderInfo.logisticsCompany}}</view>
			<view>快递单号：<text selectable="true">{{orderInfo.trackingNum}} </text>
			<!-- <button type="default" @click="copy(orderInfo.trackingNum)">复制</button> -->
			</view>
			<view>下单时间：{{orderInfo.create_at}}</view>
			<view>发货时间：{{orderInfo.delivery_at}}</view>
		</view>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				orderInfo:{
					logistics:'【成都市】【成都双流】（028-63205875）的业务员正在配送',
					address:'吴 18981545816 成都市双流区 景茂名都东郡',
					goodsInfo:{
						storeName:'智米屋童装官方旗舰店',
						photo:'../../static/product/5.jpg',
						desc:'宝宝吃饭围兜儿童防水罩衣男女夏季薄款无袖围裙口水巾婴儿反穿衣',
						price:'12.9',
						num:1,
						size:'蓝色烟袋熊+黄色欢乐熊,100小号（适合0-3岁）',
						realPay:'12.9',
						coupons:false,
						state:'3'
					},
					instruction:'服饰类商品如出现已洗涤，或吊牌已摘，或显著穿戴痕迹等影响二次销售情形，且无质量问题的，不支持七天无理由退换。',
					orderNo:'2147487865665-56655688',
					payType:'2',//1-微信,2-支付宝
					goodsPhoto:'',
					logisticsCompany:'中通快递',
					trackingNum:'18768555488885',
					create_at:'2021-04-09  09:19:16',
					delivery_at:'2021-04-09  09:33:40'
				}
			}
		},
		methods:{
			

		}
	}
</script>

<style  lang="less" scoped>
	.order_logistics{
		display: flex;
		background-color: #FFFFFF;
		padding: 20rpx;
		image{
			width: 50rpx;
			height: 50rpx;
		}
		text{
			display: block;
			font-size: 30rpx;
			color: #1DB009;
			white-space:nowrap;
		    overflow:hidden;
			text-overflow:ellipsis;
			margin-left: 20rpx;
		}
	}
	.order_location{
		display: flex;
		background-color: #FFFFFF;
		padding: 20rpx;
		border-top: 1rpx solid #EEEEEE;
		image{
			width: 50rpx;
			height: 50rpx;
		}
		text{
			display: block;
			font-size: 30rpx;
			color: #333333;
			margin-left: 20rpx;
		}
	}
	.order_item{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.order_item_store{
			padding: 20rpx;
			display: flex;
			.order_item_left{
				width: 70%;
				font-size: 30rpx;
				color: #333;
				text{
					position: relative;
					bottom: 16rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
				}
				image:first-child{
					width: 50rpx;
					height: 50rpx;
				}
				image:last-child{
					width: 30rpx;
					height: 30rpx;
					position: relative;
					bottom: 10rpx;
				}
			}
			.order_item_right{
				width: 30%;
				text-align: right;
				color:#d81e06;
				font-size: 34rpx;
			}
		}
		.order_item_detail{
			padding: 20rpx;
			display: flex;
			.order_detail{
				&:first-child{
					width: 25%;
					image{
						width: 160rpx;
						height: 160rpx;
						border-radius: 8rpx;
					}
				}
				&:nth-child(2n){
					width: 65%;
					color: #999999;
					font-size: 30rpx;
					.order_detail_desc{
						color: #333333;
					}
				}
				&:last-child{
					width: 10%;
					color: #333333;
					font-size: 30rpx;
					.order_num{
						color: #666666;
						font-size: 26rpx;
					}
				}
			}
		}
		.real_pay{
			padding: 20rpx;
			color: #333333;
			font-size: 30rpx;
			border-top: 1px solid #EEEEEE;
			text-align: right;
			image{
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
				position: relative;
				top: 8rpx;
			}
			text{
				font-size: 34rpx;
				color: #d81e06;
			}
		}
		.more{
			text-align: right;
			padding: 20rpx;
			button{
				width: 180rpx;
				display: inline-block;
				font-size: 30rpx;
				padding: 20rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				line-height: 30rpx;
				border-radius: 12rpx;
				background-color: #FFFFFF;
				color: #333333;
				margin-left: 10rpx;
			}
			.evaluation_button{
				border: 1rpx solid #d81e06;
				color: #d81e06;
			}
		}
	}
	.instruction{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 20rpx;
		.instruction_title{
			font-size: 28rpx;
			color: #333333;
		}
		.instruction_content{
			font-size: 24rpx;
			color: #666666;
		}
	}
	.order_base_info{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #999999;
		padding: 20rpx;
		line-height: 50rpx;
		button{
			width: 100rpx;
			display: inline-block;
			font-size: 26rpx;
			padding: 16rpx;
			padding-left: 10rpx;
			padding-right: 10rpx;
			line-height: 26rpx;
			border-radius: 4rpx;
			background-color: #FFFFFF;
			color: #666666;
			margin-right: 10rpx;
			float: right;
		}
	}
</style>
