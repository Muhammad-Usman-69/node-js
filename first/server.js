/* module */
// import { a, b } from "./module.js"
// import veges from "./module.js"; // veges are actually fruits but fruits are exported as default

// console.log(a, b)
// console.log(veges);

/* common */
const obj = require("./common.js");
console.log(obj, __filename, __dirname) // last two para were actually wrapped in common js function by node js