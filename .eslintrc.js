module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb-base"
  ],
  "globals": {
    "window": true,
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "describe": "readonly",
    "context": "readonly",
    "before": "readonly",
    "beforeEach": "readonly",
    "after": "readonly",
    "afterEach": "readonly",
    "it": "readonly",
    "expect": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "no-undef": "error"
  },
};
