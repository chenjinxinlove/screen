/**
 * Created by chen on 2016/9/11.
 */
import {pointData} from '../data/pointdata';
// import {fabric} from 'fabric';
const SW  = document.body.scrollWidth,
  SH = document.body.scrollHeight;
let wd = SW/1000;
let hd = SH/1000;

class Point{

  constructor(id){
    let c=document.getElementById(id);
    this.ctx=c.getContext("2d");
    // this.ctx = new fabric.Canvas(id);
    c.setAttribute('width', SW);
    c.setAttribute('height', SH);
  }
  draw(data){
    this.ctx.clearRect(0,0,SW,SH)
    if(!!data){
     for(let v in data){
       this.startdraw(data[v], v);
     }
    }

  }
  getImg(v){
    let img = new Image();
    switch (+v){
      //蔚蓝
      case 1:{
         img.src = '/src/img/weilan.png';
      }
            break;
      //淡蓝
      case 2:{
        img.src = '/src/img/danlan.png';
      }
            break;
      //阴沉
      case 3:{
         img.src = '/src/img/yincheng.png';
      }
            break;
      //雾霾
      default:{
        img.src ='/src/img/wumai.png';
      }
    }
    // img.onload = function(){
      return img;
    // }
  }
  /**
   * { h : 36,w : 50,}
   */

  startdraw(value, name) {
    const {w,h} = pointData[name];
    let {blue, aqi} = value;
    let img = this.getImg(blue);
    this.ctx.drawImage(img, w * wd, h * hd, 18 * wd , 30 * hd );
  }
  drawAqi(pointName){

    let wxd = document.body.scrollWidth/1000;
    let hxd = document.body.scrollHeight/1000;
    let {w,h} = pointData[pointName];
    console.log(w,h,pointName);
    this.ctx.fillText(pointName,w * wxd, h * hxd)
  }

}

export {Point};

