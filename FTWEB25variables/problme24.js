// converting negtive number to 0 

let arr=[1,2,-1,-8,-5];
let negtive="";
for(let i=0; i<arr.length; i++){
  if(arr[i]<0){
    arr[i]=0;
    negtive=negtive+arr[i]+" ";
  }else{
    negtive=negtive+arr[i]+" ";
  }
}
console.log(negtive);


// reversing array

let arr2=[1,2,3,4,5];
let reverse="";
for(let i=arr2.length-1; i>=0; i--){
  reverse=reverse+arr2[i]+" ";
}
console.log(reverse);