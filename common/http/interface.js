/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */
import $Config from '@/config.js'
export default {
	config: {
		baseUrl: $Config.server_url,
		data: {},
		method: "POST",
		dataType: "json",
		/* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: function(res) {
			
			if (res.statusCode == 200) {
				if (res.data.status == 200) {
					return res.data
				} else if (res.data.status == 499 || res.data.status == 500) {
					if(res.data.error == 'no auth record found'||res.data.error == 'no token'||res.data.error == '访问凭证没有找到'||res.data.error == '没有访问凭证'){
						uni.showToast({
							title: "用户未登录，请登录",
							icon: "none",
							duration: 2000
						})
						setTimeout(function(){
							uni.reLaunch({
								url:'../login/login'
							});
						},2000);
						
					}
					return res.data
				} else if (res.data.error == '访问凭证没有找到' || res.data.error == 'no token') {
					uni.showToast({
						title: "用户未登录，请登录",
						icon: "none",
						duration: 2000
					})
					setTimeout(function(){
						uni.reLaunch({
							url:'../login/login'
						});
					},2000);
				} else {
					console.log(JSON.stringify(res));
					return res.data
				}
			} else {
				console.log(JSON.stringify(res));
				return res.data
			}
		}
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		options.async = options.async || true
		options.header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'Authorization': "Bear " + uni.getStorageSync('user_token')
		}
		return new Promise((resolve, reject) => {
			let _config = null
			let completed = false;
			options.complete = (response) => {
				completed = true;
				uni.hideLoading();
				let statusCode = response.statusCode;
				response.config = _config;
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					response = newResponse
				}
				if (process.env.NODE_ENV === 'development') {
					// console.log("【" + _config.requestId + "】 结果：", response)
				}
				if (statusCode === 200) { //成功
					resolve(response);
				} else {
					reject(response)
				}
			}

			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()

			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}

			if (process.env.NODE_ENV === 'development') {
				// console.log("【" + _config.requestId + "】 地址：" + _config.url)
				// if (_config.data) {
				// 	console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
				// }
			}
			uni.showLoading({
				title: '加载中'
			});
			uni.request(_config);

			setTimeout(() => {
				if (!completed) {
					uni.hideLoading();
					uni.showToast({
						title: "加载失败，请稍后重试",
						icon: "none",
						duration: 2000
					})
				}
			}, 8000)

		});
	}
}