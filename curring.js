function findElement(arr,x){
    for(let i=0;i<arr.length;i++){
     if (arr[i]==x){
        return i;

     }
    
    }
    return-1;
}

let arr=[10,30,40,34,-89];

let res=findElement(arr,401);
console.log(res);

