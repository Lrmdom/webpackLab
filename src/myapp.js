const logger = require("./myLogger");

const os = require("os"); //core modules are called without ./
const fs = require("fs");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`total memory: ${totalMemory}`);

console.log(`free memory: ${freeMemory}`);

//not working only with backtick ``
console.log("total memory: ${totalMemory}");
logger.log("hello leonel");
