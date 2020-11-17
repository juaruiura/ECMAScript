//Object.entries
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Values
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
};
const values = Object.values(data);
console.log(values);

//Padding
const string = "hello";
console.log(string.padStart(8, "hi"));
console.log(string.padEnd(12, "----"));

//Trailing commas
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
};

//Async functions and Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 2000)
            : reject(new Error("Test Error"));
    });
};
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction();