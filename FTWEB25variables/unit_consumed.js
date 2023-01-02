// function UnitConsumed(n){
  let n=930;
  let newbill=n-80;
  let oribill=0;
  if((newbill/3)>50){
    oribill=oribill+150;
    newbill=newbill-150;
    if((newbill/5)>100){
      oribill=oribill+500;
      newbill=newbill-500;
      // console.log(newbill+ "new bill");
      if((newbill/10)>=1){console.log((newbill/10)+150);}
    }else if((newbill/5>=1)&&(newbill/5<=100)){console.log(newbill, (newbill/5)+50);}
  }else if((newbill/3>=0)&&(newbill<=50)){console.log((newbill/3));}
// }