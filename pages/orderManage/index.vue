<template>
	<view>
		<scroll-view scroll-x="true" class="type_view">
			<view class="type_view_item" v-for="(item,index) in stateArr" :key="index" @click="selectStateType(item.key)">
				<text class="number" :class="{activation: item.key == selectStateIndex}">{{item.state}}</text>
				<view class="line_view" v-if="item.key == selectStateIndex"></view>
			</view>
		</scroll-view>
		<view class="order_list">
			<view class="order_item" v-for="(order,index) in orderList" :key="index">
				<view class="order_item_store">
					<view class="order_item_left"><image :src="order.photo"></image><text>{{order.storeName}}</text> <image src="../../static/my/right.png"></image></view>
					<view class="order_item_right">{{order.state|handleState}}</view>
				</view>
				<view class="order_item_detail" @click="openPage('orderDetail')">
					<view class="order_detail"><image :src="order.photo"></image></view>
					<view class="order_detail">
						<view class="order_detail_desc">{{order.desc}}</view>
						<view>{{order.size}}</view>
					</view>
					<view class="order_detail">
						<view class="order_price">￥{{order.price}}</view>
						<view class="order_num">x {{order.num}}</view>
					</view>
				</view>
				<view class="real_pay">
					<image src="../../static/my/coupons.png" v-if="order.coupons"></image>实付￥<text>{{order.realPay}}</text>
				</view>
				<view class="more">
					<button type="default" v-if="order.state!=5">申请退款</button>
					<button type="default" v-if="order.state==3">查看物流</button>
					<button type="primary" class="evaluation_button" v-if="order.state==3">确认收货</button>
					<button type="default" v-if="order.state==2">提醒发货</button>
					<button type="primary" class="evaluation_button" v-if="order.state==4">立即评价</button>
					<button type="default" v-if="order.state==5">删除订单</button>
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
	</view>
</template>

<script>
	export default{
		data(){
			return{
				stateArr:[
					{
						key:'null',
						state:'全部'
					},{
						key:'0',
						state:'待付款'
					},{
						key:'1',
						state:'待分享'
					},{
						key:'2',
						state:'待发货'
					},{
						key:'3',
						state:'待收货'
					},{
						key:'4',
						state:'待评价'
					},{
						key:'5',
						state:'交易成功'
					}
				],
				selectStateIndex:'null',
				search:{
					state:'null'
				},
				orderList:[
					{
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
					{
						storeName:'石小江的小店铺',
						photo:'../../static/product/7.jpg',
						desc:'婴儿袜子冬季加毛圈宝宝袜貂绒新生儿中筒袜卡通长筒袜0-1-3岁',
						price:'6.8',
						num:2,
						size:'花型随机',
						realPay:'3.6',
						coupons:true,
						state:'4'
					}
				],
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
		onLoad(option){
			if(option&&option.state){
				this.selectStateIndex=option.state;
			}
		},
		methods:{
			selectStateType(type){
				this.selectStateIndex = type;
				this.search.state = type;
			},
			openPage(url){
				uni.navigateTo({
					url: url
				})
			}
		},
		filters:{
			handleState(val){
				let msg="";
				switch (val) {
				case '0':
				  msg = "待付款";
				  break;
				case '1':
				  msg = "待分享";
				  break;
				case '2':
				  msg = "待发货";
				  break;
				case '3':
				  msg = "待收货";
				  break;
				case '4':
				  msg = "待评价";
				  break;
				case '5':
				  msg = "交易成功";
				  break;
			    }
			    return msg;
				
			}
		}
	}
</script>

<style  lang="less" scoped>
	.type_view {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
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
	.order_list{
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
				}
			}
			.more{
				border-top: 1px solid #EEEEEE;
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
					border-radius: 8rpx;
					background-color: #FFFFFF;
					color: #333333;
					margin-left: 10rpx;
				}
				.evaluation_button{
					background-color: #d81e06;
					color: #FFFFFF;
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
</style>
