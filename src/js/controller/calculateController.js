/**
 * Created by chen on 2016/9/1.
 */
import {windData, humidityData, rainData, pm10Data} from '../data/comdata';
import {mapAqi} from '../data/mapdata';
class calculateController{
  constructor ({rainNum, humiNum, windNum, n}){
    let getData= this._getNewData(n);
    if(rainNum === -1){rainNum = getData.rainNum};
    if(humiNum === -1){humiNum = getData.humiNum};
    if(windNum === -1){windNum = getData.windNum};
    let pm10Num = getData.pm10Num;
    //计算能见度的算法
    let visDataResult = this._calVis({humiNum, windNum, pm10Num});
    //计算污染物扩散
    let aqiDataResult = this._calAqi({humiNum, windNum, rainNum});
    let affectCo = 1;
    switch (aqiDataResult){
      case aqiDataResult < 1:
            affectCo = 0.3;
            break;
      case '2':
            affectCo = 0.5;
            break;
      case '3':
            affectCo = 0.9;
            break;
      case '4':
            affectCo = 1.3;
            break;
      case  aqiDataResult > 4:
            affectCo = 1.5;
            break;
      default:
            affectCo = 1;
    }
    //计算蓝天变化
    let blueData = mapAqi[n].map((value, index, arr) => { return value * affectCo})
    let bl = this._calBlue({aqiDataResult, blueData});
    return {humiNum, windNum, visDataResult ,rainNum, n ,affectCo, bl }

  }
  _getNewData(n) {
    return {'rainNum': rainData[n], 'humiNum': humidityData[n], 'windNum': windData[n], 'pm10Num' : pm10Data[n]}
  }
  _calVis({humiNum,windNum,pm10Num}){
    return (11.62 - 6.75 * Math.log(Number(pm10Num)/1000) + 0.8605 * Number(windNum) - 0.2643 * Number(humiNum)).toFixed(2);
  }
  _calAqi({humiNum, windNum, rainNum}){
    //风大雨6级
    //   if(Number(windNum) > 10){
    //     return '1';
    //   }
    //中雨并且风小于3级
      if(Number(rainNum) > 50 ){
          return Math.max(1 - (0.00223 * rainNum) , 0.01);
      }
    //风4/5级
      if(Number(windNum) < 10 && Number(windNum) > 3.5 ){
        return '2';
      }
    //小雨并且风小于3级
      if(Number(rainNum) > 10 && Number(windNum) < 3.5){
        return '2';
      }
    //晴天或多云并风下于3级
    if(Number(rainNum) < 5&& Number(windNum) < 3.5){
      if (Number(humiNum) > 60){
        return Math.min((humiNum - 60) * 0.025 + 4 , 5);
      }else{
        return '3';
      }
    }
    return '2';
  }
  _calBlue({aqiDataResult, blueData}){
    let a2 = [];
    for(let j = 0; j<16 ; j ++){
      let poNum = aqiDataResult;
      let aqiNum = blueData[j];
      a2.push(blue({poNum, aqiNum}));
    }
    return a2;
    function blue({poNum, aqiNum}) {
      if(poNum > 4){
        return poNum - 1;
      }
      if(poNum < 1){
        return 3 - poNum ;
      }
      if(aqiNum > 180){
        return  Math.min((aqiNum - 180) * 0.0025 + 3 , 4);
      }
      if(aqiNum <= 180){
        return  aqiNum / 90;
      }
    }
  }
}
export {calculateController};



