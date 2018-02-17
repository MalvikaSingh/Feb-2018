'use strict';
angular.module('userReview')
    .factory('dashboardService', function ($q, $http) {
        var months = [
            {label: 'January', value: "1"},
            {label: 'February', value: "2"},
            {label: 'March', value: "3"},
            {label: 'April', value: "4"},
            {label: 'May', value: "5"},
            {label: 'June', value: "6"},
            {label: 'July', value: "7"},
            {label: 'August', value: "8"},
            {label: 'September', value: "9"},
            {label: 'October', value: "10"},
            {label: 'November', value: "11"},
            {label: 'December', value: "12"}
        ];

        var countries = [
            {label: 'India', value: 'IN'},
            {label: 'United Kingdom', value: 'UK'},
            {label: 'USA', value: 'US'},
            {label: 'Srilanka', value: 'LK'},
            {label: 'South Africa', value: 'ZA'},
            {label: 'Singapore', value: 'SG'},
            {label: 'Australia', value: 'AU'},
            {label: 'Bangladesh', value: 'BD'},
            {label: 'China', value: 'CN'},
            {label: 'Nepal', value: 'NP'},
            {label: 'Mauritius', value: 'MU'},
            {label: 'Maldives', value: 'MV'},
            {label: 'Belgium', value: 'BE'},
            {label: 'Germany', value: 'DE'},
            {label: 'France', value: 'FR'},
            {label: 'Japan', value: 'JP'},
            {label: 'Bahrain', value: 'BH'},
        ];
        var years = [
            {label: '2017', value: '2017'},
            {label: '2018', value: '2018'},
            {label: '2019', value: '2019'},
            {label: '2020', value: '2020'},
            {label: '2021', value: '2021'},
            {label: '2022', value: '2022'},
            {label: '2023', value: '2023'},
            {label: '2024', value: '2024'},
        ];
        var applications = [
            {label: 'Core', value: 'core'},
            {label: 'Treasury', value: 'treasury'},
            {label: 'E Trade', value: 'eTrade'},
            {label: 'Pelican', value: 'pelican'},
            {label: 'AMLOCK', value: 'amlock'},
            {label: 'Alert', value: 'alert'},
            {label: 'INB', value: 'inb'}
        ];

        function getMetaData(payload) {
            return $http.get('js/data/metaData.json');
        }

        function getUserData(payload) {
            return $http.get('js/data/userData.json');
        }

        return {
            getApplications: function() {return $q.resolve(applications)},
            getCountries: function() {return $q.resolve(countries)},
            getMonths: function() {return $q.resolve(months)},
            getYears: function() {return $q.resolve(years)},
            getMetaData: getMetaData,
            getUserData: getUserData
        };
    });