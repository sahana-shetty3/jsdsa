const p = new Promise((reslove,reject)=>{
    setTimeout(() =>{
         reslove("promise resloved value");
    },20000);
    
});

const API_URL="https://api.github.com/users/sahanshetty3";


async function handlePromise(){


 try{
const data= await fetch(API_URL);

 const jsonValue = await data.json()
 
 console.log(jsonValue);
 }

 catch(err){
    console.log(err);
 }
 //fetch() => response body is readble stream Response.json=>jsonValuue
}

handlePromise();

// function getData(){
    
//     p.then((res)=>console.log(res));
//     console.log("namaste");
// }
// getData();