// let arr=[1,2,3,4,5,6,7,8];
// for(let i=0; i<arr.length; i++){
  
// }

// find max index and min index 
// find max value and min value 
// let a="arjuna Gond";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// for(let i=0; i<a.length; i++){
//   console.log(a[i]);
// }
let a="go%.$.";
let new_string="";
for(let i=0; i<a.length; i++){
  if(a[i]=="%"){
    new_string=new_string+"h";
  }else if(a[i]=="$"){
    new_string=new_string+"n";
  }else if(a[i]=="."){
    new_string=new_string+"";
  }else{
    new_string=new_string+a[i];
  }
}
console.log(new_string);