const p1 = new Promise((reslove,reject)=>{
   // setTimeout(()=> reslove("p1 sucess")
     setTimeout(()=>reject("p1 fails")
    ,3000);
})

const p2= new Promise((reslove,reject)=>{
   // setTimeout(()=>reslove("p2 sucesss")
   setTimeout(()=>reject("p2 fails")
,1000);
})

const p3= new Promise((reslove,reject)=>{
    //setTimeout(()=>reslove("p3 sucess")
   setTimeout(()=>reject("p3 fails")

,3000);
})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
    }).catch((err)=>{
        console.error(err);
        console.log(err.errors);
    });
