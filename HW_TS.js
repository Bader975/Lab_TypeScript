;
var Car1 = {
    make: "BMW",
    model: "F1",
    year: 2020
};
var Car2 = {
    make: "Toyota",
    model: "pickup car",
    year: 2021
};
var Car3 = {
    make: "kia",
    model: "B2",
    year: 2022
};
var cars = [];
cars.push(Car1, Car2, Car3);
//3,4,5
function honk() {
    for (var i = 0; i < cars.length; i++) {
        console.log("Car Data = " + cars[i].make + " | " + cars[i].model + " | " + cars[i].year + " | ");
    }
}
honk();
console.log("------------------------------------------------------------------");
//6
function just_year() {
    for (var i = 0; i < cars.length; i++) {
        console.log("The Model Of the Car is : " + cars[i].model);
    }
}
just_year();
//7
function just_model() {
    for (var i = 0; i < cars.length; i++) {
        console.log("The Year Of the Car is : " + cars[i].year);
    }
}
just_model();
