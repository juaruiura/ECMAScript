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