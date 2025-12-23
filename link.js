/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1){
        return n;}
    return fib(n-1)+fib(n-2);
    
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if( index < 0 || index >= this.size) return;
     
    if(index === 0){
        this.head = this.head.next;
    }
    else{
        let curr = this.head;

        for( let i=0;i< index-1;i++){
        curr = curr.next;
        }
        curr.next = curr.next.next; 
    }

    this.size--;
    
    
};
