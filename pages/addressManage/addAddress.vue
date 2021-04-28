<template>
	<view>
		<view class="form_item">
			<text>收货人</text>
			<input class="uni-input" v-model="form.name" placeholder="请输入收货人姓名" />
		</view>
		<view class="form_item">
			<text>收货人</text>
			<input class="uni-input" v-model="form.tel" placeholder="请输入手机号" />
		</view>
		<view class="form_item">
			<text>选择地址</text>
			<view @click="openPicker()">
				<text v-if="region">{{region}}</text>
				<image v-if="!region" src="../../static/my/location.png"></image>
			</view>
		</view>
		<view class="form_item">
			<text>详细地址</text>
			<input class="uni-input" v-model="form.address" placeholder="请输入详细地址" />
		</view>
		<view class="add_address">
			<button type="primary" @click="saveFun()">保存</button>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import lotusAddress from "../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	export default{
		components:{
			"lotus-address":lotusAddress
		},
		data(){
			return{
				form:{
					name:'',
					tel:'',
					province:'',
					city:'',
					area:'',
					address:''
				},
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:'',
				},
				region:''
			}
		},
		methods:{
			 //打开picker
			openPicker() {
				this.lotusAddressData.visible = true;
				this.lotusAddressData.provinceName = this.form.province;
				this.lotusAddressData.cityName = this.form.city;
				this.lotusAddressData.townName = this.form.area;
			},
			//回传已选的省市区的值
			choseValue(res){
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if(res.isChose){
					this.lotusAddressData.provinceName = res.province;//省
					this.lotusAddressData.cityName = res.city;//市
					this.lotusAddressData.townName = res.town;//区
					this.form.province=res.province;
					this.form.city=res.city;
					this.form.area=res.town;
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			saveFun(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.form_item{
		display: flex;
		color: #333333;
		background-color: #FFFFFF;
		padding: 30rpx 20rpx;
		border-bottom: 1rpx solid #EEEEEE;
		font-size: 28rpx;
		text{
			display: block;
			width: 40%;
		}
		input{
			width: 60%;
			text-align: right;
			font-size: 28rpx;
		}
		view{
			width: 60%;
			text-align: right;
			font-size: 28rpx;
			text{
				width: 100%;
			}
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.add_address{
		padding: 20rpx;
		button{
			background-color: #d81e06;
			color: #FFFFFF;
		}
	}
</style>
