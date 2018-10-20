// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.getVenues = function () {
            $scope.venueList = [];
            $("#error").hide();
            var placeEntered = $scope.place;
            var searchQuery = $scope.searchQ;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=BVM3GNSPJWBJH2U3FHBXGMCNXBVTNUQPTJ0BQAW3TBRRPZYW" +
                    "&client_secret=41UDP25AJHUME2RGCRIQ3E33TFGGY1S32QU4GSXMX1FQ1KMD" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {

                        data.response.venues.forEach(function (value) {
                                $scope.venueList.push({name: value.name})
                        });
                    } else {
                        $("#error").text("No Venues present for the Input values");
                        $("#error").show();
                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            } else {
                $("#error").show();
            }
        }
    });