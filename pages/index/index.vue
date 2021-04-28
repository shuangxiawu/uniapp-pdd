<template>
	<view>
		<view class="search_top">
			 <input class="uni-input"  placeholder="商品名" @focus="onFocusSearch()"/>
		</view>
		<scroll-view scroll-x="true" class="type_view">
			<view class="type_view_item" v-for="(classify,index) in classifyArr" :key="index"  @click="selectStateType(index,classify.name)">
				<text class="number" :class="{activation: classify.name == selectStateIndex}">{{classify.name}}</text>
				<view class="line_view" v-if="classify.name == selectStateIndex"></view>
			</view>
		</scroll-view>
		<view class="classify_list" v-if="indexClassify.children.length>0&&(indexClassify.name == selectStateIndex)">
			<view class="classify_list_view">
				<view v-for="(item,index2) in indexClassify.children" :key="index2" class="classify_item" v-if="index2<5">
					<view><image :src="item.img"></image></view>
					<view><text>{{item.name}}</text></view>
				</view>
			</view>
			<view class="classify_list_view">
				<view v-for="(item,index3) in indexClassify.children" :key="index3" class="classify_item" v-if="index3>4">
					<view><image :src="item.img"></image></view>
					<view><text>{{item.name}}</text></view>
				</view>
			</view>
		</view>
		<view class="product_view">
			<view class="product_list">
				<view class="product_list">
					<view class="product_item" v-for="(item,index) in selectGoods" :key="index"  :class="{'product_item_right':index%2 == 1}" @click="openPage('/pages/goodsDetail/index')">
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
				selectStateIndex:'推荐',
				classifyArr:[
					{
						name:'推荐',
						children:[]
					},
					{
						name:'母婴',
						children:[
							{
								name:'春上新',
								img:'../../static/product_1/infantMom_1.jpg',
								children:["全部","套装","裤子","运动鞋","裙子","外套","T恤","婴儿服","卫衣","帆布鞋","学步鞋","针织毛衣","孕妇装"]
							},
							{
								name:'童装',
								img:'../../static/product_1/infantMom_2.jpg',
								children:["全部","套装","裤子","T恤/POLO","裙子","夹克大衣","内衣裤","卫衣绒衫","儿童袜子","衬衫","家居服","帽子配饰","婴儿装","马甲","毛衣针织","亲子装",
								"运动户外服","婴儿礼盒","背心吊带","民族演出服","其他","泳衣裤","棉服","羽绒服","汉服"]
							},
							{
								name:'童鞋',
								img:'../../static/product_1/infantMom_3.jpg',
								children:["全部","学步鞋","帆布鞋","凉鞋","运动鞋","雨鞋","拖鞋","皮鞋","布鞋","婴儿鞋","板鞋","亲子鞋","舞蹈鞋","鞋配件","靴子","棉鞋"]
							},
							{
								name:'玩具文娱',
								img:'../../static/product_1/infantMom_4.jpg',
								children:["全部","积木拼插","电动遥控","早教益智","户外玩具","戏水玩具","模型玩具","潮玩手办","儿童玩具枪","毛绒玩具","娃娃公仔","过家家玩具","学习绘画","婴幼儿玩具","书包箱包","其他"]
							},
							{
								name:'儿童寝居',
								img:'../../static/product_1/infantMom_5.jpg',
								children:["全部","凉席蚊帐","睡袋抱被","推车","婴儿床","宝宝餐椅","安全防护","儿童床品","儿童家具","出行用品","摇篮摇椅","其他"]
							},
							{
								name:'洗护喂养',
								img:'../../static/product_1/infantMom_6.jpg',
								children:["全部","洗澡用具","牙膏牙刷","洗浴护肤","洗衣清洁","牙胶","驱蚊用品","水杯水壶","理发量温","奶瓶奶嘴","口水巾","母婴电器","儿童餐具","浴巾浴袍"]
							},
							{
								name:'尿裤湿巾',
								img:'../../static/product_1/infantMom_7.jpg',
								children:["全部","纸尿裤","拉拉裤","纸尿片","布尿裤","隔尿垫","湿巾"]
							},
							{
								name:'童车出行',
								img:'../../static/product_1/infantMom_8.jpg',
								children:["全部","电动车","头盔护具","滑板","滑板车","轮滑","扭扭车","三轮车","学步车","推车","自行车","腰凳背带","出行用品","学步带","安全座椅"]
							},
							{
								name:'孕妈专区',
								img:'../../static/product_1/infantMom_9.jpg',
								children:["全部","孕妇装","孕妇裤","文胸内裤","哺乳家居服","待产用品","产后塑身","产妇帽鞋袜","孕妈护肤","洗护护肤","妈咪包装","孕妈营养","哺乳用品","孕妈美妆","防溢乳垫"]
							},
							{
								name:'奶粉辅食',
								img:'../../static/product_1/infantMom_10.jpg',
								children:["全部","儿童奶粉","宝宝辅食","宝宝营养","宝宝零食","配方奶粉","其他"]
							}
						]
					},
					{
						name:'鞋包',
						children:[]
					},
					{
						name:'百货',
						children:[]
					},
					{
						name:'女装',
						children:[]
					},
					{
						name:'车品',
						children:[]
					},
					{
						name:'水果',
						children:[]
					},
					{
						name:'食品',
						children:[]
					},
					{
						name:'电脑',
						children:[]
					},
					{
						name:'男装',
						children:[]
					},
					{
						name:'美妆',
						children:[]
					},
					{
						name:'家纺',
						children:[]
					},
					{
						name:'电器',
						children:[]
					},
					{
						name:'运动',
						children:[]
					},
					{
						name:'家具',
						children:[]
					},
					{
						name:'家装',
						children:[]
					},
					{
						name:'医药',
						children:[]
					},
					{
						name:'手机',
						children:[]
					},
				],
				indexClassify:{children:[],name:'推荐'},
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
			selectStateType(index,type){
				this.selectStateIndex = type;
				this.indexClassify=this.classifyArr[index];
			},
			openPage(url){
				uni.navigateTo({
					url: url
				})
			},
			onFocusSearch(){
				uni.navigateTo({
					url: "../searchPage/index"
				})
			}
		}
	}
</script>

<style  lang="less" scoped>
	.search_top{
		background-color: #fff;
		padding:20rpx 40rpx;
		margin-top: 0;
		uni-input{
			background-color: #f5f5f5;
			padding: 20rpx;
			text-align: center;
			border-radius: 8rpx;
			background-image: url('../../static/home/search.png');
			background-repeat: no-repeat;
			background-size: 42rpx 42rpx;
			background-position: 38% 50%;
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
	.classify_list{
		background-color: #FFFFFF;
		padding-bottom:20rpx;
		.classify_list_view{
			display: flex;
			.classify_item{
				width: 20%;
				text-align: center;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				text{
					font-size: 26rpx;
					color: #666666;
				}
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
