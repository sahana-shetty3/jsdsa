 function reverseString(s){
    let len=s.length;
    let halfLen = Math.floor(len/2);
    for(let i=0;i<halfLen;i++)
    {
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i]=temp;
    
    }
};

let s = ["h","e","l","l","o"];
let res = reverseString(s);

console.log(res);