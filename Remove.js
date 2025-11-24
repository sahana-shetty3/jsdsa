function removeEle(num,val){
    let x=0;
    for(let i=0;i<length.num;i++){
        if(num[i]>num[x]){
            num[i]=num[x];
            x++;
        }
    }
    return x;
}

let num = [1,2,2,2,3,3,4,4,4,56,65,76,67,3];
let res=removeEle(num,3)

console.log(res);