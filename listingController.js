angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchText = '';

    $scope.newCode = '';
    $scope.newName = '';
    $scope.newLat = '';
    $scope.newLong = '';
    $scope.newAddress = '';
    $scope.newListing = {
            code : '',
            name : '',
            coordinates: {
              latitude : '', 
              longitude : ''
            },
            address : '',
        };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.newListing.code = $scope.newCode;
      $scope.newListing.name = $scope.newName;
      $scope.newListing.coordinates.latitude = $scope.newLat;
      $scope.newListing.coordinates.longitude = $scope.newLong;
      $scope.newListing.address = $scope.newAddress;


      $scope.listings.push($scope.newListing);

      $scope.newListing = {
            code : '',
            name : '',
            coordinates: {
              latitude : '', 
              longitude : ''
            },
            address : '',
        };

    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = {
            name : $scope.listings[index].name,
            coordinates : "",  
            address : "",
        };



      if ($scope.listings[index].coordinates == undefined && $scope.listings[index].address == undefined) {
        $scope.detailedInfo.coordinates = "No coordinates available"
        $scope.detailedInfo.address = "No address available";
      };
      if (!($scope.listings[index].coordinates == undefined)) {
        $scope.detailedInfo.coordinates = "Coordinates: (" + $scope.listings[index].coordinates.latitude + ", " 
          + $scope.listings[index].coordinates.longitude + ")";
      };
      if (!($scope.listings[index].address == undefined)) {
        $scope.detailedInfo.address = "Street Address :" + $scope.listings[index].address;
      };
    };
  }
]);