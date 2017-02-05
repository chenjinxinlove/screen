/**
 * Created by chen on 2016/8/31.
 */
import {aqiData, windData, visibilityData, humidityData, rainData} from '../data/comdata';
import  {blue} from '../data/mapdata';
import {aqiV} from '../view/aqiV';
import {windV} from '../view/windV';
import {visibilityV} from '../view/visibilityV';
import {humidityV} from '../view/humidityV';
import {rainV} from '../view/rainV';
import {mapV} from '../view/mapV';
import {connect} from 'echarts';
import {timeRoller} from '../lib/timeRoller';
import {lianDong} from '../lib/lianDong';

const time = [26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
class commonController{
  constructor(k=1){
    this.aqiV = new aqiV('aqi', time);
    this.windV = new windV('wind', time);
    this.visibilityV = new visibilityV('visibility', time);
    this.humidityV = new humidityV('humidity', time);
    this.rainV = new rainV('rain', time);
    this.mapV = new mapV('map');
    this.time = new timeRoller(30, 'offset', 'wt', 'timeb');
    this.lian = new lianDong();
    this.i = k;
    this.start();
    connect('group1');

  }
  insertAqiData(data){
    this.aqiV.setAqi(data);
  }
  insertWindData(data){
    this.windV.setWind(data);
  }
  insertVisibilityData(data){
    this.visibilityV.setVisibility(data);
  }
  insertHumidityData(data){
    this.humidityV.setHumidity(data);
  }
  insertRainData(data){
    this.rainV.setRain(data);
  }
  insertMapData(data){
    this.mapV.setMap(data);
  }

  handleData(type, n){
    let data = '',
      dataNull = '';
    if(type ==='aqi'){
      dataNull = [[ null,null, null, null],
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
        [ null,null, null, null],
        [ null,null, null, null]]
    }
    else{
      dataNull =  [null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null,null, null, null,null,null, null, null,null,null,null];
    }
    switch (type){
      case 'aqi':
            data = aqiData;
            break;
      case 'wind':
            data = windData;
            break;
      case 'humidity':
            data = humidityData;
            break;
      case 'rain':
            data = rainData;
            break;
      case 'visibility':
            data = visibilityData;
            break;
      default:
        data = '';
    }
    for(let i = 0; i<n ; i++){
        dataNull[i] = data[i];
    }
    return dataNull;
  }
  handleMapData(n){
    return blue[n-1];
  }
  pause(callback){
    clearInterval(this.setIn);
    callback(this.i-1);
  }
  start(){
    this.setIn = setInterval(()=>{
      let rainDa = rainData[this.i-1],
        windDa = windData[this.i-1],
        huniDa = humidityData[this.i-1];
      this.lian.init(rainDa, windDa, huniDa);
      let aqiD =  this.handleData('aqi',this.i);
      this.insertAqiData(aqiD);
      let windD =  this.handleData('wind',this.i);
      this.insertWindData(windD);
      let visibilityD =  this.handleData('visibility',this.i);
      this.insertVisibilityData(visibilityD);
      let humidityD =  this.handleData('humidity',this.i);
      this.insertHumidityData(humidityD);
      let rainD =  this.handleData('rain',this.i);
      this.insertRainData(rainD);
      let mapD =  this.handleMapData(this.i);
      this.insertMapData(mapD);
      this.time.cycle(this.i);
      timeri(this.i)

      // console.log(this.i)
      this.i++;

      if(this.i>30){
        this.i=1;
      }
    },1000)
  }

}


function  timeri(i) {
  let month = '';
  let q = '';
  if(i < 6){
    month = '8';
    q = 25 + i;
  }else{
    month = '9';
    q = i - 5;
  }
  if(q<10){q = '0' + q};
  document.getElementById('timebspan').innerHTML = month + '.' + q;
}

export {commonController};
