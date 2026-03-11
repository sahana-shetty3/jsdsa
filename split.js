function countDigits(n) {
  let count = 0;
  if(n==0){
    return 1;
  }
  n=Math.abs(n);
  while (n > 0) {
    n = Math.floor((n / 10));
    count++
  }
  return count;
}
let n = -97;
let res = countDigits(n);
console.log(res);