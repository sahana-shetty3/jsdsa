function duplicatesRemove(num){
    let x=0;
    for(let i=0;i <num.length ;i++){
        if(num[i]>num[x]){
            x=x+1;
            num[x]=num[i];
        }
    }
    return x+1;
}
let num=[1,1,2,2,3,4,6,6,7,7,10,10,10,45,344,3452,3452];

let res=duplicatesRemove(num);
console.log(num);
