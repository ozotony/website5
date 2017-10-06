var app = angular.module('app');


app.factory('authService2', [ '$http', '$q', '$rootScope', 'localStorageService','$state', 'authService', '$location', function ($http, $q, $rootScope, localStorageService,$state, authService, $location) {

   // var serviceBaseCld = 'http://localhost:49703/'


    var serviceBaseCld = 'http://tm.cldng.com/';



    var authServiceFactory = {};


    var _save = function (vform) {

       

        var deferred = $q.defer();
        try {
           
            localStorageService.set("access_right2", []);


            var formData = new FormData();

            var AgentsData = {

                userName: vform.username,
                password: vform.password



            };



            authService.login(AgentsData).then(function (data, status) {

           

                localStorageService.set("loginuser", data.Email);

                localStorageService.set("user", data);

                localStorageService.set("access2", data.Access2);


                $rootScope.vurl = data.imageurl + data.Principal;
                $rootScope.vurl2 = data.imageurl + data.logo;
                localStorageService.set("vurl", $rootScope.vurl);
                localStorageService.set("vurl2", $rootScope.vurl2);

                var ddata3 = data.Email;

                var dsap = data.Sys_ID;

                var dsap2 = data.xid;
             
                //  _checkaccess2();
                if (data.Sys_ID != null) {
                    authService.getAgentRole2(data.Sys_ID, data.xid).then(function (data, status) {


                        localStorageService.set("agentRole", data);

                        $rootScope.agentRole = localStorageService.get("agentRole");


                        //authService.getEmailCount(dsap).then(function (data, status) {
                        //    var dd = data;
                        //    localStorageService.set("vcount", data);
                        //    $location.path("/#");
                       
                        //});



                        authService.getAgentemail(dsap).then(function (data, status) {
                            var dd = data;
                            localStorageService.set("Email", data);
                             $state.transitionTo('home', null, { 'reload': true });
                          

                        });



                    });

            }



            },
        function (response) {


            var errors = [];
            for (var key in response.data.modelState) {

            }

        });

      

           

            deferred.resolve("success");

        }

        catch (err) {
            deferred.resolve(err.message);

        }


        return deferred.promise;
    };


    var _checkaccess2 = function () {
        var deferred = $q.defer();

        if (localStorageService.get("access_tokenexpire") != null) {
            var vdate = localStorageService.get("access_tokenexpire")

            var vdate2 = new Date(vdate);



            var d1 = new Date();



            if (vdate2 > d1) {


            }

            else {

                alert("Session Timed out")
                $state.go('logout');
                //    $location.path("#/logout")

                return;
            }

        }

      
       
        if (localStorageService.get("access2") != null) {
          
            var vright = localStorageService.get("access2")

            angular.forEach(vright, function (value, key) {
                if (value.Menu_Code == "SX201611171614377") {
                    if (value.View == "True") {
                        $rootScope.SX201611171614377 = true;
                        deferred.resolve("success");

                    }
                }
            });
           
        }

        else {
          
            $rootScope.SX201611171614377 = false;
            deferred.resolve("success");
        }

       
        return deferred.promise;
    };

  
   


    authServiceFactory.save = _save;

    authServiceFactory.checkaccess2 = _checkaccess2;

   

    return authServiceFactory;
}]);