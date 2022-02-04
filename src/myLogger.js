const url = "http://mylogger.io/log";
console.log(__dirname);
console.log(__filename);
function log(message) {
  console.log(message);
}

module.exports.log = log;
module.exports.url = url;

//can export a function instead a object... ex: module.exports={log:log, url:url} or module.exports=log
