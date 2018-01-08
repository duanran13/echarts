/**
 * Created by duan.ran on 2018/1/8.
 */
//    引入ECharts主模块
var echarts = require('./node_modules/echarts/lib/echarts');
//引入柱状图
require('./node_modules/echarts/lib/chart/bar');
//引入提示框和标题组件
require('./node_modules/echarts/lib/component/tooltip');
require('./node_modules/echarts/lib/component/title');
//初始化ECharts实例
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title:{
        text:'Echarts 入门'
    },
    tooltip:{},
    xAxis:{
        data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
    },
    yAxis:{},
    series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,10,10,20]
    }]
});