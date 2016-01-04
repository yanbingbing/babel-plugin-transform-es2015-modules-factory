import template from "babel-template";

let buildDefine = template(`
  (function (global, factory) {
    if (typeof exports !== "undefined") {
      module.exports = factory;
    } else {
      global.MODULE_NAME = factory;
    }
  })(this, function (window, document) {
  	(function () {
  		BODY;
  	}).call(window)
  });
`);

export default function ({ types: t }) {
  return {
    inherits: require("babel-plugin-transform-es2015-modules-commonjs"),

    visitor: {
      Program: {
        exit(path) {
          if (this.ran) return;
          this.ran = true;
          
          path.traverse({}, this);

          let moduleName = this.getModuleName();
          if (moduleName) moduleName = t.stringLiteral(moduleName);

          path.node.body = [buildDefine({
            MODULE_NAME: moduleName,
            BODY: path.node.body
          })];
        }
      }
    }
  };
}