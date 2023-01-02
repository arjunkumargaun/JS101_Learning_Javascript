let lower="r";
let lower_alpha="abcdefghijklmnopqrstuvwxyz";
let upper_alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let bag="";
for(let i=0; i<lower_alpha.length; i++){
  if(lower_alpha[i]==lower){
    bag=upper_alpha[i];
  } 
}
console.log(bag)