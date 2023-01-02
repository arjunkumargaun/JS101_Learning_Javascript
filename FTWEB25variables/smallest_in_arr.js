let arr=[8,9,3,4,5,1,7];
for(let i=0; i<arr.length; i++){
  if(arr[i]<arr[i+1]){
    i++;
    // console.log(arr.length,arr[i+1]);
    if(i+1==arr.length-1){
      console.log(arr[i+1]);
    }
  }
}