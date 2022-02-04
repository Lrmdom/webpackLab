const EventEmitter = require("events");
const emitter = new EventEmitter();
//register a listener
emitter.on("msglogged", function (arg) {
  console.log("listener called", arg.url);
});

emitter.emit("msglogged", { id: 1, url: "http://leo.pt" });
