let res = maxProfit(prices);

console.log(res);
function maxProfit(prices){
    let min= 0 ;
    let maxProfit = 0;
    for (let i =0;i < prices.length;i++)
        {
        if (prices[i]-min>maxProfit){
            maxProfit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}

let prices=[6,1,3,5,6,7];