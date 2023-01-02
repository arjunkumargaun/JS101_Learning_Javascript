  let str="oyo";
    //write code here
    let palindrom="";
    for(let i=str.length-1; i>=0; i--){
        palindrom=palindrom+str[i];
    }
    if(str===palindrom){
        console.log("Yes");
    }else{
        console.log("No");
    }
