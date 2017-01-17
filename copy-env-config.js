var fs = require('fs');

// Create www folder if it doesn't exist 
if (!fs.existsSync('www')) {
  fs.mkdir('www');
}

for (var i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--env') {
    if (process.argv[i + 1]) {
      jsonConfigurationFile = process.argv[i + 1] + '.json';
    }
  }
}

var rd = fs.createReadStream('src/environments/' + jsonConfigurationFile);
var wd = fs.createWriteStream('www/env-configuration.json');

rd.on('error', handleError);
wd.on('error', handleError);

function handleError(err) {
  rd.destroy();
  wd.end();
  console.log('There was an error while copying the environment configuration');
  console.log(err);
}

rd.pipe(wd);
