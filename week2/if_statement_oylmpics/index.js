
if (5 > 3){
    console.log('is greater than')
}
if ("cat".length == 3){
    console.log('is the length')
}
if ("cat" == "dog"){
    
}else{
    console.log('not the same')
}
//Create objects for each persxon
var bobby = {
    name: 'Bobby',
    age: 12
}
var robby = {
    name: 'Robby',
    age: 18
}
var bob = {
    name: 'Bob',
    age: 19
}
var rob = {
    name: 'Rob',
    age: 21
}
var billy = {
    name: 'Billy',
    age: 51
}
//Add people objects into array
var people = [bobby, robby, bob, rob, billy];
//Iterate over array and check for first chacter of name and age
for (index = 0; index < people.length; index++){
    if(people[index].name.charAt(0) == 'B' && people[index].age > 18){
        console.log('Allowing ' + people[index].name + ' age ' + people[index].age + ' into movie')
    }
}

//Siver 1.:
//Variable used for in statement
var silver = 2;

if (silver === 1){
    console.log('strict')
}else if (silver == 1){
    console.log('loose')
}else if (silver != 1 || silver !== 1){
    console.log('not equal at all')
}
//Silver 2.:
//Variable used for if statement

if (1 <= 2 && 2==4){
    console.log('Yes')
}

//Check is dog is a string type
var dog = "dog";
if (typeof dog === 'string'){
    console.log('Dog is a string')
}
//Check is checkTrue a boolean?
var checkTrue = "true";
if (typeof checkTrue === 'boolean'){
    console.log('checkTrue is a boolean')
}else{
    console.log('checkTrue is not a boolean')
}

var undefined;
var definted = "definted";

if (typeof undefined === 'undefined'){
    console.log('undefinted doesnt have a type')
}
if (typeof definted !== 'undefined'){
    console.log('definted has type')
}
if("S" > 12){
    console.log('S is greater than 12')
}
if("A" > 12){
    console.log('S is greater than 12')
}
if("C" > 12){
    console.log('S is greater than 12')
}
//Function used to check if number is even
function isEven(n){
    return n % 2 == 0;
}
//function used to check if number is odd
function isOdd(n){
    return Math.abs(n % 2) == 1;
}
var myNum = 11;

if (isEven(myNum)){
    console.log('Number is even')
}else if(isOdd(myNum)){
    console.log('Number is odd')
}