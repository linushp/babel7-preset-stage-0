var plugin_proposal_function_bind = require("@babel/plugin-proposal-function-bind");
var plugin_proposal_export_default_from = require("@babel/plugin-proposal-export-default-from");
var plugin_proposal_logical_assignment_operators = require("@babel/plugin-proposal-logical-assignment-operators");
var plugin_proposal_optional_chaining = require("@babel/plugin-proposal-optional-chaining");
var plugin_proposal_pipeline_operator = require("@babel/plugin-proposal-pipeline-operator");
var plugin_proposal_nullish_coalescing_operator = require("@babel/plugin-proposal-nullish-coalescing-operator");
var plugin_proposal_do_expressions = require("@babel/plugin-proposal-do-expressions");
var plugin_proposal_decorators = require("@babel/plugin-proposal-decorators");
var plugin_proposal_function_sent = require("@babel/plugin-proposal-function-sent");
var plugin_proposal_export_namespace_from = require("@babel/plugin-proposal-export-namespace-from");
var plugin_proposal_numeric_separator = require("@babel/plugin-proposal-numeric-separator");
var plugin_proposal_throw_expressions = require("@babel/plugin-proposal-throw-expressions");
var plugin_syntax_dynamic_import = require("@babel/plugin-syntax-dynamic-import");
var plugin_syntax_import_meta = require("@babel/plugin-syntax-import-meta");
var plugin_proposal_class_properties = require("@babel/plugin-proposal-class-properties");
var plugin_proposal_json_strings = require("@babel/plugin-proposal-json-strings");




module.exports = function(){
  return {
      "plugins": [
          // Stage 0
          plugin_proposal_function_bind,

          // Stage 1
          plugin_proposal_export_default_from ,
          plugin_proposal_logical_assignment_operators ,
          [plugin_proposal_optional_chaining, { "loose": false }],
          [plugin_proposal_pipeline_operator, { "proposal": "minimal" }],
          [plugin_proposal_nullish_coalescing_operator, { "loose": false }],
          plugin_proposal_do_expressions,

          // Stage 2
          [plugin_proposal_decorators, { "legacy": true }],
          plugin_proposal_function_sent,
          plugin_proposal_export_namespace_from,
          plugin_proposal_numeric_separator,
          plugin_proposal_throw_expressions,

          // Stage 3
          plugin_syntax_dynamic_import,
          plugin_syntax_import_meta ,
          [plugin_proposal_class_properties, { "loose": false }],
          plugin_proposal_json_strings
      ]
  };
};