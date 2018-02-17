'use strict';
angular.module('userReview')
    .controller('adminController', ['dashboardService', 'adminService', '$q', '$state', function (dashboardService, adminService, $q, $state) {
        var vm = this;
        vm.title = 'Admin';
        vm.users = [];

        vm.addUser = function () {
            var username = vm.username;
            var user = {
                userName: vm.username,
                country: vm.selectedCountry,
                application: vm.selectedApplication
            }
            vm.users.push(user);
            adminService.save(user)
                .then(function (resp) {
                    //save in appropriate repostitory
                }).catch(function (error) {
                    //if user already exists then do not save this entity again
                })
        }
        vm.deleteUser = function (){
            var aObj=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            var i=aObj.length; 
            var unchecked = [];
            while(i--) {
                var box =aObj[i].getElementsByTagName('input')[0]; 
                if(box.checked) {
                    aObj[i].parentNode.removeChild(aObj[i]);
                    }
                else {
                    unchecked.push(box.value);
                    }
                }
            alert("Selected users to be deleted");       
        }
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
                dashboardService.getCountries()
            ]).then(function (data) {
                vm.applications = data[0];
                vm.countries = data[1];
                vm.metaData = data[4];
                vm.selectedCountry = vm.countries[0].value;
                vm.selectedApplication = vm.applications[0].value;
            })
        }
        activate();
    }]);
