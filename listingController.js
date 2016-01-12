angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push(index);
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = {
            name : $scope.listings[index].name,
            latitude : "", 
            longitude : "",  
            address : "",
            description: "",
        };

      if ($scope.listings[index].coordinates == undefined && $scope.listings[index].address == undefined) {
        $scope.detailedInfo.description = "No detailed information available";
      };
      if (!($scope.listings[index].coordinates == undefined)) {
        $scope.detailedInfo.latitude = $scope.listings[index].coordinates.latitude + '\n';
        $scope.detailedInfo.longitude = $scope.listings[index].coordinates.longitude + '\n';
      };
      if (!($scope.listings[index].address == undefined)) {
        $scope.detailedInfo.address = $scope.listings[index].address;
      };
    };
  }
]);