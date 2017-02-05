/**
 * Created by chen on 2016/9/11.
 */
import {timeRoller} from '../lib/timeRoller';
import {Point} from '../lib/Point';
import {Timeshow} from '../lib/Timeshow';
import  {pointValue} from '../data/pointdata';
import {pointData} from '../data/pointdata';

import $ from 'jquery';

class indexController{
  constructor(k=1){
    this.time = new timeRoller(29, 'offset', 'wt', 'timeb');
    this.i = k;
    this.start();
    this.point = new Point('point');
    this.timeshow = new Timeshow();
  }

  pause(callback){
    clearInterval(this.setIn);
    callback(this.i-1);
  }
  start(){
    this.setIn = setInterval(()=>{
      if(Number.isInteger(this.i / 2)){
        let dd = this.i/2;
        this.point.draw(pointValue[dd]);
      }
      //时间轴
      if(this.i === 1){
        this.timeshow.show(0);
        this.time.cycle(0);
      }
      if(Number.isInteger(this.i / 6)){
        this.timeshow.show(this.i / 6);
        this.time.cycle(this.i / 6);
      }
      // console.log(this.i)
      this.i++;
      if(this.i>180){
        this.i=1;
      }
    },1000)
  }
  drawA(pointName) {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });
    let wxd = document.body.scrollWidth / 1000;
    let hxd = document.body.scrollHeight / 1000;
    let {w, h} = pointData[pointName];
    console.log(this.i, pointName, wxd * w, hxd * h);
    var deg = Math.random()*60 - 30;

    var ff = $('#aqiShow');
    var ah = ff.outerHeight(),
      aw = ff.outerHeight();


    ff.css('top',hxd * h - ah *0.81)
      .css('left',wxd * w - aw /1.76)
    $('.aqinum').text(pointValue[this.i][pointName]['aqi']);

    $('.aqiShow').animateCss('bounce');
    $('#aqiShow').show()


  }

}



export {indexController};
