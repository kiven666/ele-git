export default {
	//改变是否登录状态
	setLogin ({commit},platform){
		commit('SET_LOGIN',platform)
	},
	// 改变是否正在加载状态
	setLoading({commit},platform){
		commit('SET_LOADING',platform)
	},
	setWhichpage({commit},platform){
		commit('SET_WHICHPAGE',platform)
	},
	setHomepageMore({commit},platform){
		commit('SET_HOME_PAGE_MORE',platform)
	},
	// 添加订单
	setOrder({commit},platform){
		commit('SET_ORDER',platform)
	}
}