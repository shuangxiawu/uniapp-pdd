<template>
	<view>
		<view class="goods_img">
			<imgsBanner :imgList='goodsInfo.imgs' :currentImg='currentImg'></imgsBanner>
		</view>
		<view class="price">
			￥<text>{{goodsInfo.price}}</text>
		</view>
		<view class="desc">
			<text class="desc_text">{{goodsInfo.desc}}</text><text class="goods_equity">{{goodsInfo.equity}}</text>
		</view>
		<view class="more_equity" @click="open()">
			<view class="left_view">
				<view v-for="(item,index) in goodsInfo.moreEquity">
					<text v-if="index>0">・</text> {{item}} 
				</view>
			</view>
			<view class="right_view">
				<image src="../../static/my/right.png"></image>
			</view>
		</view>
		<view class="goods_evaluations">
			<view class="goods_evaluation_title" @click="openPage('/pages/goodsDetail/evaluationList')">
				<view class="left_view">商品评价（{{goodsInfo.evaluationNum}}）</view>
				<view class="right_view">查看全部 <image src="../../static/my/right.png"></image></view>
			</view>
			<view class="eva_list">
				<view class="eva_item" v-for="(eva,index) in goodsInfo.evaluations" :key="index">
					<view class="top"><image :src="eva.photo"></image><text>{{eva.buyer}}</text></view>
					<view class="content">{{eva.content}}</view>
				</view>
			</view>
		</view>
		<view class="goods_question_view">
			<view class="goods_question_title"  @click="openPage('/pages/goodsDetail/questionList')">
				<view class="left_view">商品答疑（{{goodsInfo.questionNum}}）</view>
				<view class="right_view">查看全部 <image src="../../static/my/right.png"></image></view>
			</view>
			<view class="question_list">
				<view v-for="(item,index) in goodsInfo.questions" :key="index" class="question_item">
					<view class="left_view">{{item.question}}</view>
					<view class="right_view">{{item.num}}人同问</view>
				</view>
			</view>
		</view>
		<view class="store_info">
			<view class="left_view"><image :src="goodsInfo.storePhoto"></image><text>{{goodsInfo.storeName}}</text></view>
			<view class="right_view"><button>进店逛逛</button></view>
		</view>
		<view class="goods_detail_view">
			<view class="detail_item" v-for="(item,index) in goodsInfo.details" :key="index">
				<view class="detail_item_left">{{item.name}}</view>
				<view class="detail_item_right">{{item.val}}</view>
			</view>
		</view>
		<view class="goods_img_list">
			<view class="img_view" v-for="(item,index) in goodsInfo.imgs" :key="index">
				<image :src="item"  mode="widthFix"></image>
			</view>
		</view>
		<view class="product_view">
			<view class="product_title">相似商品</view>
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
		<view class="bottom_view">
			<view class="bottom_left">
				<view class="bottom_left_item"  @click="openPage('/pages/shopInfo/index')">
					<view><image src="../../static/home/store.png"></image></view>
					<text>店铺</text>
				</view>
				<view class="bottom_left_item" v-if="!goodsInfo.isCollect" @click="collectFun()">
					<view><image src="../../static/home/collect.png"></image></view>
					<text>收藏</text>
				</view>
				<view class="bottom_left_item"  v-if="goodsInfo.isCollect" @click="collectFun()">
					<view><image src="../../static/home/collect_1.png"></image></view>
					<text>已收藏</text>
				</view>
				<view class="bottom_left_item">
					<view><image src="../../static/home/message_2.png"></image></view>
					<text>客服</text>
				</view>
			</view>
			<view class="bottom_center">
				<view class="goods_price">
					￥{{goodsInfo.origPrice}}
				</view>
				<view class="text">
					单独购买
				</view>
			</view>
			<view class="bottom_right" @click="openSelect()">
				<view class="goods_price">
					￥{{goodsInfo.price}}
				</view>
				<view class="text">
					发起拼单
				</view>
			</view>
		</view>
		<!-- 服务说明 -->
		<view>
			<uni-popup ref="popup" type="bottom">
				<view class="bottom_pop">
					<view class="bottom_pop_title">服务说明<view class="close" @click="close()">×</view></view>
					<view class="bottom_pop_content">
						<view class="title">退货包运费</view>
						<view class="content">
							订单发货后90天以内如果申请退货退款或换货，拼多多将补贴退货运费
						</view>
					</view>
					<view class="bottom_pop_content">
						<view class="title">全场包邮</view>
						<view class="content">
							所有商品包邮（偏远地区除外）
						</view>
					</view>
					<view class="bottom_pop_content">
						<view class="title">7天无理由退货</view>
						<view class="content">
							满足相应条件时，消费者可申请“7天无理由退货”
						</view>
					</view>
					<view class="bottom_pop_content">
						<view class="title">48小时发货</view>
						<view class="content">
							若超时未发货，消费者将会收到至少3元无门槛代金券
						</view>
					</view>
					<view class="bottom_pop_content">
						<view class="title">极速退款</view>
						<view class="content">
							拼单成功6小时内，待发货状态下，提交退款申请将立即退款
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
		<!-- 颜色尺码选择 -->
		<view>
			<uni-popup ref="popup2" type="bottom">
				<view class="size_top">
					<view class="size_top_title">￥{{goodsInfo.price}}<view class="close" @click="closeSelect()">×</view></view>
					<view v-if="sizeSelect" class="select_result">已选择：{{sizeSelect}}</view>
					<view v-if="!sizeSelect" class="select_result">请选择</view>
					<view class="select_view" v-if="goodsInfo.selectArr.length>0">
						<view v-for="(item,index) in goodsInfo.selectArr" :key="index">
							<view class="select_name">{{item.name}}</view>
							<view class="select_value">
								<text v-for="(val,index2) in item.value" @click="selectClick(index,index2)" :class="{selected:(sizeSelect.indexOf(val)>-1)}">{{val}}</text>
							</view>
						</view>
						<view class="select_num">
							<view class="left_view">数量</view>
							<view class="right_view">
								<button :disabled="number==0" @click="minusNum()">－</button>
								<input class="uni-input" type="number"  v-model="number"/>
								<button @click="addNum()">＋</button>
							</view>
						</view>
					</view>
					<view class="size_bottom">
						<button @click="sureFun()">确定</button>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import imgsBanner from '../../components/imgsBanner-tag/imgsBanner-tag.vue'
	export default{
		components:{imgsBanner},
		data(){
			return{
				currentImg:0,
				sizeSelect:'',
				sizeSelectArr:[],
				number:0,
				goodsInfo:{
					isCollect:false,
					imgs:["../../static/goodsDetail/1.jpg","../../static/goodsDetail/2.jpg","../../static/goodsDetail/3.jpg",
					"../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg","../../static/goodsDetail/6.jpg"],
					desc:'2020韩版长袖婴幼儿女童连衣裙1-2-3岁4-5岁女宝宝公主裙春秋装新款',
					equity:'退货包运费',
					price:28.9,
					origPrice:45,
					storeName:'欣禾妞妞童装',
					storePhoto:'../../static/goodsDetail/4.jpg',
					moreEquity:['退货包运费','全场包邮','7天无理由退货'],
					evaluationNum:4932,
					questionNum:6,
					selectArr:[
						{name:'颜色',value:['粉红色',"白色"]},
						{name:'参考身高',value:["73 建议身高70厘米左右","80 建议身高75厘米左右","90 建议身高85厘米左右","100 建议身高95厘米左右","110 建议身高105厘米左右"]}
					],
					evaluations:[
						{
							buyer:'Doris',
							photo:"../../static/my/photo.png",
							color:"粉红色",
							size:"90",
							content:'裙子很漂亮，好看，喜欢的赶紧下单吧，我家的身高75，买的90得穿的正好',
							imgs:["../../static/goodsDetail/1.jpg","../../static/goodsDetail/2.jpg","../../static/goodsDetail/3.jpg"]
						},
						{
							buyer:'健康是福',
							photo:"../../static/my/photo.png",
							color:"白色",
							size:"100",
							content:'衣服已经收到了，宝贝非常喜欢，款式好看质量很好',
							imgs:["../../static/goodsDetail/3.jpg","../../static/goodsDetail/4.jpg","../../static/goodsDetail/5.jpg"]
						}
					],
					questions:[
						{
							question:'偏大还是偏小？',
							num:143
						},
						{
							question:'100码多大穿的？',
							num:57
						}
					],
					details:[
						{name:'面料/材质',val:'其他/棉'},
						{name:'成分含量',val:'81%（含）-90%（含）'},
						{name:'图案',val:'卡通动漫'},
						{name:'件数',val:'单件'},
						{name:'袖长',val:'长袖'},
						{name:'裙长',val:'短裙'}
					]
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
			open(){
			    this.$refs.popup.open();
			},
			openSelect(){
			    this.$refs.popup2.open();
			},
			close(){
				this.$refs.popup.close();
			},
			closeSelect(){
				this.$refs.popup2.close();
			},
			openPage(url){
				uni.navigateTo({
					url: url
				})
			},
			addNum(){
				this.number++
			},
			minusNum(){
				this.number--
			},
			selectClick(index,index2){
				const _this=this;
				let obj={
					name:_this.goodsInfo.selectArr[index].name,
					size:_this.goodsInfo.selectArr[index].value[index2]
				};
				if(_this.sizeSelectArr.length>0){
					_this.sizeSelectArr.forEach(function(item,index3){
						if(item.name==_this.goodsInfo.selectArr[index].name){
							_this.sizeSelectArr[index3]=obj;
						}else{
							let string=JSON.stringify(_this.sizeSelectArr);
							if(string.indexOf(_this.goodsInfo.selectArr[index].name)==-1){
								_this.sizeSelectArr.push(obj);
							}
						}
					})
				}else{
					_this.sizeSelectArr.push(obj);
				}
				if(_this.sizeSelectArr.length>0){
					_this.sizeSelect="";
					_this.sizeSelectArr.forEach(function(item,index4){
						let str=item.size;
						_this.sizeSelect+="         "+str;
					})
				}
				
			},
			sureFun(){
				if(this.sizeSelectArr.length<this.goodsInfo.selectArr.length){
					uni.showToast({
						title: "请选择",
						icon: 'none',
						duration: 2000,
					})
					return
				}
				this.$refs.popup2.close();
				_this.sizeSelectArr=[];
				_this.sizeSelect="";
			},
			collectFun(){
				this.goodsInfo.isCollect=!this.goodsInfo.isCollect;
			},
		}
	}
</script>

<style  lang="less" scoped>
	.goods_img{
		background-color: #FFFFFF;
	}
	.price{
		color: #d81e06;
		padding: 20rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		text{
			font-size: 36rpx;
		}
	}
	.desc{
		padding: 20rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid #EEEEEE;
		.desc_text{
			font-size: 30rpx;
			color: #333333;
			font-weight: bold;
		}
		.goods_equity{
			display: inline-block;
			border-radius: 4rpx;
			font-size: 30rpx;
			background-color: #4CD964;
			margin-left: 20rpx;
			padding: 0 10rpx;
			color: #FFFFFF;
		}
	}
	.more_equity{
		background-color: #FFFFFF;
		display: flex;
		color: #777777;
		font-size: 30rpx;
		padding: 20rpx;
		image{
			width: 32rpx;
			height: 32rpx;
			position: relative;
			top: 6rpx;
		}
		.left_view{
			width: 90%;
			view{
				display: inline-block;
			}
		}
		.right_view{
			width: 10%;
			text-align: right;
		}
	}
	.goods_evaluations{
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.goods_evaluation_title{
			display: flex;
			padding-bottom: 20rpx;
			.left_view{
				width: 50%;
				font-size: 32rpx;
				color: #333333;
			}
			.right_view{
				width: 50%;
				font-size: 30rpx;
				color: #999999;
				text-align: right;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.eva_list{
			.eva_item{
				border-top: 1rpx solid #EEEEEE;
				padding-bottom: 20rpx;
				font-size: 30rpx;
				text{
					margin-left: 10rpx;
				}
				image{
					width: 50rpx;
					height: 50rpx;
					border-radius: 25rpx;
					position: relative;
					top: 12rpx;
				}
				.content{
					color: #666666;
				}
			}
			
		}
	}
	.goods_question_view{
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.goods_question_title{
			display: flex;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #EEEEEE;
			.left_view{
				width: 50%;
				font-size: 32rpx;
				color: #333333;
			}
			.right_view{
				width: 50%;
				font-size: 30rpx;
				color: #999999;
				text-align: right;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.question_list{
			.question_item{
				display: flex;
				padding:10rpx 0;
				.left_view{
					width: 70%;
					font-size: 32rpx;
					color: #333333;
				}
				.right_view{
					width: 30%;
					font-size: 30rpx;
					color: #999999;
					text-align: right;
				}
			}
		}
	}
	.store_info{
		background-color: #FFFFFF;
		display: flex;
		margin-top: 20rpx;
		padding: 20rpx;
		.left_view{
			width: 60%;
			color: #333333;
			font-size: 32rpx;
			image{
				width: 80rpx;
				height: 80rpx;
			}
			text{
				position: relative;
				top: -30rpx;
				margin-left: 20rpx;
			}
		}
		.right_view{
			width: 40%;
			text-align: right;
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
		}
	}
	.goods_detail_view{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 20rpx;
		.detail_item{
			background-color: #f5f5f5;
			display: flex;
			padding: 10rpx;
			font-size: 30rpx;
			.detail_item_left{
				width: 30%;
				color: #666666;
			}
			.detail_item_right{
				color: #333333;
			}
		}
	}
	.goods_img_list{
		.img_view{
			image{
				width: 100%;
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
			padding: 20rpx;
			font-size: 30rpx;
		}
		.product_list{
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
	.bottom_view{
		position: fixed;
		width: 100%;
		height: 120rpx;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		.bottom_left{
			width: 40%;
			font-size: 28rpx;
			color: #999999;
			display: flex;
			.bottom_left_item{
				width: 33%;
				text-align: center;
				view{
					width: 100%;
					text-align: center;
					image{
						width: 40rpx;
						height: 40rpx;
						display: block;
						position: relative;
						left: 30rpx;
					}
				}
				
			}
		}
		.bottom_center{
			width: 30%;
			text-align: center;
			font-size: 36rpx;
			height: 120rpx;
			color: #FFFFFF;
			background-color: #f7a195;
		}
		.bottom_right{
			width: 30%;
			text-align: center;
			background-color: #d81e06;
			color: #FFFFFF;
			font-size: 36rpx;
			height: 120rpx;
		}
	}
	.bottom_pop{
		background-color: #FFFFFF;
		padding: 20rpx 20rpx 50rpx 20rpx;
		.bottom_pop_title{
			padding: 10rpx 0;
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
		.bottom_pop_content{
			font-size: 30rpx;
			padding: 10rpx 20rpx;
			.title{
				color: #333333;
			}
			.content{
				color: #999999;
			}
		}
	}
	.size_top{
		background-color: #FFFFFF;
		padding: 20rpx 0rpx 70rpx 0rpx;
		height: 840rpx;
		.size_top_title{
			padding: 10rpx 20rpx;
			border-bottom: 1rpx solid #EEEEEE;
			position: relative;
			color: #d81e06;
			.close{
				position: absolute;
				right: 20rpx;
				top: 10rpx;
				color: #999999;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
		.select_result{
			padding: 20rpx;
			font-size: 30rpx;
		}
		.select_view{
			height: 660rpx;
			padding: 0 20rpx;
			overflow-y: auto;
			font-size: 30rpx;
			.select_value{
				text{
					display: inline-block;
					padding:10rpx 20rpx;
					font-size: 30rpx;
					color: #333333;
					background-color: #F5F5F5;
					border-radius: 8rpx;
					margin-right: 20rpx;
					margin-top: 20rpx;
				}
				.selected{
					background: #d81e06;
					color: #FFFFFF;
				}
			}
			.select_num{
				border-top: 1rpx solid #EEEEEE;
				border-bottom: 1rpx solid #EEEEEE;
				padding: 20rpx 0;
				margin-top: 20rpx;
				margin-bottom: 50rpx;
				display: flex;
				.left_view{
					width: 30%;
				}
				.right_view{
					width: 70%;
					text-align: right;
					button{
						width: 80rpx;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 34rpx;
						font-weight: bold;
						display: inline-block;
						border-radius: 4rpx;
						text-align: center;
						padding: 0rpx 20rpx;
					}
					input{
						width: 100rpx;
						height: 60rpx;
						font-size: 34rpx;
						text-align: center;
						display: inline-block;
					}
				}
			}
		}
		.size_bottom{
			button{
				background-color: #d81e06;
				color: #FFFFFF;
				border-radius: 0;
			}
		}
	}
</style>
