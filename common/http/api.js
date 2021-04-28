import http from './interface'
function post(url,data){
	return http.request({
		url: url,
		method: 'POST',
		data
	})
}
export const fileCreate = (p) => post("/fileserver/create", p);




