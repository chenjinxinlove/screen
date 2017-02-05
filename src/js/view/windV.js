/**
 * Created by chen on 2016/8/31.
 */
import {init} from 'echarts';

const datanull =  [null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null];
class windV {
  constructor(id,time) {
    let option = {
      grid:{
        x:'10%',
        y:'12%',
        x2:'1%',
        y2:'10%',
      },
      title: {
        text: '北京风速变化图',
        textAlign: 'left',
        left: '27.5%',
        top:'1%',
        textStyle: {
          color: '#005c5c',
          fontSize: "26%",
          fontWeight: "bold",
          fontFamily:'Arial, Verdana, Microsoft YaHei ,sans-serif'
        }

      },
      xAxis: [
        {
          type: 'category',
          data: time,
          boundaryGap: false,
          min: 'dataMin',
          max: 'dataMax',
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: '#ccc',
              opacity:0.3
            }
          },
          axisLabel:{
            textStyle:{
              fontSize:"12%"
            }
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },

        },
        {
          type: 'value',
          splitNumber: 1,
          minInterval: 1,
          interval: 1,
          min: 1,
          max: 31,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          splitArea: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ccc',
              width: 0.5,
              opacity:0.3
            }
          }
        }
      ],
      yAxis: {
        type: 'value',
        name:'单位:m/s',
        nameTextStyle:{
          fontSize:'12%'
        },
        splitArea: {
          show: false
        },
        min: 0,
        max: 10,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: '#ccc',
            opacity:0.3
          }
        },
        axisLabel:{
          textStyle:{
            fontSize:"15%"
          }
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        interval: 1,
        splitLine: {
          lineStyle: {
            color: '#ccc',
            width: 0.5,
            opacity:0.3
          }
        }

      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      series: [
        {
          name: '风速',
          type: 'line',
          symbolSize: 8,
          hoverAnimation: false,
          data: datanull
        }
      ]
    };
    this.windchart = init(document.getElementById(id));
    this.windchart.setOption(option);
    this.windchart.group = 'group1';
  }
  setWind(data){
    this.windchart.setOption({
      series: [
        {
          name: '风速',
          type: 'line',
          symbolSize: 8,
          hoverAnimation: false,
          data: data
        }
      ]
    });
  }


}

export {windV} ;
