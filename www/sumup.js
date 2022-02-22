const CLASS = "SumUp";

module.exports = {
  login: (sumUpKeys, success, failure) => {
    cordova.exec(success, failure, CLASS, "login", [sumUpKeys]);
  },
  getSettings: (success, failure) => {
    cordova.exec(success, failure, CLASS, "getSettings", []);
  },
  logout: (success, failure) => {
    cordova.exec(success, failure, CLASS, "logout", []);
  },
  isLoggedIn: (success, failure) => {
    cordova.exec(success, failure, CLASS, "isLoggedIn", []);
  },
  prepare: (success, failure) => {
    cordova.exec(success, failure, CLASS, "prepare", []);
  },
  setup: (success, failure) => { // iOS only
    cordova.exec(success, failure, CLASS, "setup", []);
  },
  test: (success, failure) => { // iOS only
    cordova.exec(success, failure, CLASS, "test", []);
  },
  pay: (amount, title, currencyCode, success, failure) => {
    cordova.exec(success, failure, CLASS, "pay", [amount, title, currencyCode]);
  },
};
