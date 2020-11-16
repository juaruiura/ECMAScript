//Defaults
// Antes de ECMAScript6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//ECMAScript 6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
}

//Concatenate
// Antes
newFunction2();
newFunction2('Ricardo', 23, 'CO');
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// Después
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multiline
//Antes
let lorem = "Quiero escribir una frase épica que podamos separar \n"
+ "otra frase épica que necesitamos.";
console.log(lorem);
//Después
let lorem2 = `Esto es una frase épica que podamos separar
ahora es otra frase épica.`;
console.log(lorem2);

//Destructuring
let person = {
    "name": "oscar",
    "age" : 32,
    "country" : "MX"
}
//Antes
console.log(person.name, person.age);
//Después
let { name} = person;
console.log(name);

//Spread Operator
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

//Scope: Let/Const
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let"
    console.log(`Aquí sí está definido ${globalLet}`);
}
console.log(globalVar);
console.log(globalLet);
const a = "a";
//a = "b" Assigntment to constant variable Error;
console.log(a);

//Parameters in objects
let name = "Oscar";
let age = 32;
//Antes (ECMAScript 5)
obj = { name: name, age: age };
console.log(obj);
//Después (ECMAScript 6)
obj2 = { name, age };
console.log(obj2);

//Arrow Function
const names = [
    { name: "Oscar", age: 32 },
    { name: "Yesica", age: 27 }
]
//Antes
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//Después
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    //Code...
}
const listOfNames4 = name => {
    //Code...
}
const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log("Hola"))
    .catch(error => console.log(error));