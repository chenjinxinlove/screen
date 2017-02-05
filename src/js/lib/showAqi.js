/**
 * Created by chen on 2016/9/12.
 */
import  {pointData} from '../data/pointdata';
class ShowAqi {

  constrcuctor (){

  }

  getMousePoint (e){
    let _e = e || window.event;
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
    _left += window.event.clientX;
    _top += window.event.pageY;
    _mousepos.left = _left;
    _mousepos.top = _top;
    return _mousepos;
  };
  mousemove(left, top){
    let wd = document.body.scrollWidth/1000;
    let hd = document.body.scrollHeight/1000;
    for (let v in pointData){
      let {h, w} = pointData[v];
      if(left + 30 > w*wd && left - 30 < w*wd && top + 30 > h*hd && top - 30 < h*hd){
        if(!!v){
            return v;
        };
        break;
      }
    }
  }

}

export {ShowAqi};
