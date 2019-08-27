const factorial = require("./factorial");
const Thread = require("./index");

const thread_0 = new Thread();
const thread_1 = new Thread(factorial);
const thread_2 = new Thread(factorial, 20);

thread_0.on("message", function(message) {
  console.log(`Thread 0 Message: ${message}`);
})
thread_1.on("message", function(message) {
  console.log(`Thread 1 Message: ${message}`);
})
thread_2.on("message", function(message) {
  console.log(`Thread 2 Message: ${message}`);
})

thread_0.send(10);
thread_1.send(10);
thread_2.send(10);

thread_0.on("error", function(error) {
  console.log(`Thread 0 Error: ${error}`);
})
thread_1.on("error", function(error) {
  console.log(`Thread 1 Error: ${error}`);
})
thread_2.on("error", function(error) {
  console.log(`Thread 2 Error: ${error}`);
})

thread_0.send("Hello, World!");
thread_1.send("Hello, World!");
thread_2.send("Hello, World!");
