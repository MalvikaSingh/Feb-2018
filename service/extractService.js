'use strict';
angular.module('userReview')
    .factory('extractService', function ($q, $http) {

        function getUserData(payload) {
            //return $http.get('js/data/appUsers.json');
        }

        function saveUser(payload) {
            return $http.post('url', payload);
        }

        return {
            getUserData: getUserData,
            saveUser:    saveUser
        };
    });