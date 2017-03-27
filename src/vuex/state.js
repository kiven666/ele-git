import {falseHotWord, falseOrder, falseBussinessbrief, falseBussinessInfo} from '../alldata/alldata.js'

export default {
	//是否在加载中
	isLoading:false,
	username:'admin',
	password:'admin',
	//当前哪个页面  homepage | order | myzone
	whichPage:'',
	//是否登录
	isLogin:false,
	// 假的热搜词
  	falseHotWord,
 	// 已完成订单
  	falseOrder,
  	// 商家简略信息
  	falseBussinessbrief,
 	 // 商家详细数据
  	falseBussinessInfo
}