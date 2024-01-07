"use strict";

console.log("hello from alpha.js");

var v_alpha = function () {
  console.log("hello form inside v_alpha");

  return {
    init: function () {
      console.log("hello from inside v_alpha:init");
    },
  };
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = v_alpha;
}
