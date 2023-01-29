var Student1 = {
    id: 1,
    name: "Bader",
    level: "A",
    isSenior: true,
    typeTeacher: false
};
var Student2 = {
    id: 2,
    name: "Mohammd",
    level: "A",
    isSenior: false,
    typeTeacher: false
};
var Student3 = {
    id: 3,
    name: "Saleh",
    level: "A",
    isSenior: true,
    typeTeacher: false
};
console.log(Student1.id);
//2
var school = [];
school.push(Student1, Student2, Student3);
console.log(school);
//3
function print_Student() {
    for (var i = 0; i < school.length; i++) {
        console.log("variables = " + school[i].id + " | " + school[i].name + " | " + school[i].level + " | " + school[i].isSenior);
    }
}
print_Student();
var Teacher1 = {
    id: 1,
    name: "Hiathm",
    specialty: "Full Stack Dev ",
    courseNum: 1,
    typeTeacher: true
};
var Teacher2 = {
    id: 2,
    name: "Masha",
    specialty: "JavsScrip Full Satck Back-End Dev  ",
    courseNum: 2,
    typeTeacher: true
};
var Teacher3 = {
    id: 2,
    name: "Lamia",
    specialty: "Back-End Dev",
    courseNum: 3,
    typeTeacher: true
};
//5
school.push(Teacher1, Teacher2, Teacher3);
console.log("------" + school);
// Student or teacher
var Student_or_teacher = function () {
    for (var i = 0; i < school.length; i++) {
        if (school[i].typeTeacher == true) {
            console.log("You are Teacher");
        }
        else if (school[i].typeTeacher == false) {
            console.log("You are Student");
        }
    }
};
Student_or_teacher();
//7
var isSenior = function () {
    if (Student1.isSenior == true) {
        Student1.isSenior = false;
        console.log(Student1.isSenior);
    }
    else {
        Student1.isSenior = true;
        console.log(Student1.isSenior);
    }
};
isSenior();
//8 
// courseNum
var courseNumChanged = function () {
    Teacher2.courseNum += 1;
    console.log(Teacher2.courseNum);
};
courseNumChanged();
