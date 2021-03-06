/* eslint-disable no-console */

const typeErrors = {
  int: 'Please enter a valid integer',
  float: 'Please enter a valid number',
  bool: 'Please enter a \'true\' or \'false\' value',
};

module.exports = (value, type) => {
  let test = true;
  switch (type) {
    case 'int': {
      if (isNaN(parseInt(value))) {
        test = typeErrors[type];
      }
      break;
    }
    case 'float': {
      if (isNaN(parseFloat(value))) {
        test = typeErrors[type];
      }
      break;
    }
    case 'bool':
      if (value !== 'true') {
        test = typeErrors[type];
      }
      break;
    case 'string':
    case 'any':
    default:
      break;
  }
  return test;
};
