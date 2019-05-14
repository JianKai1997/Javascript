"use strict";

var myName = "Lol";
var myStr = 'This is a "Double quatation" ';
var myStr2 = 'FirstLine\nSecondLime\nThirdLine\nEnd\tEnd';
var myArray = [[1,2,3] , [4,5,6] , [7,8,9] , [ [10,11,12] , 13 , 14] ];
var myArray2 = ['one','two','three'];
var myArray3 = ['one','two','three'];
var myArray4 = ['one','two','three'];
var myArray5 = [1,2,3,4,5];

var a = 1;
var b = 2; 
b=a;

function thisIsFucntion(){
    console.log("Welcome to function" + '\n');    
}

function thisIsFunction2(arr,item){
    arr.push(item);
    arr.shift();
}

function thisIsFunction3(a,b){
    if (a === b){  //triple equal
        return 'Equal';
    }

    return 'Not Equal';
}

console.log(b + '\n');
console.log(myStr + '\n');
console.log(myStr2 + '\n');
console.log(myArray[3][0][0] + '\n');

myArray2.push('four');
console.log(myArray2 + '\n'); //one two three four

myArray2.unshift('zero'); //put in the first word
console.log(myArray2 + '\n');

myArray3.pop(); //pop(remove) last out = three
console.log(myArray3 + '\n');

myArray4.shift(); //shiftremove() first out = one
console.log(myArray4 + '\n');

thisIsFucntion();

console.log('Before : ' +JSON.stringify(myArray5)); //JSON.Stringify = print the full array 
thisIsFunction2(myArray5,6);
console.log('After : ' +JSON.stringify(myArray5) + '\n');

console.log(thisIsFunction3(10,10));
console.log(thisIsFunction3(10,'10')); //triple equal(===) will check its variable type too....if double equal(==) then will not check
// same idea for != and !==


//short cut function  
function thisIsFunction4(a,b){
    return a < b; //directly return true or false....nonit if else
}
console.log(thisIsFunction4(10,15));

//<><><>//
console.log('---------------------------------------------------------------------------------------------------------------');
//--------------------------------------------------------------------------------------------------------------------------//
//build object + object properties
var myDog = {
    "Name" : "KaitoKid",
    "Head" : 1,
    "Leg" : 4,
    "Tail" : 1,
    "Eye" : 2,
    "Birthday" : [1997,11,11]
}

console.log('\n' +myDog.Name + ' ' +myDog.Head + ' ' + myDog.Leg + ' ' + myDog.Tail + ' ' + myDog.Eye + '\n' );

//add item to object properties (myDog)
myDog.Bark = "Ohh Yeahhhh"; // myDog["Bark"] = "Ohh Yeahhhh"
//delete item from object properties
delete myDog.Head;
console.log(JSON.stringify(myDog) + '\n');
//check whether it contains that properties or not
var name = "Name"; 
console.log(myDog.hasOwnProperty(name) + '\n');


function thisIsFunction5(value){
    var result = "";

    var lookup = {
        "One" : "Satu",
        "Two" : "Dua",
        "Three" : "Tiga"
    };

    return result = lookup[value];
}

console.log(thisIsFunction5("Three") + '\n');

//nested onject
var myAnime = {
    "AttackOnTitan" : {
        "Titan" : {
            "Eren Yeager" : "Eren Titan",
            "Bertolt Hoover" : "Collosal Titan",
            "Reiner Braun" : "Armored Titan",
            "Annie Leonhardt" : "Female Titan",
            "Zeke Yeager" : "Beast Titan"
        },

        "NonTitan" : {
            "Mikasa" : "Soldier",
            "Armin" : "Gay Boy",
            "Levi" : "Master Soldier"
        }
    },
    
    "Sword Art Online" : {
        "Human" : {
            "Kirito" : "Black Sword(Dual)",
            "Asuna" : "Blue Kirlin"
        },

        "Monster" : {
            "Grimlock" : "Devil Sheep"
        }
    }
}
console.log(myAnime.AttackOnTitan.Titan);

//array with more than 1 object
var myPlant = [
    {
        type : "Flowers",
        list : ["Rose","Tulip","Dandelion"]      
    },

    {
        type : "Trees",
        list : ["Pine","Fir","Birch"]
    }
];

console.log("\nThe plant selected is " +myPlant[0].type + ' ' +myPlant[0].list[0] + '\n');


//
var SoundTrack = {
    "0001" : {
        "album" : "This is ZeroOne",
        "artist" : "Bon Jovi",
        "track" : ["Fuck you","Fuck me","Fuck everybody"]
    },

    "0002" : {
        "album" : "This is ZeroTwo",
        "artist" : "ZeroTwo",
        "track" : []
    },

    "0003" : {
        "album" : "This is ZeroThree",
        "artist" : "Ricardo Milos",
        "track" : ["Dance like a butterfly"]
    },

    "0004" : {
        "artist" : "Namewee"
    },

    "0005" : {

    }
}

var SoundtrackCopy = JSON.parse(JSON.stringify(SoundTrack)); //copy whole collection to another variable
console.log(SoundtrackCopy);

function updateSoundtrack(id,properties,value){
    SoundTrack[id] = SoundTrack[id] || {};
        if (value === ""){
            delete SoundTrack[id][properties];
        }
        else if (properties === "track"){
            //this is to check whether SoundTrack[id][properties] is exist or not
            //if exist, then it equal to itself
            //if no exist, then it open and equal to []
            SoundTrack[id][properties] = SoundTrack[id][properties] || [];
            SoundTrack[id][properties].push(value);
        }
        else{
            SoundTrack[id][properties] = value;
        }
}

updateSoundtrack("0004","album","This is ZeroFour");
updateSoundtrack("0002","track","fly baby fly");
updateSoundtrack("0004","track","fly baby fly");
updateSoundtrack("0005","artist","This is ZeroFive");
updateSoundtrack("0006","artist","This is ZeroSix");
updateSoundtrack("0006","album","This is ZeroSix");
updateSoundtrack("0006","track","06 Song");
console.log(SoundTrack);


var UserProfile = [
    {
        "Name" : "Ricardo Milos",
        "Telephone" : "0122223333",
        "Address" : "Street UrMomGay",
        "Likes" : ["Gay Boy","Gay Girl","Gay Everyone"]
    },
    
    {
        "Name" : "Big Chungus",
        "Telephone" : "01234677756",
        "Address" : "RabbitHole",
        "Likes" : ["Carrot"]
    },
    
    {
        "Name" : "Somebody Toucha Ma Spageth",
        "Telephone" : "0163339299",
        "Address" : "PiakPiak",
        "Likes" : []
    }
];

function lookupProfile(name,properties){
    for (var a = 0; a < UserProfile.length ; a++) {
        if (UserProfile[a].Name === name) {
            return UserProfile[a][properties] || "No such properties found";
        }
    }
    return "No Such Name Found";
}

console.log("\n" + lookupProfile("Somebody Toucha Ma Spageth","Address"));
console.log(lookupProfile("Ricardo Milos","Likes"));


//------------------------------------------------------------------------------------------------//
//Random
// Math.random(); -> will get any number between 0 and 1 ... but will not get 1
// Math.floor(Math.random() * 10); -> will get any number between 0 and 9...will not get 10
//max-min+1 will allow to get the last digit too
//this one is sendiri put the min and max value...it will generate number between the value(including its input min and max value)
function rangeNumber(min,max){
    var aik = Math.random();
    console.log(aik)
    return Math.floor(aik * (max-min+1)) + min;
}

console.log('Here:    ' +rangeNumber(5,15) + '\n');
//-----------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------//
//parse
function convertStrtoInt(str){
    return parseInt(str);
}

console.log(convertStrtoInt("100"));

function convertBintoInt(str){
    return parseInt(str,2);
}

console.log(convertBintoInt("1111") + '\n');
//-----------------------------------------------------------------------------------------------//



//-----------------------------------------------------------------------------------------------//
//ternary operation(write whole long long if else to 1 line only)
function checkEqual(a,b){
    return a === b ? true : false;
}

function checkNum(a) {
    return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero";
    //-----------------------//-------------------//--------
}

console.log(checkNum(-10) + '\n');
//-----------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------//
// let and var
function checking(){
    let a = "Function Scope";
    if (true) {
        let a = "Block Scope";
        console.log("Block Scope a is : " +a);
    }
    console.log("Function Scope a is : " +a);
}

checking();


function checking2(){
    var a = "Function Scope";
    if (true) {
        var a = "Block Scope";
        console.log("Block Scope a is : " +a);
    }
    console.log("Function Scope a is : " +a);
}

checking2();
console.log();
//-----------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------//
//const
//if put const...we cannot change its data...except object and array
//so in order to prevent changes...use Object.Freeze();
const funfun = [5,4,3,2,1];
Object.freeze(funfun);
//funfun[1] = 0;  -> since got ocject.freeze() , this will run with error 
console.log(funfun);


function freezeObj(){
    const Math_Constants = {
        PI : 3.142
    };

    Object.freeze(Math_Constants);

    try{
        Math_Constants.PI = 99;
    } catch(ex){
        console.log('cannot change const data type');
    }
    return Math_Constants.PI;
}

console.log(freezeObj());
//-----------------------------------------------------------------------------------------------//




//-----------------------------------------------------------------------------------------------//
//Arrow Function with Parameters

/*
var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
}
*/
console.log();
//            func/parameter   return value(only if return 1 value nia)
var myConcat = (arr1,arr2) => arr1.concat(arr2); 
console.log(myConcat([1,2],[3,4,5]))



console.log();
const myNumber = [20 , -12 , 2.2 , -30 , 5 , 4.4];
var squareList = (arr) => {
    //                             argument
    var squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
console.log(squareList(myNumber));




//for knowledge
//value = 1 --- if no put in value parameter, then it will be one...if got put then will bcm that put in derr value
console.log();
function incrementation(num,value=1){
    return num + value;
}
console.log(incrementation(5,5));
console.log(incrementation(5));



//by using ...args, can nonit specify how many parameter need put in
console.log();
/*
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
*/
var sum = (...args) => args.reduce((a,b) => a + b, 0);
console.log(sum(1,2,3,4,5,6,7,8,9,10));




//spread
console.log();
const arr1 = [1,2,3,4,5];
var arr2;

arr2 = [...arr1]; //[...arr1] is called as spread...means after put like this...no matter arr1 make any changes, arr2 oso wont change
arr1[0] = 0;

console.log(arr2);





//Destructive
//it is use for neatly assigning the values taken from an object to a variable
const average_temperature = {
    today : 100,
    tomorrow : 50
};

function getTempOfTomorrow(average_temperature){
    //get 'tomorrow' from 'average_temperature' and assign to 'tempOfTomorrow'
    const {tomorrow : tempOfTomorrow} = average_temperature;
    return tempOfTomorrow;
}

console.log(getTempOfTomorrow(average_temperature));


//Destructive in nested object
const average_temperature2 = {
    today : {min:20, max:90},
    tomorrow : {min:30, max:70},
    test : { min:20, max:30, lpl:{min:30,max:500} }
};

function getTempOfTomorrow2(average_temperature2){
    //get 'max' of 'tomorrow' from 'average_temperature2' and put in 'tempOfTomorrow'
    //const {tomorrow : {max : tempOfTomorrow}} = average_temperature2;
    const { test: {lpl : {max : tempOfTomorrow}} } = average_temperature2;
    return tempOfTomorrow;
}

console.log(getTempOfTomorrow2(average_temperature2) + '\n');





//-----------------------------------------------------------------------------------------------//
//For Knowledges
//get the first,scond and forth value from array
const [p,o, ,l] = [1,2,3,4,5];
console.log(p,o,l);

//terbalik a and b in only 1 row
let j = 7 , k = 8;
[j,k] = [k,j];
console.log(j,k);

//remove infront selected array value
const TheSource = [1,23,4,45,56,6,7,87];
function removeFirst2Source(TheSource){
    const [ , , ...umi] = TheSource;
    return umi;
}
console.log(removeFirst2Source(TheSource));

//using `` not '' 
const person = {
    name: "Mark SuckABird",
    title : "FB Owner"
}
const greeting = `Hi, I am ${person.name}, and I am the ${person.title} !`;
console.log(greeting);

//function declare in object 
//first way
const bicycle = {
    gear : 2,
    setGear : function(newGear){
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//second way
const bicycle2 = {
    gear : 2,
    setGear(newGear){
        this.gear = newGear;
    }
};
bicycle2.setGear(3);
console.log(bicycle2.gear);
//-----------------------------------------------------------------------------------------------//




//-----------------------------------------------------------------------------------------------//
//class
class AnimeClass{
    constructor(title,month){
        this._title = title;
        this._month = month;
    }

    get AnimeTitle(){
        return this._title;
    }

    get AnimeMonth(){
        return this._month;
    }

    set AnimeTitle(updatetitle){
        this._title = updatetitle;
    }

    set AnimeMonth(updatemonth){
        this._month = updatemonth;
    }
}

const AInput = new AnimeClass('One Piece','January');

let temp1 = AInput.AnimeTitle;
let temp2 = AInput.AnimeMonth;

temp1 = AInput.AnimeTitle = 'One Punch Man';
temp2 = AInput.AnimeMonth = 'April';

console.log('\n' + temp1 + ' will be launch in ' +temp2 + ' !!!\n');
//-----------------------------------------------------------------------------------------------//








//-----------------------------------------------------------------------------------------------//
//JS Nuggets for Array iteration
//For Each
var Ainz = [1,2,3];
Ainz.forEach(function(item,index){
    console.log(item,index);
});

//map
//takes item from array, does smtg on it, and put back the item in the same place
var Ooal = [1,2,3];
var ooal = Ooal.map(function(item){
    return item * 2;
});
console.log(ooal);

//filter
//take from array and check each item with condition to see is true/false. True, put item back to array. False, then no put in array
var Gown = [1,2,3];
const gown = Gown.filter(function(Gown){
    return Gown % 2 ===0;
});
console.log(gown);

//reduce
var Overlord = [1,2,3,4,5,6,7,8,9,10];
const overlord = Overlord.reduce((a,b) => a+b,0);
console.log(overlord);

//some
//from the array, check see if anyone meet the condition, if yes,even thou just 1 meet only, also return true
//return true false format
var xSomebody = [1,2,3,4,-1];
const xsomebody = xSomebody.some(xSomebody => xSomebody < 0);
console.log(xsomebody);

//every
//terbalik of 'some'
//return true false format
var xToucha = [1,2,3,4,-1];
const xtoucha = xToucha.every(xToucha => xToucha < 0);
console.log(xtoucha);

//find
var xMy = [{a:1},{a:2},{a:3},{a:4},{a:5}];
const xmy = xMy.find(xMy => xMy.a === 3);
console.log(xmy);

//find index
var xSpaghet = [{a:1},{a:2},{a:3},{a:4},{a:5}];
const mspaghet = xSpaghet.findIndex(xSpaghet => xSpaghet.a === 3);
console.log(mspaghet);



/*encryption
var str = "Ricardo Milos";
var answer;
function encryption(a){
    answer = encrypt(a);
    console.log(answer);
}

encryption(str);


//decryption
*/

//-----------------------------------------------------------------------
//start from here is ES6
console.log('-----------------------------------------------------------');

function addressMaker(address){
    const {city,state} = address;

    const newAddress = {
        city,
        state,
        country : 'Malaysia'
    };
    console.log(`${newAddress.city} , ${newAddress.state} , ${newAddress.country}`);
}

addressMaker({city:'Klang' , state:'Selangor'});


//for of loop
let incomes = [100,200,300];
let incomeTotal = 0;

for (const income of incomes){
    incomeTotal += income;
}
console.log(incomeTotal);


//import and export(from Export.js)
//format is correct...dont know why cannot run in terminal
/*
import { expData } from './Export.js';
console.log(lolpp);
*/


//Async & Await
const theUrl = 'https://www.heroku.com/home';
global.fetch = require("node-fetch");
function getTheUrl(){
    fetch(theUrl)
    .then((r) => r.url)
    .then((json) => {
        console.log(json[0]); //print 'h' will be correct
    }).catch((error) => {
        console.log('Error');
    });
}

getTheUrl();



