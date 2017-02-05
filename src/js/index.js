/**
 * Created by chen on 2016/9/6.
 */
import {animation} from './lib/animation';
import {importData} from './lib/importData';
import {indexController} from './controller/indexController';
import {ShowAqi} from './lib/showAqi';
import {Click} from './lib/clickTiao';

let indexCon = new indexController();
let showAqi = new ShowAqi();
let C = new Click();

let isMovement = true;
let i = 0;
let n = 0;
let iD = new importData();
let aT = new animation();

iD.init(30,function () {
  aT.init('an').start();
});
document.getElementById('timeb').onclick = function () {
  if(!isMovement){
    this.className = 'timeb';
    indexCon.start(n);
    isMovement = true;
  }else{
    this.className = 'timeb1';
    indexCon.pause(function (i) {
      n = i;
      isMovement = false;
    });
  }
}

//控制展示aqi的方法

var delay= function (fn, interval) {
  var __self = fn,
    timer,
    firsTime = true;
  return function () {
    var args = arguments,
      __me = this;
    if(firsTime){
      __self.apply(__me, args);
      return firsTime = false;
    }
    if(timer){
      return false;
    }

    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      __self.apply(__me, args);
    }, interval || 50)

  }
}
document.body.onmousemove = function () {
   let {left, top} =  showAqi.getMousePoint(document.getElementById('clickC'));
   let pointName = showAqi.mousemove(left, top);
    if(!!pointName){
      indexCon.drawA(pointName);
    }else{
      if(!!document.getElementById('aqiShow')){
        document.getElementById('aqiShow').style.display = 'none';
      }
    }

};

