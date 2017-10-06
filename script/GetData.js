'use strict';
var app = angular.module('app');

app.factory('authService', ['$http', '$q', '$rootScope', 'localStorageService', function ($http, $q, $rootScope, localStorageService) {
  //  alert("inside43")
    var serviceBase = 'http://88.150.164.30/NewTrademark/';
   //  var serviceBase = 'http://localhost:24322/';

    var serviceBaseAdmin = 'http://88.150.164.30/CldAdmin/';

    var serviceBaseCld = "http://45.40.139.163/EinaoTestEnvironment.CLD/";

    //  var serviceBaseCld = "http://localhost:4556/";

    var oldserviceBase = 'http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/GetRegistration.ashx';

    

   


    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };




    var _login = function (loginData) {

      

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        var AgentsData = {

            "username": loginData.userName,
            "password": loginData.password


        };

        $http.post(serviceBase + 'api/account/GetLoginToken2', AgentsData, {
            headers: {  'Content-Type': 'application/json' }
        }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);

            //  alert(response.Token)

            if (response == null) {

                swal("", "Invalid Username / Password", "error")
                return;
            }
           
            var kp = response.Token;
            if (kp.error_description != undefined) {
                swal("", kp.error_description, "error")
                return;
                
            }
            

          
            //  $rootScope.token = response.access_token;
            // localStorageService.set("access_token", response.access_token);
            $rootScope.username = response.Email;

            localStorageService.set("access_token", kp.access_token);


           

            localStorageService.set("access_tokenexpire", kp.expires);

            localStorageService.set("username", response.Email);

            $rootScope.login = true;



            $rootScope.username = response.Email;

            $rootScope.islogin = true;

            $rootScope.islogout = false;




            _authentication.isAuth = true;
            _authentication.userName = response.Email;

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _AssignedUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/GetRoles3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
       
        return deferred.promise;

    };

    var _GetPendingContent = function (registration) {
        var dd = "";
        var data = {
            property1: registration
        };
        return $http.get(serviceBaseAdmin + 'api/account/GetPendingContent', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _SaveUser = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/SaveUser', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _GetAgent = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

       // var serviceBase = 'http://ipo.cldng.com/Handlers/GetRegistration.ashx';

      


        var Encrypt = {
            vid: dd
        }


        $http({
            method: 'POST',
            url: oldserviceBase,
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: Encrypt,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
        })
          .success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _assignRoles = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/AssignUserRole', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _Get_Role2 = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAllRoles2', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _GetAgentStatus = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetAgentStatus', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

  

    var _saveMenu = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateMenu', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });



    };

    var _saveRoles = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateRole', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };


    var _getAgentemail = function (registration) {
        var dd = "";
        var data = {
            property1: registration
        };
        return $http.get(serviceBase + 'api/account/getEmails', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };
    var _saveRoles2 = function (registration) {
        var dd = "";
        return $http.post(serviceBase + 'api/account/CreateRole2', registration, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .success(function (response) {
            return response;
        })
        .error(function (response) {
            return response
        });


        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

    };

    var _Get_Role = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetRoles', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _DeleteRole = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/DeleteRole', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };
    var _GetTopMenu = function () {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.get(serviceBase + 'api/account/GetTopMenu', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };
    var _GetTopMenu2 = function (reg) {

        // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        var data = {
            property1: reg

        };

        $http.get(serviceBase + 'api/account/GetTopMenu2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {


            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _GetFee = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetFee', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _ReturnUrl = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/ReturnUrl', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetFee2 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetFee2', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _GetFee3 = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/GetFee3', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _GetCountry = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/getCountry', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _GetClass = function () {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();


        $http.get(serviceBase + 'api/account/getClass', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _getEmailCount = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getEmailCount', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _getAgentRoles = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getAgentRoles', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _getTrademarkStatus = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getApplicationStatus', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _getTrademarkStatus2 = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getApplicationStatus2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _getPatentStatus = function (dd) {
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getApplicationStatus3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });


        return deferred.promise;

    };

    var _getState = function (dd) {
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getState', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });


        return deferred.promise;

    };




    var _getUpdatePayment = function (dd) {
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/UpdatePaymentUsed', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });


        return deferred.promise;

    };



    var _getDesignStatus = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/getApplicationStatus4', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _getBasket2 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/getBasketDetail', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _getdata = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetData', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _getdata2 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetData2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _getdata3 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetData3', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _getdata4 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/GetData4', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _getPaymentReport = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/getPaymentReport', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _getPaymentReport2 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/getPaymentReport2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };



    var _UpdateCertificate = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/UpdateCertificate', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {



            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });

        return deferred.promise;

    };


    var _PostAll = function (dd) {
       // var serviceBaseCld2 = "http://localhost:49703/";
        var deferred = $q.defer();

        $http.post(serviceBaseCld + '/Handlers/Save_GenericApplication7.ashx', dd, { headers: { 'Content-Type': undefined } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _getPaymentStatus = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/getPaymentStatus', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };


    var _getAgentRole2 = function (dd, dd2) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2
        };


        $http.get(serviceBase + 'api/account/getAgentRole2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };

    var _getSendMail = function (dd, dd2, dd3, dd4, dd5) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd,
            property2: dd2,
            property3: dd3,
            property4: dd4,
            property5: dd5
        };


        $http.get(serviceBase + 'api/account/SendEmail', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };




    var _Basket = function (dd) {
        // var serviceBase2 = "http://localhost:24322/";
        var deferred = $q.defer();

        var data = {
            property1: dd
        };


        $http.get(serviceBase + 'api/account/ViewBasket', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            //  alert("tony response ="+response);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });


            deferred.resolve(response);

        }).error(function (err, status) {

            deferred.reject(err);
        });
        //return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //    return response;
        //});

        return deferred.promise;

    };




    //  alert("tony response ="+response);
    //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });
    var _checkout = function (applicant, shoppingcart, agent) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent

        };



        $http.post(serviceBase + 'api/account/AddFeeList', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _PaymentDetail = function (applicant, shoppingcart, agent, twallet, InterSwitchPostFields) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee: twallet,
            ff: InterSwitchPostFields

        };



        $http.post(serviceBase + 'api/account/PaymentDetail', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _UpdateRegistration = function (pp7) {


        var deferred = $q.defer();



        $http.post(serviceBase + 'api/account/UpdateRegistration', pp7, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _getEmails = function (pp7) {


        var deferred = $q.defer();

        var data = {
            property1: pp7
        };


        $http.get(serviceBase + 'api/account/getEmails', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _getPwalletCount = function (pp7) {


        var deferred = $q.defer();

        var data = {
            property1: pp7
        };


        $http.get(serviceBase + 'api/account/PwalletCount', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };


    var _getAknowlegment = function (pp7) {


        var deferred = $q.defer();

        var data = {
            property1: pp7
        };


        $http.get(serviceBase + 'api/account/getAknowlegment', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };



    var _getEmails2 = function (pp7) {


        var deferred = $q.defer();

        var data = {
            property1: pp7
        };


        $http.get(serviceBase + 'api/account/getEmails2', { params: data }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _ProceedToPayment = function (applicant, shoppingcart, agent, twallet) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee: twallet

        };



        $http.post(serviceBase + 'api/account/ProceedToPayment', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _formx = function (applicant, shoppingcart, agent, twallet, InterSwitchPostFields) {



        var deferred = $q.defer();
        var AgentsData = {


            bb: applicant,
            cc: shoppingcart,
            dd: agent,
            ee: twallet,
            ff: InterSwitchPostFields

        };



        $http.post(serviceBase + 'api/account/formx', AgentsData, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            //  alert(response.access_token);
            //  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            //  alert(response.access_token);







            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });




        return deferred.promise;

    };

    var _PostPayment = function () {



        var deferred = $q.defer();

        var aa = $("#form1").submit();
        deferred.resolve(aa);



        alert("submited")




        return deferred.promise;

    };
    authServiceFactory.formx = _formx;
    authServiceFactory.ProceedToPayment = _ProceedToPayment;
    authServiceFactory.login = _login;
    authServiceFactory.GetFee = _GetFee;
    authServiceFactory.GetFee2 = _GetFee2;
    authServiceFactory.GetFee3 = _GetFee3;
    authServiceFactory.checkout = _checkout;
    authServiceFactory.PaymentDetail = _PaymentDetail;
    authServiceFactory.PostPayment = _PostPayment;
    authServiceFactory.assignRoles = _assignRoles;
    authServiceFactory.Get_Role2 = _Get_Role2;
    authServiceFactory.DeleteRole = _DeleteRole;
    authServiceFactory.AssignedUser = _AssignedUser;
    authServiceFactory.UpdateRegistration = _UpdateRegistration;

    authServiceFactory.getEmailCount = _getEmailCount;

    authServiceFactory.getEmails = _getEmails;

    authServiceFactory.getEmails2 = _getEmails2;

    authServiceFactory.Basket = _Basket;
    authServiceFactory.getBasket2 = _getBasket2;

    authServiceFactory.getTrademarkStatus = _getTrademarkStatus;

    authServiceFactory.getTrademarkStatus2 = _getTrademarkStatus2;
    authServiceFactory.getPatentStatus = _getPatentStatus;

    authServiceFactory.getDesignStatus = _getDesignStatus;
    authServiceFactory.getPaymentStatus = _getPaymentStatus

    authServiceFactory.getSendMail = _getSendMail;

    authServiceFactory.getAgentRoles = _getAgentRoles

    authServiceFactory.GetCountry = _GetCountry

    authServiceFactory.GetClass = _GetClass

    authServiceFactory.getState = _getState

    authServiceFactory.PostAll = _PostAll
    authServiceFactory.saveMenu = _saveMenu
    authServiceFactory.Get_Role = _Get_Role;
    authServiceFactory.GetTopMenu = _GetTopMenu;
    authServiceFactory.GetTopMenu2 = _GetTopMenu2
  //  authServiceFactory.DeleteRole = _DeleteRole;
    authServiceFactory.SaveRoles2 = _saveRoles2
    authServiceFactory.SaveRoles = _saveRoles;

    authServiceFactory.getPwalletCount = _getPwalletCount

    authServiceFactory.getAknowlegment = _getAknowlegment

    authServiceFactory.getAgentemail = _getAgentemail;
    authServiceFactory.ReturnUrl = _ReturnUrl;

    authServiceFactory.getAgentRole2 = _getAgentRole2;
    authServiceFactory.GetAgentStatus = _GetAgentStatus;
    authServiceFactory.GetAgent = _GetAgent;
    authServiceFactory.SaveUser = _SaveUser

    authServiceFactory.getPaymentReport = _getPaymentReport
    authServiceFactory.getPaymentReport2 = _getPaymentReport2

    authServiceFactory.GetPendingContent = _GetPendingContent
    authServiceFactory.GetUpdatePayment = _getUpdatePayment

    authServiceFactory.UpdateCertificate = _UpdateCertificate

    authServiceFactory.getdata2 = _getdata2

    authServiceFactory.getdata = _getdata
    authServiceFactory.getdata3 = _getdata3

    authServiceFactory.getdata4 = _getdata4
    return authServiceFactory;
}]);


