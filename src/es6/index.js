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