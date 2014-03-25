'use strict';


// Declare app level module which depends on filters, and services
angular.module('invoiceApp', [
  'ngRoute',
  'invoiceApp.filters',
  'invoiceApp.services',
  'invoiceApp.directives',
  'invoiceApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial.html', controller: 'InvoiceController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
