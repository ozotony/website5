app.controller('FileToo2Controller', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $ionicHistory) {





    $scope.dashboard = function () {

        $ionicHistory.goBack();
    }


    $scope.submitForm = function () {
        $location.path("/app/ApplicationFileToo2");




        //$location.path("/app/FileTest");



    }

    $rootScope.Details = localStorageService.get("ViewBasketDetails");
    $scope.Registration = localStorageService.get("user");
    var id = $scope.Registration.xid;









});