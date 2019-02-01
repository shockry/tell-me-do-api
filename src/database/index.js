const database = {};

exports.insert = function(model, data) {
  return new Promise(resolve => {
    database[model] = database[model] || [];
    database[model].push(data);
    resolve(true);
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
