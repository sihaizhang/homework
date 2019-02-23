3333333333333333<template>
	  <table border="1" bordercolor="red" width="200" class="gridtable">
		  	<tr>
		  		<th>人员信息</th>
		  		<th>男</th>
		  		<th>女</th>
		  		<th>总人数</th>
		  	</tr>
		  	<tr>
		  		<td>通信14</td>
		  		<td>21</td>
		  		<td>20</td>
		  		<td>41</td>
		  	</tr>
		  	<tr>
		  		<td>通信15</td>
		  		<td>26</td>
		  		<td>23</td>
		  		<td>49</td>
		  	</tr>
		  	<tr>
		  		<td>通信16</td>
		  		<td>34</td>
		  		<td>22</td>
		  		<td>56</td>
		  	</tr>
	  </table>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table.gridtable {
	font-family: verdana,arial,sans-serif;
	font-size:22px;
	color:#333333;
	border-width: 1px;
	border-color: #666666;
	border-collapse: collapse;
}
table.gridtable th {
	border-width: 1px;
	padding: 16px 66px;
	border-style: solid;
	border-color: #666666;
	background-color: #dedede;
	
}
table.gridtable td {
	border-width: 1px;
	padding: 16px 66px;
	border-style: solid;
	border-color: #666666;
	background-color: #ffffff;
	
}

</style>
