/** * @fileoverview this plugin is aimed to contain eslint rules specific to ZinkyJS * @author burawi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------



// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



