let name={
    firstname:"sahana",
    lastname:"shetty"
}

let printName=function(hometown,state,country){
    console.log(this.firstname+" "+this.lastname+","+hometown+","+state+","+country);


}
let printMyname=printName.bind(name,"udupi");
printMyname("karanataka","india");

Function.prototype.mybind=function (...args){
let obj =this
params=args.slice(1);
    return function(...args2){
    obj.apply(args[0],[...params,...args2]);
}
}

let printMyname2=printName.mybind(name,"udupi");
printMyname2("karanataka","india");

let printMyname3=printName.mybind(name,"begaluru");

