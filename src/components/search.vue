<template>
<div>
	<!-- loading动画 -->
	  <div class="loading" v-if='isLoad'>
	    <img src="../images/loading.gif">
	  </div>
	<div v-if="showMe">
      <div class="re_search">
        <img src="../images/return.jpg" @click="$router.go(-1)">
        <input type="search" v-model="search_text" class="v-md" placeholder="请输入商品名称" @keydown.enter="search_method">
      </div>
      <oneShop v-for="(item, n) in search_res" :key="n" :a="item"></oneShop>
    </div>
</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import oneShop from './tpl/one_shop'


	export default {
		name:'search',
		data (){
			return {
				isLoad:false,
				showMe:false,
				search_text:'',
				search_res: [] // 搜索结果
			}
		},
		mounted(){
			this.isLoad = true;
			var time = Math.floor(Math.random()*2300);
			setTimeout(()=>{
				this.isLoad = false;
				this.showMe = true
			},time)
			this.search_method();
		},
		computed:{
			...mapGetters([
				'getFalseBussinessbrief'	//获取商家信息
			])
		},
		methods:{
			search_method () {
		      this.search_res = [];
		      var mainWord = this.$route.params.keyword;

		      if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
		        mainWord = this.search_text;
		      }
		      this.search_text = mainWord;
		      console.log('什么是？' + mainWord)
		      for (var x in this.getFalseBussinessbrief) {
		        if (this.getFalseBussinessbrief[x].shop_name.includes(mainWord)) {
		          this.search_res.push(this.getFalseBussinessbrief[x]);
		        }
		      }
		      console.log('搜索列表' + this.search_res)
		    }
		},
		components:{
			oneShop
		}
	}

</script>

<style lang="less" scoped>
	.re_search{
	  background:#0096ff;
	  line-height:0;
	  padding: .2rem;
	  img{
	    width:.6rem;
	    height:.6rem;
	  }
	  input[type="search"]{
	    display:inline-block;
	    height:.9rem;
	    width:8rem;
	    outline: none;
	    border: none;
	    border-radius:.45rem;
	    background:#f2f2f2;
	    box-sizing: border-box;
	    padding: 0 .5rem;
	    font-size:.4rem;
	  }
	}
</style>