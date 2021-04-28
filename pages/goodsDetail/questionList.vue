<template>
	<view>
		<view class="list_view">
			<view class="list_item" v-for="(item,index) in list" :key="index">
				<view class="title"><view class="left_view">{{item.question}}</view><view class="right_view">{{item.num}}人同问</view></view>
				<view class="answer" v-for="(answer,index2) in item.answers" :key='index2'>
					<image :src="answer.photo"></image><text class="user_name">{{answer.userName}} </text><text class="merchant" v-if="answer.isMerchant">商家</text> ：
					<text class="answer_content">{{answer.content}}</text>
				</view>
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
						question:'偏大还是偏小',
						num:143,
						answers:[
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false}
						]
					},
					{
						question:'偏大还是偏小',
						num:143,
						answers:[
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false}
						]
					},
					{
						question:'偏大还是偏小',
						num:143,
						answers:[
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false},
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false},
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false}
						]
					},
					{
						question:'偏大还是偏小',
						num:143,
						answers:[
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false}
						]
					},{
						question:'偏大还是偏小',
						num:143,
						answers:[
							{photo:"../../static/my/photo.png",userName:'小巧玲珑',content:'亲，偏小半个码',isMerchant:true},
							{photo:"../../static/my/photo.png",userName:'彩虹糖',content:'偏小',isMerchant:false}
						]
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.list_view{
		.list_item{
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			padding: 20rpx;
			.title{
				display: flex;
				.left_view{
					color: #333333;
					width: 70%;
					font-weight: bold;
					font-size: 34rpx;
				}
				.right_view{
					width: 30%;
					text-align: right;
					color: #666666;
					font-size: 30rpx;
				}
			}
			.answer{
				font-size: 30rpx;
				color: #333333;
				image{
					width: 50rpx;
					height: 50rpx;
					border-radius: 25rpx;
					position: relative;
					top: 14rpx;
				}
				.user_name{
					color: #333333;
					margin-left: 10rpx;
					font-size: 30rpx;
				}
				.merchant{
					background-color: #f5f5f5;
					padding: 4rpx 10rpx;
					color: #666666;
					margin-left: 10rpx;
					font-size: 30rpx;
					
				}
				.answer_content{
					color: #666666;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
