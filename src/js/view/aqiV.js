/**
 * Created by chen on 2016/8/30.
 */
import {init} from 'echarts';

const datanull =  [[ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null],
  [ null,null, null, null]];
class aqiV {
  constructor(id,time,) {
    let option = {
      title: {
        text: '北京AQI指数变化K线图',
        textAlign: 'left',
        left: '20%',
        top: '1%',
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
          splitNumber: 2,
          minInterval: 2,
          interval: 2,
          min: 1,
          max: 30,
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
        splitArea: {
          show: false
        },
        min: 0,
        max: 600,
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
        interval: 100,
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
          name: 'AQI',
          type: 'candlestick',
          data: datanull,
          itemStyle: {
            normal: {
              color: '#FD1050',
              color0: '#0CF49B',
              borderColor: '#FD1050',
              borderColor0: '#0CF49B'
            }
          }
        }
      ]
    };
    this.aqichart = init(document.getElementById(id));
    this.aqichart.setOption(option);
    this.aqichart.group = 'group1';
  }
  setAqi(data){
    this.aqichart.setOption({
      series: [
        {
          name: 'AQI',
          type: 'candlestick',
          data: data,
          itemStyle: {
            normal: {
              color: '#FD1050',
              color0: '#0CF49B',
              borderColor: '#FD1050',
              borderColor0: '#0CF49B'
            }
          },
        }
      ]
    });
  }


}

export {aqiV} ;
