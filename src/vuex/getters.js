//得到state的数据
export default {
	//是否在加载
	getLogin:(state) => state.isLogin,
	getuname:(state) => state.username,
	getpwd:(state) => state.password,
	//得到当前页面标签
	getwhichpage:(state) => state.whichpage,
	getpwd:(state) => state.password,
	// 得到热搜词
  	getFalseHotWord: (state) => state.falseHotWord,
  // 得到已完成订单
  	getFalseOrder: (state) => state.falseOrder,
  // 得到商家简略信息
  	getFalseBussinessbrief: (state) => state.falseBussinessbrief,
  // 得到商家详细数据
  	getFalseBussinessInfo: (state) => state.falseBussinessInfo
}