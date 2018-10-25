<template>
  <div id="tiao">
  <div>我是tiaoa</div>
  <div>
    <div>
      <div v-for="item in router">
        <div v-for="(it,index) in item.children" :key="index">
          <div v-for="(aa,index) in it.children" :key="index">
          <router-link :to="{path:item.path+''+it.path+'/'+aa.path}"><button>{{aa.name}}</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div class="ta"><router-view></router-view></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'tiao',
  data(){
    return{
      router:this.$router.options.routes
    }
  }
}
</script>

<style>
#tiao {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ta{
  width:100%;
  height:50%;
  background: #AEEEEE;
}
</style>
