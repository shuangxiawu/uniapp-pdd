<template>
	<view>
		<view class="list_view">
			<view v-for="(item,index) in list" :key="index" class="list_item">
				<view class="top"><image :src="item.photo"></image><text>{{item.buyer}}</text></view>
				<view class="goods_model">颜色分类：{{item.color}} 参考身高：{{item.size}}</view>
				<view class="content">{{item.content}}</view>
				<view v-if="item.imgs&&item.imgs.length>0" class="eva_img_view">
					<image v-for="(img,index2) in item.imgs" :key="index2" :src="img"></image>
				</view>
				<view class="list_item_bottom">
					<view><image src="../../static/my/praise.png" v-if="!item.isPraise" @click="praiseClick(index)"></image>
					<image src="../../static/my/praised.png" v-if="item.isPraise"  @click="praiseClick(index)"></image><text>{{item.praiseNum}}</text></view>
					<view @click="open(index)">
						<image src="../../static/my/comments.png"></image>
						<text v-if="item.comments.length>0">{{item.comments.length}}</text>
						<text v-if="item.comments.length==0">评价</text>
					</view>
				</view>
			</view>
		</view>	
		<view>
			<uni-popup ref="popup" type="bottom">
				<view class="bottom_pop">
					<view class="bottom_pop_title">全部{{commentsTotal}}条评论<view class="close" @click="close()">×</view></view>
					<view class="comment_list">
						<view class="comment_item" v-for="(comment,index3) in commentsList" :key="index3">
							<view class="comment_item_top">
								<image :src="comment.photo"></image><text>{{comment.userName}}</text>
							</view>
							<view class="comment_item_content">
								{{comment.content}}
							</view>
							<view class="comment_item_bottom">
								{{comment.create_at}}
							</view>
						</view>
						<view class="nodata" v-if="commentsTotal==0">暂无评论，期待你的回复</view>
					</view>
					<view class="input_view">
						<input type="text" class="uni-input" placeholder="热情回复,文明用语">
						<button>发送</button>
					</view>
				</view>
				
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						buyer:'Doris',
						photo:"../../static/my/photo.png",
						color:"粉红色",
						size:"90",
						praiseNum:26,
						isPraise:false,
						comments:[
							{userName:'小巧玲珑',photo:"../../static/my/photo.png",content:'宝贝有多大',create_at:'2021-03-15'},
							{userName:'小尾巴羊',photo:"../../static/my/photo.png",content:'你家买的多大的',create_at:'2021-03-17'},
							{userName:'彩虹糖',photo:"../../static/my/photo.png",content:'好看',create_at:'2021-02-15'},
							{userName:'L&&L',photo:"../../static/my/photo.png",content:'质量怎么样',create_at:'2021-01-15'},
							{userName:'小尾巴羊',photo:"../../static/my/photo.png",content:'你家买的多大的',create_at:'2021-03-17'},
							{userName:'彩虹糖',photo:"../../static/my/photo.png",content:'好看',create_at:'2021-02-15'},
							{userName:'L&&L',photo:"../../static/my/photo.png",content:'质量怎么样',create_at:'2021-01-15'}
						],
						content:'裙子很漂亮，好看，喜欢的赶紧下单吧，我家的身高75，买的90得穿的正好',
						imgs:["../../static/goodsDetail/1.jpg","../../static/goodsDetail/2.jpg","../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
					},
					{
						buyer:'健康是福',
						photo:"../../static/my/photo.png",
						color:"白色",
						size:"100",
						praiseNum:4,
						isPraise:true,
						comments:[{userName:'小巧玲珑',photo:"../../static/my/photo.png",content:'宝贝有多大',create_at:'2021-03-15'}],
						content:'衣服已经收到了，宝贝非常喜欢，款式好看质量很好',
						imgs:["../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
					},
					{
						buyer:'健康是福',
						photo:"../../static/my/photo.png",
						color:"白色",
						size:"100",
						praiseNum:4,
						isPraise:false,
						comments:[],
						content:'衣服已经收到了，宝贝非常喜欢，款式好看质量很好',
						imgs:["../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
					},
					{
						buyer:'健康是福',
						photo:"../../static/my/photo.png",
						color:"白色",
						size:"100",
						praiseNum:4,
						isPraise:false,
						comments:[],
						content:'衣服已经收到了，宝贝非常喜欢，款式好看质量很好',
						imgs:["../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
					},
					{
						buyer:'健康是福',
						photo:"../../static/my/photo.png",
						color:"白色",
						size:"100",
						praiseNum:4,
						isPraise:false,
						comments:[],
						content:'衣服已经收到了，宝贝非常喜欢，款式好看质量很好',
						imgs:["../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
					}
				],
				commentsTotal:0,
				commentsList:[]
			}
		},
		methods:{
			praiseClick(index){
				this.list[index].isPraise=!this.list[index].isPraise;
			},
			close(){
				this.$refs.popup.close();
			},
			open(index){
			    this.$refs.popup.open();
				this.commentsList=this.list[index].comments;
				this.commentsTotal=this.list[index].comments.length;
			},
		}
	}
</script>

<style lang="less" scoped>
	.list_view{
		.list_item{
			background-color: #FFFFFF;
			padding: 20rpx;
			margin-bottom: 20rpx;
			.top{
				image{
					width: 50rpx;
					height: 50rpx;
					border-radius: 25rpx;
				}
				text{
					font-size: 32rpx;
					color: #333333;
					position: relative;
					top: -14rpx;
					margin-left: 10rpx;
				}
			}
			.goods_model{
				font-size: 28rpx;
				color: #999999;
			}
			.content{
				font-size: 30rpx;
				color: #333333;
				margin-bottom: 20rpx;
			}
			.eva_img_view{
				image{
					width: 32%;
					margin-left: 1%;
					height: 200rpx;
					&:first-child{
						margin-left: 0;
					}
				}
			}
			.list_item_bottom{
				text-align: right;
				font-size: 28rpx;
				color: #6E6E6E;
				padding: 10rpx;
				view{
					display: inline-block;
					margin-right: 20rpx;
					image{
						width: 32rpx;
						height: 32rpx;
						position: relative;
						top: 6rpx;
						margin-right: 6rpx;
					}
				}
				
			}
		}
	}
	.bottom_pop{
		height: 820rpx;
		background-color: #F9F9F9;
		padding-bottom: 10rpx;
		.bottom_pop_title{
			background-color: #FFFFFF;
			padding: 20rpx;
			border-bottom: 1rpx solid #EEEEEE;
			text-align: center;
			position: relative;
			.close{
				position: absolute;
				right: 20rpx;
				top: 10rpx;
				color: #999999;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
		.comment_list{
			background-color: #FFFFFF;
			height: 600rpx;
			overflow-y: auto;
			.comment_item{
				padding: 20rpx;
				border-bottom: 1rpx solid #EEEEEE;
				.comment_item_top{
					image{
						width: 50rpx;
						height: 50rpx;
						border-radius: 25rpx;
					}
					text{
						color: #333333;
						font-size: 32rpx;
						position: relative;
						top: -14rpx;
						margin-left: 10rpx;
					}
				}
				.comment_item_content{
					padding-left: 50rpx;
					color: #666666;
					font-size: 28rpx;
				}
				.comment_item_bottom{
					padding-left: 50rpx;
					color: #999999;
					font-size: 24rpx;
				}
			}
			.nodata{
				text-align: center;
				margin-top: 280rpx;
				color: #666666;
				font-size: 28rpx;
			}
		}
		.input_view{
			border-top: 1rpx solid #EEEEEE;
			background-color: #F9F9F9;
			height: 50rpx;
			padding: 20rpx;
			display: flex;
			input{
				background-color: #FFFFFF;
				color: #666666;
				font-size: 30rpx;
				width: 80%;
				padding: 14rpx;
				border: 1rpx solid #EEEEEE;
				border-radius: 8rpx;
			}
			button{
				width: 20%;
				background-color: #d81e06;
				color: #FFFFFF;
				font-size: 32rpx;
				height: 70rpx;
				line-height: 70rpx;
			}
		}
	}
</style>
