/**
 * Created by chen on 2016/9/6.
 */
class importData {
  constructor (){

  }
  init(num,callback){
    for (let i = 0; i < num ; i++){
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
      for(let j = 0 ; j < 25; j ++){
        if(j < 10){j = '0' + j};

        let name = month + q + '_'+j + '1';
          if(i >2){
            callback()
          }
          let imgSrc = `src/an/${name}.png`;
          let imgO = document.createElement('img');
          imgO.className = 'an';
          imgO.setAttribute('src',imgSrc);
          document.body.appendChild(imgO);
      }
    }
    // for (let i = 0; i < num ; i++){
    //   if(i < 10){i = '00' + i}
    //   else if(i>9 && i< 100 ){
    //     i = '0' + i;
    //   }
    //   if(i >10){
    //     callback()
    //   }
    //   let imgSrc = `src/an/0905_${i}.png`;
    //   let imgO = document.createElement('img');
    //   imgO.className = 'an';
    //   imgO.setAttribute('src',imgSrc);
    //   document.body.appendChild(imgO);
    // }
  }
}
export { importData };
