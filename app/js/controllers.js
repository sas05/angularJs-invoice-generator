'use strict';

/* Controllers */

var invoiceApp = angular.module('invoiceApp.controllers', []);


invoiceApp.controller('InvoiceController', function($scope) {

    var sampleData = {
        invoiceId: 293899,
        vat: 15,
        discount: 5,
        customer: {name: 'Saeed Ahmed', company: 'FoodMaster Ltd', address1: 'House 191#, Asam Colony', address2: 'Rajshahi, Bangladesh, BD', zip: 6203},
        company: {name: 'Metrodesk LTD', company: 'www.metrodesk.com.bd', address1: 'Floor #8, Hauqe Chembar, Panthopoth', address2: 'Dhaka, Bangladesh, BD', zip: 1205, phone: '(234) 145-1810', manager: 'Full Name', email: 'first.last@email.com'},
        orders: [
            {item: 'Hardware', quantity: 32, details: 'Server hardware purchase', perUnitPrice: 75}
        ]
    };

    if(localStorage.invoice == "" || localStorage.invoice == null) {
        $scope.invoice = sampleData;
    }else {

    }

    $scope.removeOrder = function(order) {
        $scope.invoice.orders.splice($scope.invoice.orders.indexOf(order), 1);
        console.log("hello world");
    }

    $scope.addOrderRow = function() {
        $scope.invoice.orders.push({quantity:0, details:0, perUnitPrice:""});
    }

    $scope.subTotal = function() {
        var subTotal = 0.00;

        angular.forEach($scope.invoice.orders, function(order, key) {
            subTotal = subTotal + (order.quantity * order.perUnitPrice);
        });

        return subTotal;
    }

    $scope.total = function() {
        return $scope.subTotal() - ($scope.vatCalculate() + $scope.discountCalculate());
    }

    $scope.discountCalculate = function() {
        return $scope.subTotal() * ($scope.invoice.discount/100);
    }

    $scope.vatCalculate = function() {
        return $scope.subTotal() * ($scope.invoice.vat/100);
    }

    $scope.editLogo = function() {
        alert('working');
    }
});