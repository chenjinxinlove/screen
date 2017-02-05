/**
 * Created by chen on 2016/9/13.
 */
import  {pointData} from '../data/pointdata';

class Click{
  constructor(){
    let clickC =  document.getElementById('clickC');
    clickC.onclick =  () => {
      let {left, top} = this.getMousePoint(clickC);
      this.click(left,top);
    }
  }
  getMousePoint (_e){
    var _mousepos = {
      "top":0,
      "left":0
    };
    var body = document.body,
      _left = 0,
      _top = 0;
    if(typeof window.pageXOffset != 'undefined'){
      _left = window.pageXOffset;
      _top = window.pageYOffset;
    }
    else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat'){
      _left = document.documentElement.scrollLeft;
      _top = document.documentElement.scrollTop;
    }
    else {
      _left = body.offsetLeft;
      _top = body.offsetTop;
    }
    // console.log(_left,_top);
    // console.log(_e.clientX,_e.clientX);
    _left += window.event.clientX;
    _top += window.event.clientY;
    _mousepos.left = _left;
    _mousepos.top = _top;
    return _mousepos;
  };
  click(left, top) {
    let wd = document.body.scrollWidth/1000;
    let hd = document.body.scrollHeight/1000;
    for (let v in pointData){
      let {h, w} = pointData[v];
      if(left + 50 > w*wd && left -50 < w*wd && top + 50 > h*hd && top -50 < h*hd){
        if(v === 'beijing'){
          window.location.href = 'beij.html';
          break;
        }else{
          alert('暂时展示北京');
          return;
        }
      }
    }
  }


}

export {Click};
