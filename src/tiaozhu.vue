<template>
  <div id="zhu">
  <div class="box">
    <div class="left">
      <ul v-for="item in router" :key="">
        <li v-for="(it,index) in item.children" :key="index">
          <router-link :to="{path:item.path+''+it.path}"><button>{{it.name}}</button></router-link>
        </li>
      </ul>
    </div>
    <div class="view-box">
    <router-view></router-view>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'zhu',
  data(){
    return{
      router:this.$router.options.routes
    }
  }
}
</script>

<style>
#zhu {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
.box{
  width:100%;
  height:500px;
  background:#ccc;
}
.left{
  width:30%;
  height:100%;
  background:blue;
   display: inline-block;
}
.view-box{
  width:764.5px;
  height:100%;
  background: yellow;
  display: inline-block;
  float: right;
}
ul{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
li{
  width: 100%;
  list-style: none;
  text-align: center;
  margin:0 auto;
  line-height: 500px;
}
</style>
