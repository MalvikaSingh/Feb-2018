'use strict';
// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('userReview', ['ngAnimate', 'ui.router', 'ui.materialize'])
// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        // route to show our basic form (/form)
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'js/views/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'vm'
        })
        .state('dashboard.search', {
            url: '/search',
            templateUrl: 'js/views/search-form.html'
        })
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('dashboard.results', {
            url: '/result',
            templateUrl: 'js/views/search-results.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'js/views/admin.html',
            controller: 'adminController',
            controllerAs: 'vm'
        })
        .state('extract', {
            url: '/extract',
            templateUrl: 'js/views/extract.html',
            controller: 'extractController',
            controllerAs: 'vm'
        });
        

        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/dashboard/search');
})



