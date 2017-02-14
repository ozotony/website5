app.controller('FormxController', function ($scope, $http, $rootScope, localStorageService, authService, $location) {


    $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

    var Shopping_card = $scope.Shopping_card3;

    $scope.applicant = localStorageService.get("applicant");
    var applicant2 = $scope.applicant
    $scope.agent = localStorageService.get("user");
    var agent2 = $scope.agent
    $scope.twallet = localStorageService.get("twallet");
    var twallet2 = $scope.twallet



    $scope.InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");
    var InterSwitchPostFields2 = $scope.InterSwitchPostFields


    $scope.tech_amt = 0.0;
    $scope.init_amt = 0.0;

    angular.forEach($scope.Shopping_card3, function (item) {

        $scope.tech_amt = $scope.tech_amt + parseFloat(item.tech_amt);
        $scope.init_amt = $scope.init_amt + parseFloat(item.init_amt);


    });
    $scope.tech_amt = $scope.tech_amt * 100;
    $scope.init_amt = $scope.init_amt * 100;


    authService.formx(applicant2, Shopping_card, agent2, twallet2, InterSwitchPostFields2).then(function (data, status) {
        var dd = data;
        $scope.vdata = data;
        //  localStorageService.set("InterSwitchPostFields", data);

        //  $location.path("/PaymentDetail");



    });

    // $scope.amount2 = parseFloat($scope.InterSwitchPostFields.amount / 100)







    $scope.submitForm = function () {


        //    authService.PostPayment().then(function (data, status) {
        //     var dd = data;


        //  });

        try {
            //  doUrlPost("http://88.150.164.30/NewTrademark/#/Formx2", "test", "", "", "") 

            window.open("http://88.150.164.30/NewTrademark/Index2.aspx?TransactionidID=" + twallet2.transID + "&&xid=" + twallet2.xid, '_system');

        }
        catch (err) {
            alert(err.message)

        }





    }



    if (localStorageService.get("username") == null) {
        //  alert("username=" + localStorageService.get("username"))

        $rootScope.islogin = false;

        $rootScope.islogout = true;
        $location.path("/app")
    }

    else {

        $rootScope.islogin = true;

        $rootScope.islogout = false;
        $rootScope.username = localStorageService.get("username")

        var dx = localStorageService.get("user");

        $rootScope.vurl = dx.imageurl + dx.Principal;
        $rootScope.vurl2 = dx.imageurl + dx.logo;

        if (localStorageService.get("vcount") != null) {
            var ppx = localStorageService.get("vcount")
            ppx = parseInt(ppx);
            $rootScope.vcount2 = ppx;
            if (ppx > 0) {
                $rootScope.xvv = true;

            }

            else {
                $rootScope.xvv = false;
            }
        }
        //  authService2.CheckAccess();

    }
});