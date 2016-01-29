/**
 * Created by Данила on 12.01.2016.
 */

var angular = require('angular');
var ngModule = angular.module('app',['inputFormsCntrls']);
require('./directives')(ngModule);
require('./controllers')(ngModule);
require('./services/formsServ.js')(ngModule);