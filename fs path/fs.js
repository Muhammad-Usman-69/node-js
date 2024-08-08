const fs = require("fs");


console.log("function start ho rha ha");

fs.writeFile("CIA.txt", "uga buga", () => {
    console.log("write ho gya");
})

console.log("function end ho gya");

fs.readFile("CIA.txt", (error, data) => {
    console.log(error, "Data is", data.toString())
});