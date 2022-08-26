import { type } from "os";
console.warn(10);
console.log(10+2);


let n:number = 10;


function add(n1:number,n2:string){
    return n1+n2;
}

console.log(2,3);


//******************************************************************************************************* */


 
//Type of 

function sum(nN1:number,nN2:number){
      if(typeof nN1 === 'number' && typeof nN2 === 'number'){
         return (nN1+nN2);
      }
      else{
        return new Error("Please Give Valid Type");
      }
}

console.log(sum(23,345));
 


//******************************************************************************************************* */




// Ty of Object
type objt = {name:string,id:number}
const man:objt={
   name:"ganesh",
   id:3
}

const User:objt={
    id:5,
    name:"chetan"
}

console.log(User.name);



//******************************************************************************************************* */


 
//Array Type

let randomarr=["ganesh",779,true];
console.log(randomarr);



//******************************************************************************************************* */


 
// specific array

// Ex:
let sarr:String[]=["ganesh" , "raju"];
console.log(sarr);

 
//******************************************************************************************************* */



//Tuples
let tarr:[string,string,number,boolean?]=["ganesh","Roshan",1];
tarr.push(true);
 console.log(tarr);



//******************************************************************************************************* */


 
 //Enum Type in Typescript

 enum role{
    Admin,user,Student
 }

 console.warn(role);

 console.log(role.Admin);


 // Any in TypeScript

 let data:any=10;
 data="ganesh";
  console.log(data);




//******************************************************************************************************* */


 


// Union 

// Ex 1

 function adt(a:number,b:number){
    return a+b;
 }
 console.log(adt(10,22));
 
 
 //Ex 2

 function adpt(a:number | string ,b:number | string){
    if(typeof a ==='number' && typeof b === 'number'){
            return (a+b);
    }
    else{
           return (a.toString()+b.toString());
    }
 }
 console.log(adpt(10,22));
 console.log(adpt("Ganesh "," Gawali"));




//******************************************************************************************************* */


 


 //Literals 

 function addpt(a:number | string ,b:number | string,type:"as-num"|"string"){
    if(type === "as-num"){
            return (+a)+(+b)+(+"as-name");
    }
    else{
           return (a.toString()+b.toString());
    }
 }
 console.log(addpt(10,22,"as-num"));
 console.log(adpt("Ganesh "," Gawali"));




//******************************************************************************************************* */


 


// Type Alias in typescript

type vart = String | number | undefined;

let aa : vart = 10;
let ab : vart = "ganesh";
let ac : vart = undefined;

console.log(aa+""+ab+ac);




//******************************************************************************************************* */


 


//Functuon Type in Typescriptr

function go():number{
   return 68; 
}
console.log(go());




//******************************************************************************************************* */


 


// Void Type

function adass(){
    console.log("You are in Void part");
}
adass()


//Ex 
let day;
function date(){
    day = new Date;
}
console.log(date());




//******************************************************************************************************* */


 


// Unknown Type in TypeScript

let dat : unknown;
dat = 10 ;
dat ="ganesh";
let item:string;
if(typeof data === 'string'){
    item=data;
} 




//******************************************************************************************************* */


 

// Never 

// function applk(msg,code):never
// {
//     throw { message:msg,apicode:code } 
// }

// console.log(applk("server side error",500))



//******************************************************************************************************* */



// Class  in typeScript

class Userd{
   name:any='';
   id:any=1;
  adduserd(usero:any){
    return `${usero} is Added`
  }
  removeduserd(usero:any){
     console.log(`${usero} remove`)

  }
}
let user11 = new Userd;
let results = user11.adduserd('ganu');
user11.removeduserd('sahil');
 console.log(results); 


//***************************************************************************
 


 // Access Modifire 

class Userk{
    private name:any="";
    setName(name:any){
          this.name=name;
    }
    displayName(){
        console.log(this.name);
        j.getlength();
    }
    private getlength(){
        console.log(this.name.length);
    }
 }
 const j=new Userk;
 j.setName("ganuji");
 j.displayName();
 // j.getlength(); <--- Generating erro so write code in line no. 211



//******************************************************************************************************* */


 

 // Constrocter and ShortHand 

 class Usersp{
        namem="";
        age=0;
    constructor(namem:any,age:any,){
        this.namem=namem;
        this.age=age;

        
    }
    disval(){
        console.log(this.namem,this.age);
    }
    
 }
 const kl = new Usersp("ganii",20);
 
 kl.disval()






//******************************************************************************************************* */





 //Short Hand Intilizer

 class Userspl{
constructor(public namem:any,public age:any,){

}
disval(){
    console.log(this.namem,this.age);
}

}
const klk = new Userspl("ganisdfi",280);

klk.disval()




//******************************************************************************************************* */




// Readonly and Private 
  

class Usertt{
    readonly namr='janki';
}

const lk = new Usertt();
//lk.namr="sakr" ;  <-- if we use Readonly then this line give error because we can't eddit code in readonly mode 
console.warn(lk.namr);




//******************************************************************** */



// Inheritance 


class createaccount{
    makeEmail(usfg:any){
        return `${usfg}@test.com`
    }
}
class Userpo  extends createaccount {
    adduser(usfg:any){
        return `${usfg} added as an userrr`;
    }
}
const jk = new Userpo();
console.log(jk.adduser("ganesh show ")) 
console.log(jk.makeEmail("ganesh show ")) 
