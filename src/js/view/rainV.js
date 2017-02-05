/**
 * Created by chen on 2016/8/31.
 */
import {init,graphic} from 'echarts';
const datanull =  [null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null];
class rainV {
  constructor(id,time,) {
    let option = {
      grid:{
        x:'10%',
        y:'12%',
        x2:'1%',
        y2:'10%',
      },
      title: {
        text: '北京降雨量变化图',
        textAlign: 'left',
        left: '25%',
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
          axisLabel:{
            textStyle:{
              fontSize:"12%"
            }
          },
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
          axisTick: {
            show: false,
            alignWithLabel: true
          },

        },
      ],
      yAxis: {
        type: 'value',
        name:'单位:毫米',
        axisLabel:{
          textStyle:{
            fontSize:"15%"
          }
        },
        splitArea: {
          show: false
        },
        min: 0,
        max: 500,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: '#ccc',
            opacity:0.3
          }
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        interval: 50,
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
          name: '降雨',
          type:'bar',
          barWidth: '60%',
          data: datanull,
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
    };
    this.rainchart = init(document.getElementById(id));
    this.rainchart.setOption(option);
    this.rainchart.group = 'group1';
  }
  setRain(data){
    this.rainchart.setOption({
      series: [
        {
          name: '降雨',
          type:'bar',
          barWidth: '60%',
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

export {rainV} ;
