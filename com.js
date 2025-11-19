const cart=["shoes","pen","pants","kurtha"];

 
 createOrder(cart)//orderId
 .then(function(orderId){
   console.log(orderId);
   return orderId;
})
.catch(function (err){
    console.log(err.message);
})
.then(function(){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

.catch(function (err){
    console.log(err.message);
});


///producer part
function createOrder(cart){

    const pr=  new Promise(function(reslove,reject){
        //creatte order
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err=new Error("cart is not valid");
            reject(err)
        }
        // logic create order
        const orderId ="12345";
        if(orderId){
            setTimeout(() => {
                reslove(orderId);
            },5000);
            
        }

    });


    return pr
}
function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        reslove("payment sucessful");
    })
}
function validateCart(cart){
    return true;
}

    