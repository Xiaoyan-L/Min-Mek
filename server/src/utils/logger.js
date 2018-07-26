const rfs = require("rotating-file-stream");
const path = require("path");
const fs = require("fs");

const logDir = path.join(__dirname, '../../', 'logs');
fs.existsSync(logDir) || fs.mkdirSync(logDir);

module.exports = rfs('access.log', {
  interval: '1d',
  path: logDir
});

