// "browser", "node", "common", undefined
const environment = typeof window === 'object' ? "browser" : (typeof module !== 'undefined' && module.exports) ? "node" : (typeof define !== 'undefined' && define.amd) ? "common" : undefined;


let Thread;

if(environment === "node") {
  const cluster = require("cluster");

  Thread = function(file, data) {
    // Do something to `cluster` here...
  }
} else if(environment === "browser") {
  Thread = window.Worker;

} else {
  // throw new error
}

module.exports = Thread;
