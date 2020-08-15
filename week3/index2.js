//Function used to calculate sum
function sum(a, b){
    return (a + b);
}
//Testing function sum
console.log(sum(1, -2)); //-1
console.log(sum(-3, 2)); //-1
console.log(sum(4, 88)); //92
console.log(sum(-31000, 2)); //-30998
console.log(sum(-2, 100)); // 98

//Function used to find greatest number
function greatest(a, b, c){
    var arr = [a, b, c];
    return Math.max.apply(Math, arr);
}

//Testing function greatest
console.log(greatest(100, 15, 20)); //100
console.log(greatest(156, 200, 300)); //300
console.log(greatest(15, -100, 1)); //15
console.log(greatest(2, 3, 4)); //4
console.log(greatest(5, 10, -15));//19

//Function to check if a number is odd or even
function oddOrEven(a){
    var num = 0;
    var i = 0;
    var odd_Even = '';
    while (i < a){
        if (num != 0){
            odd_Even = 'Even';
            num = 0;
            i++;
        }else{
            odd_Even = 'Odd';
            i++;
            num++;
        }
    }
    return odd_Even;
}
//Testing function oddOrEven
console.log(oddOrEven(111)); //Odd
console.log(oddOrEven(150)); //Even
console.log(oddOrEven(301)); //Odd
console.log(oddOrEven(302)); //Even
console.log(oddOrEven(10000000)); //Even

//Creating a function that checks if string length is less than or equal to 20 if less than concatenate string, else slice string in half
function conString(string){
    if (string.length <= 20){
        return string + string;
    }else{
        return string.slice(0,( string.length/2));
    }
}

console.log(conString('12345678912345')); //S+S
console.log(conString('123456789123456789123456'));//Split
console.log(conString('this is a test to see if it will split me and half'));//Split
console.log(conString('I like cats'));//S+S
console.log(conString('I like cats a whole lot like I really like cats'));//Split
console.log(conString('123456789123456789123456'));//Split

