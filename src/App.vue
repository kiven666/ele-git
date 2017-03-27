<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    asd(){
      return this.$store.getters.getCount
    }
  },
  methods:{
    change(arg){
      this.$store.dispatch('setCount',arg)
    }
  }
}
</script>

<style lang='less'>
  @import './css/common.less';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
