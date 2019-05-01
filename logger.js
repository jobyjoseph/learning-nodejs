var url = "http://mylogger.io/log"; // going to be private

function log(message) {
  // send request to url. but now we are just logging in console.
  console.log(message);
}

module.exports.log = log;
