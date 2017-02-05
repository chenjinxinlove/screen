/**
 * Created by chen on 2016/9/6.
 */

class animation{
  constructor(){
      this.i = 0;
      this.isY = true;
      this.setInter = '';
      this.imgAll = '';
      this.imgsLen = '';
  }
  init(className){
    this.imgAll = document.getElementsByClassName(className);
    this.imgsLen = this.imgAll.length;
    return this;

  }
  start(i, time){
        this.controller(i, time)
  }
  pause(callback){
      clearInterval(this.setInter);
      callback(this.i);
  }
  controller(i = 0, time = 240){
    this.setInter = setInterval(()=>{
      // this.imgAll[i].style.display = 'block';
      this.imgAll[i].style.opacity = 1;
      if(i>0){
        // this.imgAll[i-1].style.display = 'none';
        this.imgAll[i-1].style.opacity = 0;
      }
      if(i === this.imgsLen-1){
        // this.imgAll[i].style.display = 'none';
        // this.imgAll[0].style.display = 'block';
        this.imgAll[i].style.opacity = 0;
        this.imgAll[0].style.opacity = 1;
      }
      this.i = i;
      i++;
      if(i>this.imgsLen-1){
        i = 0;
      }
    },time)
  }


}

export {animation};
