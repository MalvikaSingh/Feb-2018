'use strict';
angular.module('userReview')
    .controller('dashboardController', ['dashboardService', '$q', '$state', function (dashboardService, $q, $state) {
        var vm = this;

        var steps = {
            "dashboard.search": 1,
            "dashboard.results": 2
        };

        vm.searchForm = {};
        vm.applications = [];

        vm.getApplicationName = function (code) {
           var app = vm.applications.filter(function(obj) {
               return obj.value === code;
           });

           if (app.length > 0) {
               return app[0].label;
           }
        }
    
        vm.getStepNumber = function () {
            if($state.current.name) {
                return steps[$state.current.name]
            } else {
                return 0
            }
        }

        function fetchMetaData () {
            dashboardService.getMetaData()
                .then(function (response) {
                    vm.metaData = response.data;
                })
                .catch(function (error) {
                    console.log('error'+ error)
                });
        }

        vm.fetchUsers = function () {
            var payload = {
                year: vm.searchForm.selectedYear,
                month: vm.searchForm.selectedMonth,
                country: vm.searchForm.selectedCoutry,
                apps: vm.searchForm.selectedApplication
            };
            //console.log('payload'+ JSON.stringify(payload));
            dashboardService.getUserData(payload)
                .then(function(response) {
                    //Need to remove JSON.parse once use API call.
                    vm.userData = response.data;
                    $state.transitionTo('dashboard.results', {arg:'arg'});
                })
                .catch(function (error) {
                    console.error('error in user data call'+ error);
                });
        }

        function activate() {
            // loading dropdowns
            fetchMetaData();
            $q.all([
                dashboardService.getApplications(),
                dashboardService.getCountries(),
                dashboardService.getMonths(),
                dashboardService.getYears()
            ]).then(function (data) {
                vm.applications = data[0];
                vm.countries = data[1];
                vm.months = data[2];
                vm.years = data[3];
                vm.metaData = data[4];
                vm.searchForm.selectedMonth = vm.months[0].value;
                vm.searchForm.selectedCountry = vm.countries[0].value;
                vm.searchForm.selectedYear = vm.years[0].value;
                vm.searchForm.selectedApplication = [vm.applications[0].value];
            })
        }
       /* angular.element(document).ready(function () {
            $('select').material_select();
        });*/
        activate();
    }]);