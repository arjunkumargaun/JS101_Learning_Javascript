let start=1;
let end=100;
let count=0;
let sumofeven=0;
while(start<=end){
  if(start%2==0){
    count++;
    sumofeven=sumofeven+start;
  }
  start++;
}
console.log(sumofeven/count);