<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="(item,index) in list" :key="index">
				<view class="select_view" v-if="cartStatus">
					<checkbox :value="item.id"/>
				</view>
				<view class="photo">
					<image :src="item.photo"></image>
				</view>
				<view class="goods_info" :class="{selsect_info:cartStatus}">
					<view class="desc">{{item.desc}}</view>
					<view class="equity">{{item.equity}}</view>
					<view class="price">￥<text>{{item.price}}</text></view>
				</view>
			</view>
		</view>
		<view class="bottom_view" v-if="cartStatus">
			<view class="bottom_left">
				<checkbox/> 全选所有记录
			</view>
			<view class="bottom_right">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						id:'1',
						photo:'../../static/product/1.jpg',
						desc:'2021夏装新款女童装',
						price:19.98,
						equity:'退货包运费'
					},
					{
						id:'2',
						photo:'../../static/product/2.jpg',
						desc:'女婴童撞色连衣裙运动风',
						price:19.9,
						equity:'退货包运费'
					},
					{
						id:'3',
						photo:'../../static/product/3.jpg',
						desc:'【宝宝|婴儿】女宝宝连衣裙',
						price:16.45,
						equity:''
					},
					{
						id:'4',
						photo:'../../static/product/4.jpg',
						desc:'宝宝启蒙有声挂图发声幼儿童早教语音识字',
						price:7.17,
						equity:'退货包运费 满38返2'
					},
					{
						id:'5',
						photo:'../../static/product/5.jpg',
						desc:'【防水防脏】儿童罩衣男',
						price:5.17,
						equity:'退货包运费'
					},
					{
						id:'6',
						photo:'../../static/product/6.jpg',
						desc:'女童连衣裙纯棉夏装2021',
						price:19.98,
						equity:'退货包运费'
					}
				],
				status:0,//0-不可编辑 1-可选中删除
				cartStatus:false
			}
		},
		onNavigationBarButtonTap(e) {
			var index = e.index;
			// 按钮文字的改变所需
			// #ifdef APP-PLUS
			var currentWebview = this.$mp.page.$getAppWebview();
			var tn = currentWebview.getStyle().titleNView;
			var text = tn.buttons[0].text;
			if (text == '管理') {
				this.cartStatus = true;
				tn.buttons[0].text = '完成';
				currentWebview.setStyle({
					titleNView: tn
				});
			} else if (text == '完成') {
				this.cartStatus = false;
				tn.buttons[0].text = '管理';
				currentWebview.setStyle({
					titleNView: tn
				});
			}
			// #endif
		},
	}
</script>

<style  lang="less" scoped>
	.goods_list{
		background-color: #FFFFFF;
		border-top: 1rpx solid #EEEEEE;
		padding: 20rpx;
		.goods_item{
			display: flex;
			padding: 10rpx 0;
			.select_view{
				width: 10%;
			}
			.photo{
				width: 30%;
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 4rpx;
				}
			}
			.goods_info{
				width: 70%;
				border-bottom: 1rpx solid #EEEEEE;
				.desc{
					font-size: 30rpx;
					color: #333333;
				}
				.equity{
					color: #d81e06;
					font-size: 26rpx;
				}
				.price{
					color: #d81e06;
					font-size: 26rpx;
					text{
						font-size: 40rpx;
						font-weight: bold;
					}
				}
			}
			.selsect_info{
				width: 60%;
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
			width: 60%;
			font-size: 28rpx;
			color: #999999;
			padding-left: 20rpx;
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
