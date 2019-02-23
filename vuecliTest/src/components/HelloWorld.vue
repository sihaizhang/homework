<template>
  <div class="one"> 
    <form method="get" class="two">
      &nbsp; &nbsp;姓名 &nbsp;&nbsp;<input type="text" name="phone"/>
      <br/>
      &nbsp; &nbsp;学号 &nbsp;&nbsp;<input type="text" name="pwd"/>
      <br/>
      &nbsp; &nbsp;性别 &nbsp;&nbsp;<input type="radio" name="sex" value="nan" checked="checked"/>男 <input type="radio" name="sex" value="nv"/>女<br/>
       &nbsp; &nbsp;年级 &nbsp;&nbsp;<input type="radio" name="love" value="one"/>大一 <input type="radio" name="love" value="two"/>大二<input type="radio" name="love" value="three"/> 大三<input type="radio" name="love" value="four"/> 大四
      <br/>
       
       &nbsp; &nbsp;生日 &nbsp;&nbsp;&nbsp;<select name="birth"><option value="0"  selected="selected">请选择</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option></select>年<select name="month"><option value="0"  selected="selected">请选择</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>月
      <br/>
      自我描述
      <br/>
       &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<textarea cols="15" rows="10" name="tex"></textarea><br/>
       &nbsp; &nbsp;文件 &nbsp;&nbsp;&nbsp;<input type="file"/>
      <br/>
      <br/>
      <input type="submit" value="注册"/>&nbsp; &nbsp;<input type="reset" value="重置注册"/>&nbsp; &nbsp;<input type="button" value="普通按钮"/>
      <br/>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.one{
  width: 900px;
  height: 900px;
}
.two{
  margin-left:300px;
}

</style>
