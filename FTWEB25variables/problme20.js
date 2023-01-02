// changing negative num to zero 
let arr=[1,2,-3,4,5,-6,7,8,-9,10];
let without_neg=[];
for(let i=0; i<arr.length; i++){
  if(arr[i]<0){
    arr[i]==0;
  }
}
console.log(arr);


// reversing arry
let arr1=[1,2,3,4,5,6];
let reverse_arr=[];
for(let i=arr1.length-1; i>=0; i--){
  reverse_arr=arr[i];
}
console.log(reverse_arr);