const spawn = require('child_process').spawn;

module.exports.shutdown = function (timeout, force, message) {
    // check if force flag is provided
    force = !!force;
    // build argumnets
    let args = ['-s'];
    if (timeout) {
      args.push('-t');
      args.push(parseInt(timeout, 10));
    }
    if (force) {
      args.push('-f');
    }
    if (message) {
      args.push('-m');
      args.push(`"${message}"`);
    }
    // execute the shutdown command
    return spawn('shutdown', args);
  };

module.exports.abort = function () {
    return spawn('shutdown', ['-a']);
};
  