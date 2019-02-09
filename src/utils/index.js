exports.pick = function pick(object, props) {
  const newObject = {};

  for (let prop of props) {
    if (prop in object) {
      newObject[prop] = object[prop];
    }
  }

  return newObject;
};
