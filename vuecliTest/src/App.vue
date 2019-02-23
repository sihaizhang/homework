<template>
  
  <div id="app">
    <h1>后台管理系统</h1>
    
    <div class="menu">
      <router-link to="/">表单</router-link> 
      <router-link to="/Hi">图表</router-link>
      <router-link to="/Hi1">表格</router-link>
    </div>
    
    <div class="workingRoom">
      <router-view/>
    </div>
    
  </div>
    


 
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 1520px;
  background-image: url("p.jpg");
  background-position: top center;

}
div h1{
  color: #8ACE29;
  line-height: 100px;
  text-align: center;
  display: inline-block;
  width: 1520px;
  height: 100px;
 
}
  a{
        text-decoration: none;
      }
        /*a.router-link-active{
       color:blue; 
        background-color: #93C427;
      }*/
      div.menu{
        width: 200px;
          border:1px solid #5D53F5;
          float:left;
      }
      div.menu a{
          display:block;
          text-align: center;
          height: 30px;
          line-height: 30px;
      }
       
      div.workingRoom{
          padding-left:300px;
          padding-top: 50px;
          width: 900px;
          height: 900px;
           


      }
     
    
</style>
