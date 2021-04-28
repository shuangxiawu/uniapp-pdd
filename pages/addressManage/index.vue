<template>
	<view>
		<view class="address_list">
			<view class="address_item" v-for="(item,index) in list" :key="index">
				<view>{{item.name}},{{item.tel}}</view>
				<view>
					{{item.province}} {{item.city}} {{item.area}} {{item.address}}
				</view>
				<view class="address_ope">
					<view class="address_ope_view">
						<view v-if="item.isdefault" class="is_default">
							<image src="../../static/my/pitch.png" ></image>
							<text>已设为默认</text>
						</view>
						<view v-if="!item.isdefault">
							<image src="../../static/my/circle.png" ></image>
							<text>设为默认</text>
						</view>
					</view>
					<view class="address_ope_view">
						<view class="address_ope_button">置顶</view>
						<view class="address_ope_button">删除</view>
						<view class="address_ope_button">修改</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add_address">
			<button type="primary" @click="openPage('addAddress')">添加收货地址</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{name:"吴",tel:'18981545816',province:'四川省',city:'成都市',area:'双流区',address:'景茂名都东郡',isdefault:true},
					{name:"陈",tel:'18981545819',province:'四川省',city:'成都市',area:'双流区',address:'燕南国际',isdefault:false}
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
	.address_list{
		.address_item{
			padding: 20rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			font-size: 30rpx;
			color: #333333;
			.address_ope{
				display: flex;
				.address_ope_view{
					width: 50%;
					display: flex;
					color: #666;
					image{
						width: 32rpx;
						height: 32rpx;
						position: relative;
						top: 6rpx;
						margin-right: 6rpx;
					}
					.is_default{
						color: #d81e06;
					}
					.address_ope_button{
						width: 33%;
					}
				}
			}
		}
	}
	.add_address{
		padding: 20rpx;
		button{
			background-color: #d81e06 ;
			color: #FFFFFF;
		}
	}
</style>
