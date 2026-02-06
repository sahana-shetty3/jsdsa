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
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let map={};

    for(let i=0;i<s.length;i++){
        (map[s[i]]=!map[s[i]]?1:++map[s[i]])
    }

    
    for(i=0;i<t.length;i++){
        if(!map[t[i]]||map[t[i]]<0){
            return false;
        }
        else{
            --map[t[i]];
        }
    }
    return true;

    
};