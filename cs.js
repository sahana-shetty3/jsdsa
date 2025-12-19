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


function con(n) {
    
    if (n == 0) {
        return 1;
    }
    n = Math.abs(n);
    let count = 0;
 
    while (n > 0) {
        n = Math.floor((n/10));
        count++;
    }
    return count;

}
let num = 67977;
let res = con(num);
console.log(res);
