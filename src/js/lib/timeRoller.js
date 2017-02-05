/**
 * Created by chen on 2016/9/9.
 */

class timeRoller{
  constructor(a, r, w, b){
    this.value = '';
    this.w = '';
    this.b ='';
    let rOff = document.getElementById(r).offsetWidth;
    this.value = (Number(rOff) / Number(a)).toFixed(2);
    this.w = document.getElementById(w);
    this.b = document.getElementById(b);

  }
  cycle(i){
      this.w.style.width= this.value * i  + 'px';
      this.b.style.left = this.value * i -5+ 'px';
  }

}
export {timeRoller};
