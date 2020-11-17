//Flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());
console.log(array.flat(2));
//Flat Map
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));
//Trim Start/End
let hello = "   hello world";
console.log(hello);
console.log(hello.trimStart());
let hello = "hello world   ";
console.log(hello);
console.log(hello.trimEnd());
//Optional Catch Binding
try {
    //Code
} catch {
    //Code
}
//Entries (array to object)
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));
//Symbol.description
let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);