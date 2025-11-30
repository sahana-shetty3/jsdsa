let a=[9,4,8,3,2,1,4,67,45,1,5,6,10]

function selectionSort(a){
  let n = a.length;
  for(let i=0;i<n-1;i++){
    let min = i;
    for( let j =i+1;j < n ;j++){
      if( a[j] < a[min]){
         min = j;

      }
    }
    if( min != i){
      let temp = a[i];
      a[i]= a[min];
      a[min]= temp;
        
      }
  }
  return a;

}

let res = selectionSort(a);
console.log(res);