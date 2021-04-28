<template>
	<view>
		<view class="list_view">
			<view class="list_item">
				<view class="list_item_left">
					<image src="../../static/my/phone.png"></image><text>绑定手机号</text>
				</view>
				<view class="list_item_right">
					<image src="../../static/my/right.png"></image>
				</view>
			</view>
			<view class="list_item">
				<view class="list_item_left">
					<image src="../../static/my/security.png"></image><text>账号与安全</text>
				</view>
				<view class="list_item_right">
					<image src="../../static/my/right.png"></image>
				</view>
			</view>
			<view class="list_item">
				<view class="list_item_left">
					<image src="../../static/my/clear.png"></image><text>清除缓存</text>
				</view>
				<view class="list_item_right">
					<image src="../../static/my/right.png"></image>
				</view>
			</view>
		</view>
		<view class="btn">
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.list_view{
		margin-top: 20rpx;
		.list_item{
			padding:26rpx 20rpx;
			background-color: #FFFFFF;
			border-bottom: 1rpx solid #EEEEEE;
			color: #333333;
			font-size: 34rpx;
			display: flex;
			&:last-child{
				border-bottom: none;
			}
			.list_item_left{
				width: 60%;
				image{
					width: 40rpx;
					height: 40rpx;
					position: relative;
					top: 10rpx;
				}
				text{
					margin-left: 10rpx;
				}
			}
			.list_item_right{
				width: 40%;
				text-align: right;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
	.btn{
		background-color: #FFFFFF;
		color: #333333;
		font-size: 34rpx;
		text-align: center;
		padding:26rpx 20rpx;
		margin-top: 20rpx;
	}
</style>
