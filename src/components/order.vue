<template>
	<div>
	  <!-- loading动画 -->
	  <div class="loading" v-if='isLoad'>
	    <img src="../images/loading.gif">
	  </div>
	  <div v-if="showMe">
		  <!-- 我只是个头 -->
		  <div class="back_box">
		    <div class="back_arrow" @click="$router.go(-1)">
		      <img src="../images/return.jpg">
		    </div>
		    <h3>订单</h3>
		  </div>
			
		  <div class="order_box">
	        <div v-for=" (item, index) in  getFalseOrder" class="order_one">
	          <div class="order_img">
	            <img src="../images/shop-logo.png" alt="">
	          </div>
	          <div class="order_info">
	            <header class="order_info_t">
	              <div class="order_title flex_align">
	                <p class="b_name">{{ item.store_name }}</p>
	                <p class="b_status">{{ item.order_state }}</p>
	              </div>
	              <p class="order_time">{{ item.order_birth_time }}</p>
	            </header>
	            <footer class="order_info_b flex_align">
	              <p class="order_brief_info">{{ item.order_brief_info }}</p>
	              <p class="order_price">￥{{ item.order_price }}</p>
	            </footer>
	            <div style="display:none;">{{ item.restaurant_id }}</div>
	          </div>
	        </div>
	      </div>

		  <fixNav></fixNav>
		</div>
	</div>
</template>

<script type="text/javascript">
	import fixNav from './tpl/fixNav';
	import { mapGetters } from 'vuex';

	export default {
		name:'order',
		data(){
			return {
				isLoad:false,
				showMe:true
			}
		},
		computed:{
			...mapGetters([
				'getLogin',
				'getFalseOrder'
			])
		},
		mounted(){
			console.log('对还是错' + this.getLogin)
			this.$store.dispatch('setWhichpage','order');
			if(!this.getLogin){
				this.$router.replace('/login');
			}else{
				this.isLoad = true;
				var time = Math.floor(Math.random()*2000);
				console.log('模拟加载用时' + time);
				setTimeout(() => {
					this.isLoad = false;
					this.showMe = true
				},time)
			}
		},
		methods:{

		},
		//组件注册
		components:{
			fixNav
		}
	}
	

</script>

<style lang="less" scoped>
	.back_box{
	  width:10rem;
	  height:1rem;
	  line-height:1rem;
	  position:fixed;
	  background:#0096ff;
	  top:0;
	  left:0;
	  right:0;
	  z-index: 999;
	  h3{
	    color:#fff;
	    width:100%;
	    display:block;
	    font-size:.52rem;
	    text-align:center;
	    font-weight: 700;
	  }
	  div.back_arrow{
	    width:1rem;
	    height:1rem;
	    position:absolute;
	    left:0;
	    top:0;
	    img{
	      width:.6rem;
	      height:.6rem;
	      position:absolute;
	      left:50%;
	      top:50%;
	      margin-left: -.3rem;
	      margin-top: -.3rem;
	    }
	  }
	}
	.order_box{
	  margin: 1rem 0 1.2rem;
	}
	.order_one{
	  background:#fff;
	  margin-bottom: .2rem;
	  .order_img{
	    width:1rem;
	    height:1rem;
	    float:left;
	    padding: .2rem .4rem;
	    img{
	      width:100%;
	    }
	  }
	  .order_info{
	    margin-left:1.6rem;
	    padding:.2rem .2rem 0 0;
	    box-sizing:border-box;
	    .order_info_t{
	      border-bottom: 1px solid #eee;
	      .order_title{
	        height:.6rem;
	        line-height:.6rem;
	        .b_name{
	          font-size:.4rem;
	        }
	        .b_status{
	          font-size:.35rem;
	          color:#333;
	        }
	      }
	      .order_time{
	        font-size:.3rem;
	        color:#999;
	        line-height:.6rem;
	      }
	    }
	    .order_info_b{
	      padding: 0.2rem 0;
	      .order_brief_info{
	        font-size: 0.346667rem;
	        color: #666;
	      }
	      .order_price{
	        text-align: right;
	        font-size: 0.346667rem;
	        color: #333;
	        font-weight: bold;
	      }
	    }
	  }
	}
</style>