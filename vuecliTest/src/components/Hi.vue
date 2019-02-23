<template>
      <div>
        <h2>通信工程专业历届女生人数</h2>
      <div id="chart" ref="chart"></div>
      </div>
</template>



<script>
import echarts from "echarts";  //引入echarts
export default {
  data() {
    return {
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {     //初始化
      this.initChart(); 
      this.getChartData();
      window.addEventListener("resize", () => {
        this.resize();           //监听屏幕大小，来刷新画布
      });
    });
  },
  methods: {
    //查询图表数据  动态的改变数据
    getChartData() {
      // this.chart.setOption({
      //   xAxis: {
      //     data: this.xAxisdata
      //   },
      //   series: {
      //     data: this.seriesdata
      //   }
      // });
      this.chart.hideLoading();
    },
    //初始化图表
    initChart() {
      let option = {
        title: {
        },
         tooltip: {
          trigger: "axis",
          formatter: "时间 : {b}年<br/>人数：{c}人",
          axisPointer: {
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "温度",
            type: "line",
            symbol:"circle",
            symbolSize:[8,8],
            itemStyle:{color:"#43B9E1"},
            lineStyle:{
              color:"#43B9E1"
            },
            data: [9, 
              {
                value : 8,
                label: {
                  show:true,
                  formatter:"女生最少",
                  fontSize:"18"
                },
                symbol:"roundRect",
                symbolSize:[8,16],
                itemStyle:{
                  color:"#E15F1B"
                }
              },
              15,13,20, 
              {
              
                value : 23,
                symbol:"roundRect",
                symbolSize:[8,16],
                label: {
                  show:true,
                  formatter:"女生最多",
                  fontSize:"18"
                },
                itemStyle:{
                  color:"#AF16E9"
                }
            }, 
            22, 20,20,19
            ],
          },
        ]
      };

      this.chart = echarts.init(this.$refs.chart);   //定义
      this.chart.showLoading();  //等待的显示
      this.chart.setOption(option);  //展示
      this.chart.resize(); //刷新画布
    },
    resize() {
      if (this.chart) {
        this.chart.resize();
      }
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
#chart {
  width: 100%;
  height: 400px;
}
h2{
  text-align: center;
  color:#1C9956;
}
</style>

