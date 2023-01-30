
//1 , 2
interface User {
    [key: string]: any
    age: number,
    name: string,
    occupation: string,
}


let persons: users[] = [
    { age: 20, name: "Bader", occupation: "one" },
    { age: 22, name: "Fahad", occupation: "two" },
    { age: 45, name: "Saleh", occupation: "three" },
    { age: 35, name: "Hitham", specialty: "React" },
    { age: 22, name: "Masha", specialty: "JS" },
    { age: 18, name: "Lamiia", specialty: "C#" }
]
//3
interface Admin {
    age: number,
    name: string,
    specialty: string,
}

function all_print() {
    for (let y of persons) {
        console.log(y)
    }
}
all_print()

//
interface Admin {
    [key: string]: any
    age: number,
    name: string,
    specialty: string
}

type users = User | Admin

//4
function is_admin(person) {

    for (let x of person) {
        if ("occupation" in x) {
            console.log(`The User Info: Name:${x.name}, Age:${x.age}, Occupation:${x.occupation}`)
        } else if("specialty" in x) {
            console.log(`Admin Info: Name:${x.name}, Age:${x.age}, Specialty:${x.specialty}`)
        }
    }
}
is_admin(persons);

//5
function change_age(name: string, age: number) {
    for (let x of persons) {
        if (x.name == name) {
            x.age = age
        }
    }
    console.log(persons)
}
change_age("Hitham", 18)