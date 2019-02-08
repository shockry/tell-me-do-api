const fs = require("fs");

const databaseFilePath = "/Users/shared/db/database";
let database = {};

exports.initializeDatabase = function() {
  if (fs.existsSync(databaseFilePath)) {
    const data = fs.readFileSync(databaseFilePath);
    database = JSON.parse(data);
  }
};

exports.insert = function(model, data) {
  return new Promise(resolve => {
    database[model] = database[model] || [];
    database[model].push(data);
    fs.writeFile(databaseFilePath, JSON.stringify(database), () => {
      resolve(true);
    });
  });
};

exports.get = function(model, query) {
  return new Promise(resolve => {
    resolve(database[model].find(item => compare(item, query)));
  });
};

function compare(item, query) {
  for (const prop in query) {
    if (item[prop] !== query[prop]) {
      return false;
    }
  }
  return true;
}
