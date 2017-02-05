/**
 * Created by chen on 2016/9/18.
 */
class Timeshow{
  show(i){
    let month = '';
    let q = '';
    if(i < 6){
      month = '08';
      q = 26 + i;
    }else{
      month = '09';
      q = i - 5;
    }
    if(q<10){q = '0' + q};


    var j = 1;
    var d =  setInterval(function () {
      j > 9 ? j : j = '0' + j;
      document.getElementById('day').innerHTML = `2016年${month}月${q}日${j}时`;
        j++;
      if(j>24){
        clearInterval(d);
      }
    },250)

  }
}

export {Timeshow};
