/**
 * Created by duan.ran on 2018/1/8.
 */
//引入echarts主模块
import * as echarts from 'echarts/lib/echarts';
//引入折线
import 'echarts/lib/chart/line'
//引入提示框租金按、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
ecahrts.init(document.getElementById('main')).setOption({
    title:{text:'Line Chart'},
    tooltip:{},
    toolbox:{
        feature:{
            dataView:{},
            daveAsImage:{
                pixelRatio:2
            },
            restore:{}
        }
    },
    xAxis:{},
    yAxis:{},
    series:[{
        type:'line',
        smooth:true,
        data:[[12,5],[24,20],[36,36],[48,10],[60,10],[72,20]]
    }]
});
