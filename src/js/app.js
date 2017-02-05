import {commonController} from './controller/commonController';
import {calculateController} from './controller/calculateController';
let r = require('./lib/range');




let commonCon = new commonController();

  let n = 0;
  let rainNum = -1;
  let windNum = -1;
  let humiNum = -1;
  let isMovement = true;

//开始
  document.getElementById('timeb').onclick = function () {
    if(!isMovement){
      console.log('k')
      this.className = 'timeb';
      commonCon.start(n);
      isMovement = true;
    }else{
      console.log('z')
      this.className = 'timeb1';
      commonCon.pause(function (i) {
        n = i;
        isMovement = false;
      });
    }
  }
  let range  = new r();
    range.init({
      'slide' : 'rangeSlide',
      'bar' :  'rangeBar',
      'max' : 500,
      'min' : 0,
      'direction' : 'top',
      'colorid' : 'zo'
    },function (value) {
      rainNum = value;
      controllerData();
    });
  let range1  = new r();
    range1.init({
      'slide' : 'rangeSlide1',
      'bar' :  'rangeBar1',
      'max' : 100,
      'min' : 0,
      'direction' : 'top',
      'colorid' : 'zt'
    },function (value) {
      humiNum  = value;
      controllerData();
    });

  let range2  = new r();
  range2.init({
    'slide' : 'rangeSlide2',
    'bar' :  'rangeBar2',
    'max' : 10,
    'min' : 0,
    'direction' : 'top',
    'colorid' : 'ztr'
  },function (value) {
    windNum = value;
    controllerData();
  });

 function controllerData() {
   if(!isMovement){
     let num = {rainNum, humiNum, windNum, n};
     console.log(rainNum, humiNum, windNum)
     let updataData = new calculateController(num);
     updateData(updataData)
   }
 }
function updateData(updataData) {
  let {humiNum, windNum, visDataResult ,rainNum ,n ,affectCo, bl} = updataData;
  //雨
  let rainUpData = commonCon.handleData('rain',n-1)
  rainUpData[n-1] = rainNum.toString();
  commonCon.insertRainData(rainUpData);
  //风
  let windUpData = commonCon.handleData('wind',n-1)
  windUpData[n-1] = windNum.toString();
  commonCon.insertWindData(windUpData);
  //湿度
  let humiUpData = commonCon.handleData('humidity',n-1)
  humiUpData[n-1] = humiNum.toString();
  commonCon.insertHumidityData(humiUpData);
  //能见度
  let visibilityUpData = commonCon.handleData('visibility',n-1)
  visibilityUpData[n-1] = visDataResult.toString();
  commonCon.insertVisibilityData(visibilityUpData);
  //aqi
  let aqiUpData = commonCon.handleData('aqi',n-1);
  let aqiDataResult =   aqiUpData[n-2].map((value, index, arr) => Number(value) * affectCo)
  aqiUpData[n-1] = aqiDataResult;
  commonCon.insertAqiData(aqiUpData);
  //地图
  commonCon.insertMapData(bl);
}
