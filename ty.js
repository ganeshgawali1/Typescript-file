
console.warn(10);
console.log(10 + 2);
let n = 10;
function add(n1, n2) {
    return n1 + n2;
}
console.log(2, 3);
//******************************************************************************************************* */
//Type of 
function sum(nN1, nN2) {
    if (typeof nN1 === 'number' && typeof nN2 === 'number') {
        return (nN1 + nN2);
    }
    else {
        return new Error("Please Give Valid Type");
    }
}
console.log(sum(23, 345));
const man = {
    name: "ganesh",
    id: 3
};
const User = {
    id: 5,
    name: "chetan"
};
console.log(User.name);
//******************************************************************************************************* */
//Array Type
let randomarr = ["ganesh", 779, true];
console.log(randomarr);
//******************************************************************************************************* */
// specific array
// Ex:
let sarr = ["ganesh", "raju"];
console.log(sarr);
//******************************************************************************************************* */
//Tuples
let tarr = ["ganesh", "Roshan", 1];
tarr.push(true);
console.log(tarr);
//******************************************************************************************************* */
//Enum Type in Typescript
var role;
(function (role) {
    role[role["Admin"] = 0] = "Admin";
    role[role["user"] = 1] = "user";
    role[role["Student"] = 2] = "Student";
})(role || (role = {}));
console.warn(role);
console.log(role.Admin);
// Any in TypeScript
let data = 10;
data = "ganesh";
console.log(data);
//******************************************************************************************************* */
// Union 
// Ex 1
function adt(a, b) {
    return a + b;
}
console.log(adt(10, 22));
//Ex 2
function adpt(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b);
    }
    else {
        return (a.toString() + b.toString());
    }
}
console.log(adpt(10, 22));
console.log(adpt("Ganesh ", " Gawali"));
//******************************************************************************************************* */
//Literals 
function addpt(a, b, type) {
    if (type === "as-num") {
        return (+a) + (+b) + (+"as-name");
    }
    else {
        return (a.toString() + b.toString());
    }
}
console.log(addpt(10, 22, "as-num"));
console.log(adpt("Ganesh ", " Gawali"));
let aa = 10;
let ab = "ganesh";
let ac = undefined;
console.log(aa + "" + ab + ac);
//******************************************************************************************************* */
//Functuon Type in Typescriptr
function go() {
    return 68;
}
console.log(go());
//******************************************************************************************************* */
// Void Type
function adass() {
    console.log("You are in Void part");
}
adass();
//Ex 
let day;
function date() {
    day = new Date;
}
console.log(date());
//******************************************************************************************************* */
// Unknown Type in TypeScript
let dat;
dat = 10;
dat = "ganesh";
let item;
if (typeof data === 'string') {
    item = data;
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
class Userd {
    constructor() {
        this.name = '';
        this.id = 1;
    }
    adduserd(usero) {
        return `${usero} is Added`;
    }
    removeduserd(usero) {
        console.log(`${usero} remove`);
    }
}
let user11 = new Userd;
let results = user11.adduserd('ganu');
user11.removeduserd('sahil');
console.log(results);
//***************************************************************************
// Access Modifire 
class Userk {
    constructor() {
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
        j.getlength();
    }
    getlength() {
        console.log(this.name.length);
    }
}
const j = new Userk;
j.setName("ganuji");
j.displayName();
// j.getlength(); <--- Generating erro so write code in line no. 211
//******************************************************************************************************* */
// Constrocter and ShortHand 
class Usersp {
    constructor(namem, age) {
        this.namem = "";
        this.age = 0;
        this.namem = namem;
        this.age = age;
    }
    disval() {
        console.log(this.namem, this.age);
    }
}
const kl = new Usersp("ganii", 20);
kl.disval();
//******************************************************************************************************* */
//Short Hand Intilizer
class Userspl {
    constructor(namem, age) {
        this.namem = namem;
        this.age = age;
    }
    disval() {
        console.log(this.namem, this.age);
    }
}
const klk = new Userspl("ganisdfi", 280);
klk.disval();
//******************************************************************************************************* */
// Readonly and Private 
class Usertt {
    constructor() {
        this.namr = 'janki';
    }
}
const lk = new Usertt();
//lk.namr="sakr" ;  <-- if we use Readonly then this line give error because we can't eddit code in readonly mode 
console.warn(lk.namr);
//******************************************************************** */
// Inheritance 
class createaccount {
    makeEmail(usfg) {
        return `${usfg}@test.com`;
    }
}
class Userpo extends createaccount {
    adduser(usfg) {
        return `${usfg} added as an userrr`;
    }
}
const jk = new Userpo();
console.log(jk.adduser("ganesh show "));
console.log(jk.makeEmail("ganesh show "));
