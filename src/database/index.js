const fs = require("fs");

const databaseFilePath = "/Users/shared/db/database";
let database = {};

exports.initializeDatabase = function() {
  if (fs.existsSync(databaseFilePath)) {
    const data = fs.readFileSync(databaseFilePath);
    database = data.length > 0 ? JSON.parse(data) : {};
  }
};

exports.insert = function(model, data) {
  return new Promise(resolve => {
    database[model] = database[model] || [];
    const randomId = Math.floor(Math.random() * 1000000 + 1);
    database[model].push({ ...data, id: randomId });
    commit(resolve);
  });
};

exports.findFirst = function(model, query) {
  return new Promise(resolve => {
    resolve(database[model].find(item => compare(item, query)));
  });
};

exports.find = function(model, query) {
  return new Promise(resolve =>
    resolve(database[model].filter(item => compare(item, query)))
  );
};

exports.update = function(model, query, updatePatch) {
  return new Promise(resolve => {
    database[model] = database[model].map(item =>
      compare(item, query) ? { ...item, ...updatePatch } : item
    );
    commit(resolve);
  });
};

exports.delete = function(model, query) {
  return new Promise(resolve => {
    database[model] = database[model].filter(item => !compare(item, query));
    commit(resolve);
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

function commit(resolve) {
  fs.writeFile(databaseFilePath, JSON.stringify(database), () => {
    resolve(true);
  });
}
