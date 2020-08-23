function capitalizeAndLowerCase(string){
    var output = string.toUpperCase() + string.toLowerCase();
    return output;
}

function findMiddleIndex(string){
    return string.length/2;
}

function returnFirstHalf(string){
    var output = "";
    for (var i = 0; i < string.length/2; i++){
        output += string[i];
    }
    return output;
}

//Couldn't figure out the third one in time so did the extra optional one instead hope it counts
function capitalize(string){
    string = string.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    return string
}

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var orange = "orange";
var orangeLocation = 0;
vegetables.splice(vegetables.length-1, 1);
fruit.splice(0, 1);
    for(var i = 0; i < fruit.length; i++)
    {
        if(fruit[i] == "orange"){
            orangeLocation = i;
        }
        }
fruit.push(orangeLocation);
vegetables.push(vegetables.length);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse().toString();
console.log(food);



console.log(capitalizeAndLowerCase("test"));
console.log(findMiddleIndex("this is a test"));
console.log(capitalize("Test does this work"));