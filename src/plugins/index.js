import './device'
import './jquery.finger'
import Swiper from './Swiper'
import Scroller from './scroller'
import DatePicker from './datetimepicker'
import Province from './province.json'
import City from './city.json'
import County from './county.json'

// 引入 ECharts 主模块
import Echarts from 'echarts/lib/echarts';

// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
//import 'echarts/lib/component/tooltip';
//import 'echarts/lib/component/title';


(function(){

    var plugins = {

        swiper: function(opt){
             return new Swiper(opt)
        },

        echarts: Echarts,

        scroller: function(elem, options){
            return new Scroller(elem, options)
        },

        datePicker: function(options){
            var opt = {
                yearRow: '{value}年',
                monthRow: '{value}月',
                dayRow: '{value}日',
                hourRow: '{value}点',
                minuteRow: '{value}分'
            };
            for(var key in options){
                opt[key] = options[key];
            }
            return new DatePicker(opt)
        },

        province: Province,

        city: City,

        county: County
        
    }

    window.VUX = window.VUX || {};

    //应用插件到VUX
    Object.keys(plugins).forEach(function(k) {
        window.VUX[k] = plugins[k];
    });

 })()   