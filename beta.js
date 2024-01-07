"use strict";

console.log("hello from beta.js");

var v_beta = function () {
  console.log("hello form inside v_beta");

  return {
    init: function () {
      console.log("hello from inside v_beta:init");
      v_alpha.init();
    },
  };
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = v_beta;
}
