//template literals

const name="sahana shetty";
const age=22;
const job="full stack web developer";
const city="Bengalurru and udupi";

let html;

//without using tempate literals,ess,we are going to renser html to browser with js

html='<ul><li>name:' + name +'</li><li>Age:' + age + '</li><li>job:' + job +'</li><li>city:' + city + '</li></ul>';
document.body.innerHTML=html;
function hello(){
    return 'hello';
}

//withn using the template literals(es6)
html=`<ul>
<li>name:${name}</li>
<li>age:${age}</li>
<li>job:${job}</li>
<li>city:${city}</li>
<li>${hello()}</li>

</ul>
`;
document.body.innerHTML=html;

//object literals

const person={
    firstName:'mani',
    age:22,
    adress:{
        city:'mangalore',
        state:'karnataka',
    },
    email:'sahana@gmail.com',
    hobbies:['dance','sing'],
    getBirthYear:function(){
        return 2025 - this.age;

    }
};

let val;
val=person;


console.log(val.hobbies);

console.log(val.email);

console.log(val.adress);
console.log(val.adress.city);

console.log(val.getBirthYear());

//array of objects
const peoples=[{
    firstName:'sana',
    age:23
},
{
    firstName:'SWAP',
    age:23,
}
];
console.log(peoples[0].firstName);

for (let i=0;i<peoples.length;i++){
    console.log(peoples[i].age);
}
