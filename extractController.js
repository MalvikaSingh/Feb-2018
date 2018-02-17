'use strict';
angular.module('userReview')
    .controller('extractController', ['dashboardService', 'extractService', '$q', '$state', function (dashboardService, extractService, $q, $state) {
        var vm = this;
        vm.title = 'Extract';
        vm.upload = function () {
            var x = vm.myFile;
            var txt = "";
            if ('files' in x) {
                if (x.files.length == 0) {
                    txt = "Select one or more files.";
                } else {
                    for (var i = 0; i < x.files.length; i++) {
                        txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
                        var file = x.files[i];
                        if ('name' in file) {
                            txt += "name: " + file.name + "<br>";
                        }
                        if ('size' in file) {
                            txt += "size: " + file.size + " bytes <br>";
                        }
                    }
                }
            }
            else {
                if (x.value == "") {
                    txt += "Select one or more files.";
                } else {
                    txt += "The files property is not supported by your browser!";
                    txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
                }
            }
            document.getElementById("demo").innerHTML = txt;
        }
        function activate() {
            // loading dropdowns
            $q.all([
                dashboardService.getApplications(),
                dashboardService.getMonths(),
            ]).then(function (data) {
                vm.applications = data[0];
                vm.months = data[1];
                vm.metaData = data[4];
                vm.selectedMonth = vm.months[0].value;
                vm.selectedApplication = vm.applications[0].value;
            })
        }
        activate();
    }]);