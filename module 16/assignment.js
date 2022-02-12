//Problem No: 1 # Feet to Mile Conversion Program

function feetToMile(feet) {
    if (feet == 0) {
        console.log("You enter an empty number!")
    } else if (feet < 0) {
        console.log("Distance can't be negative!");
    } else {
        var mile = feet * 0.000189394; // Here 1 Feet = 0.000189394 Mile.
    }
    return mile;
}
var resultMile = feetToMile(25000);
console.log(resultMile);



//Problem No: 2 # Calculate Wood For Your Chair, Table & Bed.

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("The number of furniture can't be negative!")
    } else {
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;
    }
    return totalWood;
}
var woodCount = woodCalculator(12, 4, 3);
console.log(woodCount);



//Problem No: 3 # Find Total Bricks of a Building

function brickCalculator(BuildingSize) {
    var firstToTen = 15;
    var elevenToTwenty = 12;
    var twentyOneToAll = 10;

    if (BuildingSize < 0 || BuildingSize == 0) {
        console.log("Building Size cannot be negative or zero");
    } else {
        if (BuildingSize <= 10) {
            firstToTen = firstToTen * BuildingSize;
            var totalBricks = firstToTen * 1000;
        } else if (BuildingSize <= 20) {
            firstToTen = firstToTen * 10;
            elevenToTwenty = BuildingSize - 10;
            BuildingSize = firstToTen + (elevenToTwenty * 12);
            var totalBricks = BuildingSize * 1000;
        } else {
            firstToTen = firstToTen * 10;
            elevenToTwenty = elevenToTwenty * 10;
            twentyOneToAll = BuildingSize - 20;
            BuildingSize = firstToTen + elevenToTwenty + (twentyOneToAll * 10);
            var totalBricks = BuildingSize * 1000;
        }
    }
    return totalBricks;
}

var buildingBricks = brickCalculator(18);
console.log(buildingBricks);



//Problem No: 4 # Finding TinyFriend

function tinyFriend(numbers){
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
        var fList = numbers[i];
        if(fList.length < tiny.length){
        tiny = fList;
        }
    }
    return tiny;
}
   
var friendsList = ['Riyad', 'Faysal', 'Alam', 'Rakib', 'Rahat', 'Raju'];
var checkTiny = tinyFriend(friendsList);
console.log(checkTiny);