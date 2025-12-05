function findElement(arr){
    let count=0;
    let firstLrgest=-Infinity;
    let secondLargest=-Infinity;
    if(arr.length<2){
        return null;
    }
    for(let i=0;i<arr.length;i++){
     if (arr[i]>firstLrgest){
        secondLargest=firstLrgest;
        firstLrgest = arr[i];

     }
     else if(arr[i]>secondLargest && arr[i]!= firstLrgest){
        secondLargest=arr[i];
     }

    
    }
    return secondLargest;
}

let arr=[-89];

let res=findElement(arr);
console.log(res);

