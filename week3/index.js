//Defines nested array
var people = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
//Create loop that iterates over people array to check nested objects for age, and gender to generate message whether or not they're allowed to see a movie
//This function was used for 2. in assignment but adapted to 3., it's the same functionality for both requires just combined and streamlined
for (var i = 0; i < people.length; i++){
    if (people[i]['age'] < 18){
        if (people[i]['gender'] == 'male'){
            console.log(people[i]['name'] + ' is not old enough to see Mad Max, dont let him in.');
        }else{
            console.log(people[i]['name'] + ' is not old enough to see Mad Max, dont let her in');
        }
    }else{
        if (people[i]['gender'] == 'male'){
            console.log(people[i]['name'] + ' is old enough. Hes good to see Mad Max Furry Road');
        }else{
            console.log(people[i]['name'] + ' is old enough. Shes good to see Mad Max Furry Road');
        }
    }
}
//Create loop that iterates over 100 from 0, checks to see if number is odd or even and logs to console.
var num = 0;
for (var i = 0; i < 100; i++){
    
    if (num == 0){
        console.log(i + ' is even');
        num++;
    }else{
        console.log(i + ' is odd');
        num = 0;
    }
}

//Defines arrays
var arr_1 = [2, 5, 435, 4, 3];
var arr_2 = [1, 1, 1, 1, 3];
var arr_3 = [9, 3, 4, 2];
//Create function to check the status of lights after all toggles
//If function returns true light is on
//If function returns false light is off
function lights(arr){
var num = 0;
var status = null;
for (var i = 0; i < arr.length; i++){
    for (var b = 0; b < arr[i]; b++){
        if (num == 0){
            num++;
            status = true;
        }else{
            status = false;
            num = 0;
        }
    }
}
return status;
}
//Booleans used to get status from lights function
var array_1 = lights(arr_1);
var array_2 = lights(arr_2);
var array_3 = lights(arr_3);

//Logs status of booleans to console
console.log('Array 1 light are ' + array_1);
console.log('Array 2 light are ' + array_2);
console.log('Array 3 light are ' + array_3);