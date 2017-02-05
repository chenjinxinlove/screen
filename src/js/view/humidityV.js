/**
 * Created by chen on 2016/8/31.
 */
import {init,graphic} from 'echarts';

const datanull =  [null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null];
class humidityV {
  constructor(id,time,) {
    let option = {
      grid:{
        x:'10%',
        y:'12%',
        x2:'1%',
        y2:'10%',
      },
      title: {
        text: '北京相对湿度变化图',
        textAlign: 'left',
        left: '30%',
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
          axisLabel:{
            textStyle:{
              fontSize:"12%"
            }
          },
          splitNumber: 2,
          interval:2,
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
        name:'单位:%',
        axisLabel:{
          textStyle:{
            fontSize:"15%"
          }
        },
        splitArea: {
          show: false
        },
        min: 0,
        max: 100,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: '#ccc',
            opacity:0.3
          }
        },
        nameTextStyle:{
          fontSize:'12%'
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        interval: 10,
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
          name: '相对湿度',
          type:'line',
          smooth:true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color:'#a976ac'
            }
          },
          areaStyle: {
            normal: {
              color:'#a976ac'
            }
          },
          data:datanull
        }
      ]
    };
    this.humiditychart = init(document.getElementById(id));
    this.humiditychart.setOption(option);
    this.humiditychart.group = 'group1';
  }
  setHumidity(data){
    this.humiditychart.setOption({
      series: [
        {
          name: '相对湿度',
          type:'line',
          smooth:true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color:'#a976ac'
            }
          },
          areaStyle: {
            normal: {
              color:'#a976ac'
            }
          },
          data:data
        }
      ]
    });
  }


}

export {humidityV} ;
