/**
 * Created by chen on 2016/9/20.
 */

class lianDong{

  init(rainD, windD, huniD){
    console.log(rainD, windD, huniD)
    let rangeBar = document.getElementById('rangeBar'),
      rangeBar1 = document.getElementById('rangeBar1'),
      rangeBar2 = document.getElementById('rangeBar2'),
      barWid = document.getElementById('rangeBar').offsetHeight / 2,
      maxTop = document.getElementById('rangeP').offsetHeight - barWid,
      minTop = -barWid;
    let rTop = maxTop - (rainD  *　((minTop + maxTop) / 500)),
      wTop = maxTop - (windD * ((minTop + maxTop) / 10)),
      hTop = maxTop - (huniD * ((minTop + maxTop) / 100));
    rangeBar.style.top = rTop + 'px';
    rangeBar2.style.top = wTop + 'px';
    rangeBar1.style.top = hTop + 'px';
    document.getElementById('zt').style.height = maxTop - hTop + 'px';
    document.getElementById('zo').style.height = maxTop - rTop + 'px';
    document.getElementById('ztr').style.height = maxTop - wTop + 'px';
  }

}

export {lianDong};
