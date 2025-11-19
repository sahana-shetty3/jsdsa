let n = 5;
let count=0;

for (let i = 0; i < n; i++) {
    let row = " ";
        
        for (let j = 0; j > i+1 ; j++) 
        {
         row = row + (j+1) ;
         }
       
        console.log(row);
    }
    

