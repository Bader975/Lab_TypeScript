var persons = [
    { age: 20, name: "Hitham", occupation: "one" },
    { age: 22, name: "Masha", occupation: "two" },
    { age: 45, name: "Lamiia", occupation: "three" },
    { age: 35, name: "Bader", specialty: "JS" },
    { age: 22, name: "Fahad", specialty: "HTML" },
    { age: 18, name: "Saleh", specialty: "CSS" }
];
function all_print() {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var x = persons_1[_i];
        console.log(x);
    }
}
all_print();
//4
function is_admin(person) {
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var x = person_1[_i];
        if ("occupation" in x) {
            console.log("User Info: Name:".concat(x.name, ", Age:").concat(x.age, ", Occupation:").concat(x.occupation));
        }
        else if ("specialty" in x) {
            console.log("Admin Info: Name:".concat(x.name, ", Age:").concat(x.age, ", Specialty:").concat(x.specialty));
        }
    }
}
is_admin(persons);
//5
function change_age(name, age) {
    for (var _i = 0, persons_2 = persons; _i < persons_2.length; _i++) {
        var x = persons_2[_i];
        if (x.name == name) {
            x.age = age;
        }
    }
    console.log(persons);
}
change_age("Hitham", 18);
