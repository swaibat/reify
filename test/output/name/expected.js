"use strict";var module1=module;module1.export({foo:()=>foo});module1.export({id:()=>id,name:()=>name},true);const path = require("path");

const id = module.id,
  name = path.basename(__filename);

function foo() {
  return "foo";
}
