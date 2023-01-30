//1 ,2
interface Car {
    make: string;
    model: string;
    year: number;
   
};
let Car1: Car ={
    make: "BMW",
    model: "F1",
    year: 2020,
   
};
let Car2 : Car={
    make: "Toyota",
    model: "pickup car",
    year: 2021,
};
let Car3 : Car={
    make: "kia",
    model: "B2",
    year: 2022,
   
};
let cars:any=[];
cars.push(Car1,Car2,Car3)
//3,4,5
function honk():any {
    for (let i = 0; i < cars.length; i++) {
        console.log("Car Data = " + cars[i].make+ " | "+ cars[i].model+" | "+ cars[i].year+" | ");
      }
  }

  honk();
console.log("------------------------------------------------------------------");

//6
function just_year():any {
    for (let i = 0; i < cars.length; i++) {
        console.log("The Model Of the Car is : " + cars[i].model);
      }
  }

  just_year();

  //7
  function just_model():any {
    for (let i = 0; i < cars.length; i++) {
        console.log("The Year Of the Car is : " + cars[i].year);
      }
  }

  just_model();