var climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1;  // Ways to reach step 1
    let second = 2; // Ways to reach step 2

    for (let i = 3; i <= n; i++) {
        let current = first + second; // Total ways to reach current step
        first = second;               // Move first pointer up
        second = current;             // Move second pointer up
    }

    return second;
};