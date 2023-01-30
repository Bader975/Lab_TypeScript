//1
interface Student {
    id: number;
    name: string;
    level: string;
    isSenior: boolean;
    typeTeacher:boolean;
}
let Student1: Student = {
    id: 1,
    name: "Bader",
    level: "A",
    isSenior: true,
    typeTeacher:false,
};
let Student2: Student = {
    id: 2,
    name: "Mohammd",
    level: "A",
    isSenior: false,
    typeTeacher:false,
};
let Student3: Student = {
    id: 3,
    name: "Saleh",
    level: "A",
    isSenior: true,
    typeTeacher:false,
};
console.log(Student1.id);

//2
let school:any=[];
school.push(Student1,Student2,Student3)
console.log(school);

//3
function print_Student():any {
    for (let i = 0; i < school.length; i++) {
        console.log("variables = " + school[i].id+" | "+ school[i].name+" | "+ school[i].level+" | "+ school[i].isSenior);
      }
  }

  print_Student()

 //4

// Aliases
 type isTeacher = boolean | string;

 interface Teacher{
    id: number;
    name: string;
    specialty: string;
    courseNum: number;
    typeTeacher:isTeacher;
 }

 let Teacher1:Teacher = {
    id: 1,
    name: "Hiathm",
    specialty: "Full Stack Dev ",
    courseNum: 1,
    typeTeacher:true,
}; 
let Teacher2: Teacher = {
    id: 2,
    name: "Masha",
    specialty: "JavsScrip Full Satck Back-End Dev  ",
    courseNum: 2,
    typeTeacher:true,
}; 
let Teacher3: Teacher = {
    id: 2,
    name: "Lamia",
    specialty: "Back-End Dev",
    courseNum: 3,
    typeTeacher:true,
};
//5
school.push(Teacher1,Teacher2,Teacher3)
console.log("------"+school);


// Student or teacher
const Student_or_teacher = () => {
    for (let i = 0; i < school.length; i++) {
        if(school[i].typeTeacher==true){
        console.log("You are Teacher");
    }
    else if(school[i].typeTeacher==false){
        console.log("You are Student");
    }
  }
  
}
Student_or_teacher()
  
  //7
const isSenior = () => {
   
      if(Student1.isSenior==true) {
        Student1.isSenior=false;
        console.log(Student1.isSenior);
      }
      else{
        Student1.isSenior=true;
        console.log(Student1.isSenior);
        
      }
  }
  isSenior();

//8 
// courseNum
const courseNumChanged = (C:number)=> {
    Teacher2.courseNum=C;
    console.log("New Number :"+Teacher2.courseNum);
  
  };
  courseNumChanged(5)


