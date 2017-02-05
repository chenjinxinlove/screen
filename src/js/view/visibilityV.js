/**
 * Created by chen on 2016/8/31.
 */
import {init} from 'echarts';

const datanull =  [null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null];
class visibilityV {
  constructor(id,time,) {
    let option = {
      title: {
        text: '北京能见度变化图',
        textAlign: 'left',
        left: '25.5%',
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

      ],
      yAxis: {
        type: 'value',
        name:'单位：千米',
        nameTextStyle:{
          fontSize:'12%'
        },
        splitArea: {
          show: false
        },
        min: 0,
        max: 30,
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
        interval: 2,
        splitLine: {
          lineStyle: {
            color: '#ccc',
            width: 0.5,
            type:'dashed',
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
          name: '能见度',
          type:'line',
          animation: false,
          areaStyle: {
            normal: {
              color:'#dc5789',
            },

          },
          lineStyle: {
            normal: {
              width: 1,
              opacity:0.3
            }
          },
          data:datanull
        }
      ]
    };
    this.visibilitychart = init(document.getElementById(id));
    this.visibilitychart.setOption(option);
    this.visibilitychart.group = 'group1';
  }
  setVisibility(data){
    this.visibilitychart.setOption({
      series: [
        {
          name: '能见度',
          type:'line',
          animation: false,
          areaStyle: {
            normal: {}
          },
          lineStyle: {
            normal: {
              width: 1,
              color:'#dc5789',
            }
          },
          data:data
        }
      ]
    });
  }


}

export {visibilityV} ;
