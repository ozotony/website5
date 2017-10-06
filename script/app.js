(function (window) {

   
    var serviceBaseCld = "http://45.40.139.163/EinaoTestEnvironment.CLD/";
    var app = angular.module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule', 'ngModal', 'angular-loading-bar', 'ngMessages', 'app2', 'smart-table', 'vAccordion', 'ngSanitize', 'ngDialog', 'jkuri.datepicker', 'ngWYSIWYG']);





    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);





  
    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

   





    app.directive('eatClick', function () {
        return function (scope, element, attrs) {
            $(element).click(function (event) {
                event.preventDefault();
            });
        }
    })

    app.directive("datepicker", function () {

        function link(scope, element, attrs, controller) {
            // CALL THE "datepicker()" METHOD USING THE "element" OBJECT.
            element.datepicker({
                onSelect: function (dt) {
                    scope.$apply(function () {
                        // UPDATE THE VIEW VALUE WITH THE SELECTED DATE.
                        controller.$setViewValue(dt);
                    });
                },
                dateFormat: "dd/mm/yy"      // SET THE FORMAT.
            });
        }

        return {
            require: 'ngModel',
            link: link
        };
    });

    app.directive( 'goClick', function ( $location ) {
        return function ( scope, element, attrs ) {
            var path;

            attrs.$observe( 'goClick', function (val) {
                path = val;
            });

            element.bind( 'click', function () {
                scope.$apply(function () {
                 
                    $location.path( path );
                });
            });
        };
    });


 


       app.config(
                    ['$stateProvider',
                     '$urlRouterProvider',

            function ($stateProvider,
                      $urlRouterProvider) {

               //$locationProvider.html5Mode(true);

                $stateProvider

                    .state('home', {
                        url: '/',
                        cache: false,
                        templateUrl: 'partial/Index2.html',
                        controller: 'Home3Controller'
                    })

                     .state('AboutUs', {
                         url: '/AboutUs',
                         cache: false,
                         templateUrl: 'partial/AboutUs.html',
                         controller: 'AboutUsController'
                     })
                      .state('TopMenu', {
                          url: '/TopMenu',
                          templateUrl: 'partial/TopMenu.html',
                         
                          controller: 'TopMenuController'
                      })
                     .state('logout', {
                         url: '/logout',
                         templateUrl: 'partial/Index2.html',
                         controller: 'logoutController'
                     })

                    .state('AssignRole', {
                        url: '/AssignRole',
                        templateUrl: 'partial/Assign_Role.html',
                        controller: 'AssignRolesController',
                    })

                    .state('Formx', {
                        url: '/Formx',
                        templateUrl: "partial/Formx.html",
                        controller: 'FormxController'
                    })


                      .state('AssignRole.Data', {
                          url: '/ASSIGNData',
                          templateUrl: 'partial/Assign_Data.html',
                          controller: 'AssignRolesController',
                      })

                              .state('Fee', {
                                  url: '/Fee',

                                  templateUrl: 'partial/Fee.html',
                                  controller: 'FeeController'
                           

                              })

                      .state('GetAgentMail', {
                          url: '/GetAgentMail',
                          templateUrl: "partial/GetAgentMail.html",
                          controller: 'GetAgentMailController'



                      })

                     .state('Applicant', {
                         url: '/Applicant',
                         cache: false,
                         templateUrl: "partial/Applicant.html",
                         controller: 'ApplicantController'
                   

                     })

                     .state('UpdateRegistration', {
                         url: '/UpdateRegistration',
                         cache: false,
                         templateUrl: "partial/UpdateRegistration.html",
                         controller: 'UpdateRegistrationController'


                     })


                                     .state('ViewBasketTm', {
                                         url: '/ViewBasketTm',
                                         templateUrl: "partial/ViewBasketTm.html",
                                         controller: 'ViewBasketTmController',
                                         cache: false
                                      

                                     })

                      .state('Recordal', {
                          url: '/Recordal',
                          templateUrl: "partial/Recordal.html",
                          controller: 'RecordalController',
                          cache: false


                      })

                      .state('UploadDoc', {
                          url: '/UploadDoc',
                          templateUrl: "partial/UploadDoc.html",
                          controller: 'UploadDocController',
                          cache: false


                      })


                      .state('Certificate', {
                          url: '/Certificate',
                          templateUrl: "partial/Certificate.html",
                          controller: 'CertificateController',
                          cache: false


                      })



                       .state('Recordal2', {
                           url: '/Recordal2',
                           cache: false,
                           templateUrl: "partial/Recordal2.html",
                           controller: 'RecordalController',
                           cache: false


                       })


                                      .state('Confirmbasketdetails', {
                                          url: '/Confirmbasketdetails',
                                          templateUrl: "partial/Confirmbasketdetails.html",
                                          controller: 'ViewBasketTmController'
                                        

                                      })

                     .state('ViewBasketPt', {
                         url: '/ViewBasketPt',
                         templateUrl: "partial/ViewBasketPt.html",
                         controller: 'ViewBasketPtController' ,
                         cache: false
                        

                     })

                     .state('ConfirmBasketPt', {
                         url: '/ConfirmBasketPt',
                         templateUrl: "partial/ConfirmBasketPt.html",
                         controller: 'ViewBasketPtController'
                       

                     })

                      .state('ViewBasketDs', {
                          url: '/ViewBasketDs',
                          templateUrl: "partial/ViewBasketDs.html",
                          controller: 'ViewBasketDsController' ,
                          cache: false
                          

                      })

                     .state('ApplicationFileToo2', {
                         url: '/ApplicationFileToo2',
                         templateUrl: "partial/ApplicationFileToo2.html",
                         controller: 'ApplicationFileToo2Controller' ,
                         cache: false
                          

                     })

                     .state('ConfirmBasketDs', {
                         url: '/ConfirmBasketDs',
                         templateUrl: "partial/ConfirmBasketDs.html",
                         controller: 'ViewBasketDsController'
                     

                     })

                     .state('PaymentType', {
                         url: '/PaymentType',
                         templateUrl: "partial/PaymentType.html",
                         controller: 'PaymentTypeController'


                     })


                      .state('SelectedItem', {
                          url: '/SelectedItem',
                          templateUrl: "partial/SelectedItem.html",
                          controller: 'SelectedItemController'
                       
                      })

                     .state('AgentAccreditation', {
                         url: '/AgentAccreditation',
                         templateUrl: "partial/AgentAccreditation.html",
                         controller: 'AgentAccreditationController'

                     })

                     .state('ContentUrl', {
                         url: '/ContentUrl',
                         templateUrl: "partial/ContentUrl.html",
                         controller: 'Home3Controller'

                     })

                     .state('Minvoice', {
                         url: '/Minvoice',
                         templateUrl: "partial/Minvoice.html",
                         controller: 'MinvoiceController'
                         

                     })

 .state('Register', {
     url: '/Register',
     templateUrl: "partial/Register.html",
     controller: 'Home3Controller'


 })

                    .state('Register2', {
                        url: '/Register/:MessageID',
                        templateUrl: "partial/Index2.html",
                        controller: 'Home3Controller'


                    })

                      .state('ReturnPage', {
                          url: '/ReturnPage',
                          templateUrl: "partial/ReturnPage.html",
                          controller: 'ReturnPageController'


                      })

                      .state('SendMail', {
                          url: '/SendMail',
                          templateUrl: "partial/SendMail.html",
                          controller: 'SendMailController'
                      

                      })

                      .state('TrademarkPaymentReport', {
                          url: '/TrademarkPaymentReport',
                          templateUrl: "partial/TrademarkPaymentReport.html",
                          controller: 'TrademarkPaymentReportController'


                      })

                     .state('TrademarkStatus', {
                         url: '/TrademarkStatus',
                         templateUrl: "partial/TrademarkStatus.html",
                         controller: 'TrademarkStatusController'
                       

                     })

                    .state('DesignStatus', {
                        url: '/DesignStatus',
                        templateUrl: "partial/DesignStatus.html",
                        controller: 'DesignStatusController'
                   
                    })

                     .state('PatentStatus', {
                         url: '/PatentStatus',
                         templateUrl: "partial/PatentStatus.html",
                         controller: 'PatentStatusController'
                        
                     })

                     .state('DesignPaymentReport', {
                         url: '/DesignPaymentReport',
                         templateUrl: "partial/DesignPaymentReport.html",
                         controller: 'DesignPaymentReportController'


                     })

                    .state('PatentPaymentReport', {
                        url: '/PatentPaymentReport',
                        templateUrl: "partial/PatentPaymentReport.html",
                        controller: 'PatentPaymentReportController'


                    })


                    .state('Role', {
                        url: '/Roles',
                        templateUrl: 'partial/Role.html',
                        //resolve: {
                        //    articles: 'ArticlesService'
                        //},
                        controller: 'RolesController'
                    })
 .state('Role.Detail', {
     url: '/Detail',
     templateUrl: 'partial/Role_Detail.html',
     //resolve: {
     //    articles: 'ArticlesService'
     //},
     controller: 'RolesController'
 })
                     .state('login', {
                         url: '/login',
                         templateUrl: 'partial/Login.html',
                         controller: 'ContactController'
                     });
                    

                     

              //  /AssignRole/Data
                // $urlRouterProvider.otherwise('/');

                $urlRouterProvider.otherwise('/');
            }]);

    


    
       app.controller('Home3Controller', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $sce, $filter, $location, $state, $document) {
          
         
         

           if ($state.params.MessageID != null) {
               var kk9 = $state.params.MessageID;
             

               authService.GetAgent(kk9).then(function (data, status) {
                   var dd = data;
                 
                   localStorageService.set("user", data);

                   localStorageService.set("username", data.Email);

                   $rootScope.login = true;



                   $rootScope.username = data.Email;

                   $rootScope.islogin = true;

                   $rootScope.islogout = false;


                   var Applicant = new Object();
                  
                   Applicant.applicantname = data.Firstname + " " + data.Surname;
                   Applicant.firstname = data.Firstname;
                   Applicant.lastname = data.Surname;
                   Applicant.address = data.CompanyAddress;
                   Applicant.email = data.Email;
                   Applicant.mobile = data.PhoneNumber;

                   localStorageService.set("applicant", Applicant);


                   var Shopping_card = new Object();
                   var Shopping_card2 = [];
                   Shopping_card.amt = "23500";
                   Shopping_card.init_amt = "20000";
                   Shopping_card.item_code = "AA1";
                   Shopping_card.item_desc = "Agent Accreditation Fee";
                   Shopping_card.qty = "1";
                   Shopping_card.tech_amt = "3500";
                   Shopping_card.xid = "10061";
                   Shopping_card.sn = "1";

                   Shopping_card2.push(Shopping_card);
                   localStorageService.set("Shopping_card2", Shopping_card2);

                   var vbasket = new Object();
                   vbasket.TrademarkCount = "0";
                   vbasket.PatentCount = "0";
                   vbasket.DesignCount = "0";
                   vbasket.Recordal = "0";
                   vbasket.Accreditation = "1";
                   vbasket.TotalCount = "0";
                   vbasket.vcount = "1";
                   vbasket.TotalCount = "23500";

                   localStorageService.set("baskets", vbasket);



                   $location.path("/SelectedItem");

                   // $location.path("/#");

                   // $state.transitionTo('home');

               });

           }

           else {

               if (localStorageService.get("username") == null) {
                   //  alert("username=" + localStorageService.get("username"))

                   $rootScope.islogin = false;

                   $rootScope.islogout = true;

                   authService.GetPendingContent().then(function (data, status) {

                       $rootScope.vcontent = data.data;

                      



                   });
                   // authService2.checkaccess2();
               }

               else {
                   var vtokendate = localStorageService.get("access_tokenexpire")
                   var vtokendate2 = new Date(vtokendate);

                   var vtokendate3 = new Date();



                   var tdate = dates.compare(vtokendate2, vtokendate3);

                   if (tdate < 0) {
                          $location.path("/logout");

                          return;

                   }

                   $rootScope.agentRole = localStorageService.get("agentRole");

                   $rootScope.islogin = true;

                   $rootScope.islogout = false;

                   $rootScope.username = localStorageService.get("username")

                   //   authService2.checkaccess2();
                   if (localStorageService.get("Email") != null) {
                       var ddx = localStorageService.get("Email");
                       // alert("inside logged")

                       $scope.itemsByPage = 50;
                       $scope.ListAgent = ddx.data;
                       $scope.displayedCollection = [].concat($scope.ListAgent);

                   }


               }



               $rootScope.HeaderMessage = "Mails";

               $rootScope.isFee = true;
               //  if (localStorageService.get("Email") != null) {
               $rootScope.count22 = '22b';


               //   }

             //  localStorageService.set("count", '3');

              // var aap = localStorageService.get("count");




               if (localStorageService.get("baskets") == null) {

                   $rootScope.TrademarkCount = 0;

                   $rootScope.PatentCount = 0;

                   $rootScope.DesignCount = 0;

                   $rootScope.Recordal = 0;


                   $rootScope.TotalCount = 0;
                   $rootScope.Accreditation = 0;
                   $rootScope.vcount = 0;;

                  
               }

               else {

                   var aap2 = localStorageService.get("baskets");
                   $rootScope.TrademarkCount = aap2.TrademarkCount;

                   $rootScope.PatentCount = aap2.PatentCount;

                   $rootScope.DesignCount = aap2.DesignCount;

                   $rootScope.Accreditation = aap2.Accreditation;
                   $rootScope.Recordal = aap2.Recordal;
                   $rootScope.TotalCount = aap2.TotalCount;
                   $rootScope.vcount = aap2.vcount;;

                   $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');


               }

               // alert(aap)
               $rootScope.count = '0';

               $rootScope.count2 = '3';

             

               $scope.oneAtATime = true;

               $scope.add2 = function (vrow) {
                   var serviceBase2 = 'http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/GetEmail2.ashx';

                   var Encrypt = {
                       vid: vrow.id
                   }


                   $http({
                       method: 'POST',
                       url: serviceBase2,
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
                         var dd = [];

                         dd = response;

                         $scope.itemsByPage = 10;
                         $scope.ListAgent2 = response;
                         $scope.displayedCollection2 = [].concat($scope.ListAgent2);



                         //  IpoTradeMarks2(response.Email, response.Firstname, response.CompanyAddress, response.xid, response.PhoneNumber)
                         //  ajaxindicatorstop();

                     })
                     .error(function (response) {
                         //   ajaxindicatorstop();
                     });

                   // $rootScope.xid = vrow.xid
                   $state.go('form.detail')
               }

               $scope.add3 = function (vrow) {

                   window.history.back();
                   location.reload();
               }


               $scope.add5 = function (vrow) {

                   if (vrow.Status) {

                       return false
                   }
                   else {

                       return true;
                   }


               }




               $scope.oneAtATime = true;

               $scope.status = {
                   isCustomHeaderOpen: false,
                   isFirstOpen: true,
                   isFirstDisabled: false
               };

               $scope.myInterval = 3000;
               $scope.noWrapSlides = true;
               $scope.active = 0;

               $scope.slides = [

           {
               image: 'images/xmas_3.jpg'
           },

           {
               image: 'images/xmas_4.jpg'
           }
               ];

              
               $scope.submit4 = function (dd) {
                   $rootScope.vdata = $sce.trustAsHtml(dd.NewsContent);
                  

              
                   //  $state.transitionTo('ContentUrl', null, { 'reload': false });
                   OpenWindowWithPost2("http://88.150.164.30/CldAdmin3/#/Article?userId=" + dd.NewsID, "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
               }

               $scope.submitForm = function (vform, pp) {



                   var pp = authService2.save(vform);


                   //   $window.location.reload();



               }



               var urlIpobase = "http://88.150.164.30/EinaoTestEnvironment.IPO/";


               $scope.$on('$viewContentLoaded', function () {

                   $scope.items = ['Corporate'];

                   // alert($rootScope.Sys_ID)

                   //Here your view content is fully loaded !!
               });

               $scope.change2 = function () {

                   GetCountries();
               }
               $scope.change = function (pp) {

                   var url7 = urlIpobase + 'Handlers/EmailCount.ashx';

                   var kk2 = pp;
                   //  var kkk = $('#VEMAIL').val();

                   var AgentsData = {
                       Email: pp

                   }

                   var formData = new FormData();

                   formData.append("vv", JSON.stringify(AgentsData));

                   $http.post(url7, formData, {
                       transformRequest: angular.identity,
                       headers: { 'Content-Type': undefined }
                   })
                   .success(function (response) {

                       var dd = parseInt(response);

                       if (dd > 0) {
                           swal("", "Email Already Exist", "error")

                           $scope.vemail = "";


                       }
                       else {


                       }

                   })
                   .error(function () {

                       swal("error")
                   });

               };
               $scope.files = [];
               $scope.$on("fileSelected", function (event, args) {
                   $scope.$apply(function () {
                       //add the file object to the scope's files collection
                       var pq = args.file.file[0];
                       $scope.files.push(args.file);
                   });
               });
               $scope.processing = false;
               $scope.submitForm2 = function (isValid) {
                   $scope.processing = true;

                  
                 
                
                   var kkk = $('#VEMAIL').val();



                   // var kkk2 = checkemail(kkk, $http);





                   var error = $scope.userForm.$error;
                   angular.forEach(error.pattern, function (field) {
                       if (field.$invalid) {
                           var fieldName = field.$name;
                           alert(fieldName)
                       }
                   });

                   if (isValid) {

                       var formData = new FormData();

                       if ($scope.files.length < 3) {

                           alert("Upload All  Files")

                           $scope.processing = false;
                           return;
                       }

               

                       for (var i = 0; i < $scope.files.length; i++) {
                           if ($scope.files[i].typeoffile == 'CAC') {
                               formData.append("FileUpload", $scope.files[i].file[0]);

                           }

                           if ($scope.files[i].typeoffile == 'Intro') {
                               formData.append("FileUpload2", $scope.files[i].file[0]);

                           }

                           if ($scope.files[i].typeoffile == 'Logo') {
                               formData.append("FileUpload3", $scope.files[i].file[0]);

                           }

                       }
             
                       





                       var AgentsData = {


                           AccountType: $scope.AccountType,
                           FirstName: $scope.firstname,
                           Surname: $scope.surname,
                           Nationality: $scope.country,
                           State: $scope.state,
                           dob: $scope.date,
                           CompName: $scope.CompName,
                           CompAddress: $scope.CompAddress,
                           CompEmail: $scope.CompEmail,
                           CompPhone: $scope.CompPhone,
                           CompPerson: $scope.CompPerson,
                           ContactPhone: $scope.ContactPhone,
                           DobIncorp: $scope.DobIncorp,
                           Email: $scope.vemail,

                           password: $scope.password



                       };

                       formData.append("vv", JSON.stringify(AgentsData));
                       //    ajaxindicatorstart('Submitting Record.. please wait..');
                       var url7 = urlIpobase + 'Handlers/SaveAgent.ashx';

                       var url9 = urlIpobase + 'Handlers/SaveAgent2.ashx';

                       // var url9 = "http://localhost:4556/Handlers/SaveAgent2.ashx";

                       var dataObj = {
                           vv: JSON.stringify(AgentsData),
                           employees: $scope.employees,
                           headoffice: $scope.headoffice
                       };



                       $http.post(url9, formData, {
                           transformRequest: angular.identity,
                           headers: { 'Content-Type': undefined }
                       })
                   .success(function (response) {

                       //  ajaxindicatorstop();
                       authService.SaveUser($scope.vemail).then(function (data, status) {

                           swal("", "You have successfully submitted your form,please check your email for next steps", "success")
                          // $scope.processing = false;

                       });
                     

                   })
                   .error(function () {
                       var dd = "aa";
                       //  ajaxindicatorstop();
                       //   swal("error")
                       $scope.processing = false;
                   });








                   }

               };


               function GetCountries() {
                   $http({
                       method: 'GET',
                       url: urlIpobase + 'Handlers/Getcountry.ashx'
                   }).success(function (data, status, headers, config) {
                       var dd = data;
                       $scope.countries = data;
                   }).error(function (data, status, headers, config) {
                       $scope.message = 'Unexpected Error';
                   });
               }

               $scope.GetStates2 = function () {

               }


               $scope.GetStates = function () {
                   var countryId = $scope.country;
                   var formData = new FormData();
                   formData.append("vid", countryId);
                   if (countryId) {

                       $http.post(urlIpobase + 'Handlers/GetState.ashx', formData, {

                           transformRequest: angular.identity,
                           headers: { 'Content-Type': undefined }
                       })
             .success(function (response) {

                 //  ajaxindicatorstop();

                 var kk = response
                 $scope.states = kk;
                 // $scope.states = data;

             })
             .error(function (aa) {
                 var data = aa
                 // ajaxindicatorstop();
                 // swal("error")
             });

                   }
                   else {
                       $scope.states = null;
                   }
               }

           }
         
  
       });

       app.controller('AboutUsController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $sce, $filter, $location, $state, $document) {

         

               if (localStorageService.get("username") == null) {
                   //  alert("username=" + localStorageService.get("username"))

                   $rootScope.islogin = false;

                   $rootScope.islogout = true;

                
                   // authService2.checkaccess2();
               }

               else {
                   var vtokendate = localStorageService.get("access_tokenexpire")
                   var vtokendate2 = new Date(vtokendate);

                   var vtokendate3 = new Date();



                   var tdate = dates.compare(vtokendate2, vtokendate3);

                   if (tdate < 0) {
                      // $location.path("/logout");

                      // return;

                   }

                   $rootScope.agentRole = localStorageService.get("agentRole");

                   $rootScope.islogin = true;

                   $rootScope.islogout = false;

                   $rootScope.username = localStorageService.get("username")

                   //   authService2.checkaccess2();
                   if (localStorageService.get("Email") != null) {
                       var ddx = localStorageService.get("Email");
                       // alert("inside logged")

                       $scope.itemsByPage = 50;
                       $scope.ListAgent = ddx.data;
                       $scope.displayedCollection = [].concat($scope.ListAgent);

                   }


               }



            

             
               //  if (localStorageService.get("Email") != null) {
            


               //   }

               //  localStorageService.set("count", '3');

               // var aap = localStorageService.get("count");




               
               // alert(aap)
               $rootScope.count = '21';

             






         


       });

       app.controller('SendMailController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $filter) {


           $scope.Registration = localStorageService.get("user");

           $scope.items = ['Complaints', 'Enquires', 'Feedback'];
         

           $rootScope.count2 = '23';
           $rootScope.HeaderMessage = "Contact Us";

           //var id = $scope.Registration.xid;
           //var vemail = $scope.Registration.Email;
           //var vfullname = $scope.Registration.Surname


           //var id = $scope.Registration.xid;
           var vemail ="";
           var vfullname = "";
           $scope.submitForm = function (aa) {


               if ((aa.chickenEgg == "") || (aa.chickenEgg == undefined)) {

                   swal("", "Select Complain Type", "error");
                   return;
               }

               var subject = aa.chickenEgg + " From: " + this.fullname;

               authService.getSendMail(aa.chickenEgg, "paymentsupport@einaosolutions.com", vemail, vfullname, aa.address).then(function (data, status) {
                   swal("", "Message Sent Successfully", "success");


               });

           }

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;
               $rootScope.Recordal = 0;
               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
              

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }



           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;

               authService.GetPendingContent().then(function (data, status) {

                   $rootScope.vcontent = data.data;





               });
               // authService2.checkaccess2();
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();



               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   // $location.path("/logout");

                   // return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");

               $rootScope.islogin = true;

               $rootScope.islogout = false;

               $rootScope.username = localStorageService.get("username")

               //   authService2.checkaccess2();



           }









       });


       app.controller('AgentAccreditationController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $sce, $filter, $location, $uibModal) {
       

           var url3 = "http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/Approve.ashx";
           var url6 = "http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/Reject.ashx";

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               // authService2.checkaccess2();
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();



               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");

               $rootScope.islogin = true;

               $rootScope.islogout = false;

             




           }


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;
               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;
               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }


           $rootScope.HeaderMessage = "Account Settings";

           $rootScope.isFee = true;
           //  if (localStorageService.get("Email") != null) {
           $rootScope.count22 = '24';


           //   }

           localStorageService.set("count", '7');

           var aap = localStorageService.get("count");

         

           // alert(aap)
           $rootScope.count = '00';

           $rootScope.count2 = '7';

           $scope.oneAtATime = true;

     




           authService.GetAgentStatus().then(function (data, status) {
               var dd = data;
              
               $scope.itemsByPage = 10;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);


           });



         
           

           $scope.Updaterecord2 = function (rows) {
               swal({
                   title: "Are you sure?",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55",
                   confirmButtonText: "Yes, Update it!",
                   closeOnConfirm: false
               },
               function () {

                   var formData = new FormData();
                   formData.append("vid", rows.Xid);

                   $http.post(url3, formData, {

                       transformRequest: angular.identity,
                       headers: { 'Content-Type': undefined }
                   })
     .success(function (response) {
         swal("", "Update Successful", "success")
         location.reload();

     })
     .error(function (aa) {
         var data = aa

     });
                  // SweetAlert.swal("Booyah!");
               });


           }

           $scope.Updaterecord5 = function (rows) {
               swal({
                   title: "Are you sure?",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55",
                   confirmButtonText: "Yes, Reject it!",
                   closeOnConfirm: false
               },
               function () {

                   var formData = new FormData();
                   formData.append("vid", rows.Xid);

                   $http.post(url6, formData, {

                       transformRequest: angular.identity,
                       headers: { 'Content-Type': undefined }
                   })
     .success(function (response) {
         swal("", "Update Successful", "success")
         location.reload();

     })
     .error(function (aa) {
         var data = aa

     });
                   // SweetAlert.swal("Booyah!");
               });


           }
          
           
           $scope.Updaterecord6 = function (rows) {


               $scope.vdetail = rows;
               $rootScope.modalInstance = $uibModal.open({

                   ariaLabelledBy: 'modal-title-bottom',
                   ariaDescribedBy: 'modal-body-bottom',
                   templateUrl: 'myModalContent3.html',
                   scope: $scope,
                   size: 'lg',
                   controller: function ($scope, $uibModalInstance) {
                       $scope.name = 'bottom';

                       $scope.ok = function () {
                           $uibModalInstance.close('a');
                       };

                   }
               }
)
              
           };








       });

       app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {


           $scope.ok = function () {
               $modalInstance.close($scope.selected.item);
           };

           $scope.cancel = function () {
               $modalInstance.dismiss('cancel');
           };
       });
       app.controller('SelectedItemController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window, $uibModal, ngDialog) {

        



           $scope.value2 = "NO";
           $scope.ok = function () {
               $rootScope.modalInstance.close('a');


           }
           $scope.submitForm2 = function () {

               $window.history.back();


           }


           $scope.Shopping_card3 = [];

           $rootScope.HeaderMessage = "Make Payment";
           $rootScope.isFee = true;



           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;
               $rootScope.Recordal = 0;
               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }






        //   localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
         //  var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';

           $rootScope.count2 = '32';

         


           $scope.vTotal = 0;

           if (localStorageService.get("Shopping_card2") != null) {
               $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

               $scope.itemsByPage = 100;


               $scope.displayedCollection2 = [].concat($scope.Shopping_card3);


               angular.forEach($scope.Shopping_card3, function (item) {

                   item.amt = item.amt * item.qty;
                   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


               });

           }
           $scope.animationsEnabled = true;
          
          var opened = false;
           $scope.getCheckedTrue = function () {
              
               if ($scope.value2 == "YES") {
                   // if (opened) return;
                   if (opened) {

                       $rootScope.modalInstance.close('a');
                   }
                   $rootScope.modalInstance= $uibModal.open({

                       ariaLabelledBy: 'modal-title-bottom',
                       ariaDescribedBy: 'modal-body-bottom',
                       templateUrl: 'myModalContent2.html',
                       size: 'lg',
                       controller: function ($scope, $uibModalInstance) {
                           $scope.name = 'bottom';

                           $scope.ok = function () {
                               $uibModalInstance.close('a');
                           };

                       }
                   }
)


             
             
                   
                   opened = true;
                //   $scope.dialogShown = true;
                 //  $scope.showClose = false;
               }

               else {

                  // if (opened) {

                       $rootScope.modalInstance.close('a');
                       opened = false;
                 //  }

                 //  $scope.dialogShown = false;
               }
           };
           $scope.submitForm = function () {
               var Shopping_card = []

             

               if ($scope.value2 == "NO") {

                   swal("", "Check Terms And Aggrement To Continue", "error");

                   return;
               }
               Shopping_card = localStorageService.get("Shopping_card2");
               var applicant = localStorageService.get("applicant");
               var agent = localStorageService.get("user");






               authService.checkout(applicant, Shopping_card, agent).then(function (data, status) {
                   var dd = data;
                   localStorageService.set("twallet", data);

                 $location.path("/Minvoice");



               });





           }



        


       });


       app.controller('GetAgentMailController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $location, $filter) {


           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
             //  authService2.checkaccess2();
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;

               $rootScope.username = localStorageService.get("username")

               //  authService2.checkaccess2();

           }
           if (localStorageService.get("user") == null) {
               $rootScope.user = localStorageService.get("user");

           }

           if (localStorageService.get("count") == null) {
               $rootScope.count = 0;

           }

           else {
               $rootScope.count = localStorageService.get("count")

           }




      

         



       });

     

       app.controller('TopMenuController', function ($scope, $http, $rootScope, localStorageService, authService, $state, $location, $filter) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

          

           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Menu_Name: vform.role_name

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.saveMenu(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";


                       // $state.transitionTo('Role');
                       swal("Record Saved Successfully");

                       //  $state.transitionTo('Role.Detail');

                       location.reload(true)





                       //   $location.path("/")
                       //  startTimer();

                   },
               function (response) {
                   //  ajaxindicatorstop();

                   var errors = response;
                
                   $scope.message = "Failed to register user due to:" + errors.join(' ');
               });


               }




           }



       });

       app.controller('FormxController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window, $uibModal, $timeout) {
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;

           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")

               $rootScope.agentRole = localStorageService.get("agentRole")

               $rootScope.count = '00';

               $rootScope.count2 = '32';



               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Make Payment";
           $rootScope.isFee = true;
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

           $scope.totalamt = parseFloat($scope.tech_amt) + parseFloat($scope.init_amt)

         

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Accreditation = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }




      
        
               var kk2 = $("input[name=product_id]").val();

           //   alert("value =" + $scope.vdata.product_id)

             
               $scope.callAtTimeout = function () {
                 //  $("#form1").submit();
                //   angular.element("#form1").submit()
                 //  $rootScope.modalInstance.close('a');
                 //  $location.path("/Formx");

               }
          
               $scope.$on('$viewContentLoaded', function () {
                   //call it here
                   alert("value3 =" + $rootScope.vdata.product_id)

                   //  $timeout($scope.callAtTimeout(), 40000);
                   //  $('#form2').submit(function () { return true; });

                   document.getElementById('form2').submit();
                 //  $("#form2").submit();
               });

       });

       app.controller('CertificateController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $state, $filter) {


           var serviceBaseIpo = 'http://88.150.164.30/EinaoTestEnvironment.IPO';

           var serviceBaseCld = 'http://45.40.139.163/EinaoTestEnvironment.CLD/';

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }
           $rootScope.HeaderMessage = "Document";
           $rootScope.count = '00';

           $rootScope.count2 = '24';

           $rootScope.count22 = '33';


           $scope.add3 = function (dd, dd2) {
               $scope.payment = [];
               var Encrypt = {
                   vid: dd
               }
               var kk = $("#vchk").attr("checked")

               if ($("#vchk").attr("checked")) {

                   $http({
                       method: 'POST',
                       url: serviceBaseCld + 'Handlers/GetBranchCollectPayment2.ashx',
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
                       if (response.TransId == null) {
                           swal("Record Not Found Please Complete T003 Payment")


                       }

                       $scope.payment = response;


                   })
                   .error(function (response) {


                       alert("error " + response)
                   });

               }
               else {

                   $http({
                       method: 'POST',
                       url: serviceBaseCld + 'Handlers/GetPayment.ashx',
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

                           try {

                               response = response.split('"').join('');



                               if (response == "Full Transaction  Id Search Not Allowed ") {

                                   swal("", "Full Transaction  Id Search Not Allowed", "error")
                                   return;
                               }

                           }

                           catch (err) {


                           }

                           if (response.TransId == null) {
                               swal("Record Not Found Please Complete T003 Payment")


                           }

                           $scope.payment = response;


                       })
                       .error(function (response) {

                           swal("", "Please Enter Correct Payment ID", "error")
                           //  alert("error " + response)
                       });

               }


           }

           $rootScope.BranchCollect = false;
           $scope.EditRow = function (dd) {

               $scope.VEmail = "";
               $rootScope.VEmail = "";
               $("input#emailaddress").val("")
               $scope.payment = "";
               $rootScope.oai_no = dd.oai_no;
               $scope.dialogShown = true;

           }

           $scope.EditRow2 = function (dd) {


               var Encrypt = {
                   vid: dd.TransId,
                   vid2: $rootScope.oai_no
               }

               $http({
                   method: 'POST',
                   url: serviceBaseCld + 'Handlers/GetCld.ashx',
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
                       response = response.split('"').join('');



                       if (response == "This Payment  Id Is not For This Transaction") {

                           swal("", "This Payment  Id Is not For This Transaction", "error")
                           return;
                       }
                       if (response == "Id Already Exist") {

                           swal("", "Id Already Used", "error")
                           return;
                       }

                       swal(response)
                       $scope.dialogShown = false;
                       //  swal("Record Updated Successfully")
                       //  location.reload();

                   })
                   .error(function (error) {



                       //document.open();
                       //document.write(error);
                       //document.close();
                       // alert(  document.writeln(error) )
                       swal("", error, "error")


                   });

           }

           $scope.add2 = function (dd) {

               var Applicant = new Object();

               Applicant.applicantname = dd.applicant_name;
               Applicant.firstname = dd.applicant_name;
               Applicant.lastname = dd.applicant_name;
               Applicant.address = dd.Xaddress;
               Applicant.email = dd.Xemail;
               Applicant.mobile = dd.Xmobile;

               localStorageService.set("applicant", Applicant);


               var Shopping_card = new Object();
               var Shopping_card2 = [];






               var vbasket = new Object();
               vbasket.TrademarkCount = "1";
               vbasket.PatentCount = "0";
               vbasket.DesignCount = "0";
               vbasket.Accreditation = "0";
               vbasket.Recordal = "0";
               vbasket.TotalCount = "0";
               vbasket.vcount = "1";
               vbasket.TotalCount = "11357";

               localStorageService.set("baskets", vbasket);

               localStorageService.set("Documentid", null);

               localStorageService.set("Documentid2", dd.id);
               localStorageService.set("Documenttype", null);

              
                 //  localStorageService.set("Documenttype", "FORM 22");
                   Shopping_card.amt = "11357";
                   Shopping_card.init_amt = "10000";
                   Shopping_card.item_code = "T003";
                   Shopping_card.item_desc = "APPLICATION FOR ISSUANCE OF CERTIFICATE FOR TRADE/SERVICE MARKS";
                   Shopping_card.qty = "1";
                   Shopping_card.tech_amt = "1357";
                   Shopping_card.xid = "3";
                   Shopping_card.sn = "1";

                   Shopping_card2.push(Shopping_card);
                   localStorageService.set("Shopping_card2", Shopping_card2);

                   $location.path("/SelectedItem");

             
           }


           $scope.add = function () {

               //  alert($scope.OnlineNumber)


               var vk = $scope.OnlineNumber;


               var serviceBase = serviceBaseIpo + '/Handlers/GetCertificate.ashx';

               // var serviceBase = 'http://localhost:4556/Handlers/GetRegistration.ashx';


               var Encrypt = {
                   vid: vk
               }

               $http({
                   method: 'POST',
                   url: serviceBase,
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
                       var dd = [];

                       dd = response;

                       //if (dd.length > 0 && dd[0].xstat == "New") {


                       //    swal("Oops...", "Transaction Exist But Been Verified", "error");
                       //    return;
                       //}

                       if (dd.length > 0 && dd[0].TransactionId != "") {


                           swal("Oops...", "This Certificate  Has Been Paid For", "error");
                           return;
                       }

                       if (dd.length > 0) {

                           $scope.itemsByPage = 50;
                           $scope.ListAgent = response;
                           $scope.displayedCollection = [].concat($scope.ListAgent);

                       }

                       else {

                           swal("Oops...", "Invalid Online Number!", "error");

                           $scope.displayedCollection = [];
                           $scope.ListAgent = [];
                       }
                       //  IpoTradeMarks2(response.Email, response.Firstname, response.CompanyAddress, response.xid, response.PhoneNumber)
                       //  ajaxindicatorstop();

                   })
                   .error(function (response) {
                       ajaxindicatorstop();
                   });



               //var SponsData = {


               //    email: $scope.Email,
               //    xpass: $scope.Password,
               //    request: 'vlogin'


               //};

           }

       });

       app.controller('UploadDocController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $state, $filter) {
           $scope.varray43 = [{ Transaction_Status: 'Trademark', Transaction_Status2: 'Trademark' }, { Transaction_Status: 'Patent', Transaction_Status2: 'Patent' }, { Transaction_Status: 'Design', Transaction_Status2: 'Design' }];

           $scope.varray44 = [{ Transaction_Status: 'Online No', Transaction_Status2: 'Online No' }, { Transaction_Status: 'File/Tp No', Transaction_Status2: 'File/Tp No' }];


           $rootScope.aa = {}

           $scope.formData = {}


           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $scope.Ddx = function (aa,bb,cc) {
               if (aa == undefined) {
                   swal("", "Select Type", "error")

                   return;
               }

               else {
                   $scope.formData = {};

                   $scope.showtrademark = false;

                   $scope.showpatent = false;

                   if (aa == "Trademark") {
                       var Registration = localStorageService.get("user");
                       var vsys_id = Registration.Sys_ID;
                       var response = {};
                       if (bb == "Online No") {

                           authService.getdata2(cc, vsys_id).then(function (data, status) {
                              
                               response = data;

                               $scope.returnval(response);

                           });
                       }

                       else {
                           authService.getdata(cc, vsys_id).then(function (data, status) {
                               response = data;
                               $scope.returnval(response); 

                           });

                       }


                      




                   }

                   else if ((aa == "Patent")) {

                       var Registration = localStorageService.get("user");
                       var vsys_id = Registration.Sys_ID;
                       var response = {};
                       if (bb == "Online No") {

                           authService.getdata3(cc, vsys_id).then(function (data, status) {

                               response = data;

                               $scope.returnval2(response);

                           });
                       }

                       else {
                           authService.getdata4(cc, vsys_id).then(function (data, status) {
                               response = data;
                               $scope.returnval2(response);

                           });

                       }

                   }

               }

           }

           $scope.returnval = function (response) {
               $scope.showtrademark = true;
               $scope.showpatent = false;

               $scope.formData.ng_applicant_name = response.applicant_name;
              
               $scope.formData.title_of_trademark = response.product_title;
              
               $scope.formData.application_no = response.reg_no;
              
               if (response.logo_pic != "") {

                   $scope.formData.logo_pic = serviceBaseCld + "admin/tm/" + response.logo_pic;
                   //  $scope.formData.logo_pic = "http://localhost:4556/admin/tm/" + response.mark_info.logo_pic;
                   $scope.formData.show = true;
               }

               else {

                   $scope.formData.show = false;
               }

               if (response.auth_doc != "") {

                   $scope.formData.auth_doc = serviceBaseCld + "admin/tm/" + response.auth_doc;
                   //  $scope.formData.auth_doc = "http://localhost:4556/admin/tm/" + response.mark_info.auth_doc;
                   $scope.formData.show4 = true;
               }

               else {

                   $scope.formData.show4 = false;
               }


               if (response.sup_doc2 != "") {

                   $scope.formData.sup_doc2 = serviceBaseCld + "admin/tm/" + response.sup_doc2;

                   // $scope.formData.sup_doc2 = "http://localhost:4556/admin/tm/" + response.mark_info.sup_doc2;
                   $scope.formData.show3 = true;
               }

               else {

                   $scope.formData.show3 = false;
               }


               if (response.sup_doc1 != "") {

                   $scope.formData.sup_doc1 = serviceBaseCld + "admin/tm/" + response.sup_doc1;

                   // $scope.formData.sup_doc2 = "http://localhost:4556/admin/tm/" + response.mark_info.sup_doc2;
                   $scope.formData.show2 = true;
               }

               else {

                   $scope.formData.show2 = false;
               }


           }


           $scope.returnval2 = function (response) {
               var serviceBasePt = "http://88.150.164.30/EinaoTestEnvironment.Patent/";
               $scope.showtrademark = false;
               $scope.showpatent = true;
               $scope.formData.reg_number = response.reg_number;
               $scope.formData.title_of_invention = response.title_of_invention;
              
               if (response.loa_doc != "") {
                   $scope.formData.logo_pic = serviceBasePt + "admin/pt/" + response.loa_doc;
                   $scope.formData.show = true;

               }
               if (response.claim_doc != "") {
                   $scope.formData.auth_doc = serviceBasePt + "admin/pt/" + response.claim_doc;
                   $scope.formData.show2 = true;
               }
               if (response.pct_doc != "") {
                   $scope.formData.sup_doc2 = serviceBasePt + "admin/pt/" + response.pct_doc;
                   $scope.formData.show3 = true;
               }
               if (response.doa_doc != "") {
                   $scope.formData.sup_doc3 = serviceBasePt + "admin/pt/" + response.doa_doc;
                   $scope.formData.show4 = true;
               }
               if (response.spec_doc != "") {
                   $scope.formData.sup_doc4 = serviceBasePt + "admin/pt/" + response.spec_doc;
                   $scope.formData.show5 = true;
               }

               if (response.reg_number != "") {
                   $state.go('form.detail')

               }


           }
         
           $rootScope.HeaderMessage = "Document";
           $rootScope.count = '00';

           $rootScope.count2 = '24';

           $rootScope.count22 = '34';

       });

       app.controller('RecordalController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $state, $filter) {

          // $scope.aa = {};
          // alert($scope.aa.Getstatus)
           //  $scope.aa.Getstatus =undefined

          
           localStorageService.set("Documentid2", null);
           if ($rootScope.aa == undefined) {
               $rootScope.aa = {}
}
          
         
         
           $scope.varray43 = [{ Transaction_Status: 'File/Tp Number', Transaction_Status2: 'File/Tp Number' }, { Transaction_Status: 'Rtm Number', Transaction_Status2: 'Rtm Number' } ];
           $scope.checked2 = false;
           $scope.checked = false;
           $scope.Ddx = function (aa) {
               if (aa == undefined) {
                   swal("", "Select Recordal Type", "error")

                   return;
               }

               else {
                  // localStorageService.set("recordal", aa.Getstatus)

                   //  $state.transitionTo('Recordal2', null, { 'reload': true });
                
                   $rootScope.aa.Getstatus = aa
                 
                   $state.transitionTo('Recordal2', null, { 'reload': true });

               //    $location.path("/Recordal2");
                  
               }

           }


           $scope.Ddx3 = function (aa, bb,cc) {
               var serviceBase = '';
               var vk = cc;
               if (aa == undefined) {
                   swal("", "SelectSearch Criteria", "error")
                   return;
               }

               else {
                   // localStorageService.set("recordal", aa.Getstatus)

                   //  $state.transitionTo('Recordal2', null, { 'reload': true });

                   if (aa == "Rtm Number") {

                       serviceBase = 'http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/GetCertificate6.ashx';
                   }

                   else {
                       serviceBase = 'http://88.150.164.30/EinaoTestEnvironment.IPO/Handlers/GetCertificate7.ashx';
                   }




                   var Encrypt = {
                       vid: vk
                   }

                   $http({
                       method: 'POST',
                       url: serviceBase,
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
                           var dd = [];

                           dd = response;

                           if (dd.length > 0) {

                               $scope.itemsByPage = 50;
                               $scope.ListAgent = response;
                               $scope.displayedCollection = [].concat($scope.ListAgent);

                           }

                           else {

                               swal({
                                   title: "Record Not Found",
                                   text: "Add New Entry?",
                                   type: "warning",
                                   showCancelButton: true,
                                   confirmButtonColor: "#DD6B55", confirmButtonText: "ADD",
                                   cancelButtonText: "No!",
                                   closeOnConfirm: true,
                                   closeOnCancel: true
                               },
           function (isConfirm) {
               if (isConfirm) {
                   var Registration = localStorageService.get("user");
                   var xname = Registration.Surname;
                   var xaddress = Registration.CompanyAddress;
                   var xemail = Registration.Email;

                   var xPhoneNumber = Registration.PhoneNumber;

                   var xpwalletID = Registration.xid;

                   var vsys_id = Registration.Sys_ID;

                   var param = {
                       'agt': vsys_id,  'xgt': xname, 'applicantname': xname, 'agentemail': xemail, 'agentpnumber': xPhoneNumber, 'agent': xpwalletID
                   };

                 //  doUrlPost("xindex_manual.aspx", "", "0", vsys_id, xname, "", "", "", xaddress, "", xname, xemail, xPhoneNumber, "", "", "", "", "")
                   OpenWindowWithPost("http://88.150.164.30/EinaoTestEnvironment.IPO/A/xindex_manual.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);


               } else {
                   swal("Cancelled", "Action Canceled :)", "error");
               }
           });

                               $scope.displayedCollection = [];
                               $scope.ListAgent = [];
                           }
                           //  IpoTradeMarks2(response.Email, response.Firstname, response.CompanyAddress, response.xid, response.PhoneNumber)
                           //  ajaxindicatorstop();

                       })
                       .error(function (response) {
                           ajaxindicatorstop();
                       });
                  

               }

           }

           $scope.add2 = function (aa, bb) {


              

                   var Applicant = new Object();

                   Applicant.applicantname = aa.applicant_name;
                   Applicant.firstname = aa.applicant_name;
                   Applicant.lastname = aa.applicant_name;
                   Applicant.address = aa.Xaddress;
                   Applicant.email = aa.Xemail;
                   Applicant.mobile = aa.Xmobile;

                   localStorageService.set("applicant", Applicant);


                   var Shopping_card = new Object();
                   var Shopping_card2 = [];

                 
                  



                   var vbasket = new Object();
                   vbasket.TrademarkCount = "0";
                   vbasket.PatentCount = "0";
                   vbasket.DesignCount = "0";
                   vbasket.Accreditation = "0";
                   vbasket.Recordal = "1";
                   vbasket.TotalCount = "0";
                   vbasket.vcount = "1";
                   vbasket.TotalCount = "10770";

                   localStorageService.set("baskets", vbasket);
                  
                   localStorageService.set("Documentid", aa.id);


                   if (bb == "FORM 22") {
                       localStorageService.set("Documenttype", "FORM 22");
                       Shopping_card.amt = "10770";
                       Shopping_card.init_amt = "8000";
                       Shopping_card.item_code = "T008";
                       Shopping_card.item_desc = "CHANGES IN REGISTERED PARTICULARS (NAMES, ADDRESSES ETC)";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2770";
                       Shopping_card.xid = "8";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }

                   if (bb == "FORM 19") {
                       localStorageService.set("Documenttype", "FORM 19");
                       Shopping_card.amt = "10770";
                       Shopping_card.init_amt = "8000";
                       Shopping_card.item_code = "T008";
                       Shopping_card.item_desc = "CHANGES IN REGISTERED PARTICULARS (NAMES, ADDRESSES ETC)";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2770";
                       Shopping_card.xid = "8";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                   if (bb == "FORM 26") {
                       localStorageService.set("Documenttype", "FORM 26");
                       Shopping_card.amt = "10770";
                       Shopping_card.init_amt = "8000";
                       Shopping_card.item_code = "T021";
                       Shopping_card.item_desc = "APPLICATION FOR RECTIFICATION FOR TRADEMARK";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2770";
                       Shopping_card.xid = "21";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                   if (bb == "FORM 12") {
                       localStorageService.set("Documenttype", "FORM 12");
                       Shopping_card.amt = "14686";
                       Shopping_card.init_amt = "12000";
                       Shopping_card.item_code = "T009";
                       Shopping_card.item_desc = "RENEWAL OF TRADE/SERVICE MARKS (TO COMPEL PROPRIETORS TO RENEW AS AND WHEN DUE, REGULATION 66-70 RELATING TO RENEWALS SHOULD BE ENFORCED)";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2686";
                       Shopping_card.xid = "9";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                   if (bb == "FORM 16") {
                       localStorageService.set("Documenttype", "FORM 16");
                       Shopping_card.amt = "17624";
                       Shopping_card.init_amt = "15000";
                       Shopping_card.item_code = "T014";
                       Shopping_card.item_desc = "REGISTRATION OF ASSIGNMENT/MERGER WITHIN THE PRESCRIBED PERIOD";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2624";
                       Shopping_card.xid = "14";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                   if (bb == "FORM 17") {
                       localStorageService.set("Documenttype", "FORM 17");
                       Shopping_card.amt = "17624";
                       Shopping_card.init_amt = "15000";
                       Shopping_card.item_code = "T014";
                       Shopping_card.item_desc = "REGISTRATION OF ASSIGNMENT/MERGER WITHIN THE PRESCRIBED PERIOD";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2624";
                       Shopping_card.xid = "14";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                   if (bb == "FORM 47") {
                       localStorageService.set("Documenttype", "FORM 47");
                       Shopping_card.amt = "17624";
                       Shopping_card.init_amt = "15000";
                       Shopping_card.item_code = "T017";
                       Shopping_card.item_desc = "REGISTRATION OF REGISTERED USER OF TRADEMARK";
                       Shopping_card.qty = "1";
                       Shopping_card.tech_amt = "2624";
                       Shopping_card.xid = "17";
                       Shopping_card.sn = "1";

                       Shopping_card2.push(Shopping_card);
                       localStorageService.set("Shopping_card2", Shopping_card2);

                       $location.path("/SelectedItem");

                   }


                  

      

                
              



           }


           $scope.add8 = function (aa, bb) {

               var Registration = localStorageService.get("user");
               var xname = Registration.Surname;
               var xaddress = Registration.CompanyAddress;
               var xemail = Registration.Email;

               var xPhoneNumber = Registration.PhoneNumber;

               var xpwalletID = Registration.xid;

               var vsys_id = Registration.Sys_ID;

               var param = {
                   'transID': aa.id, 'xname': xname, 'xaddress': xaddress, 'xemail': xemail, 'xPhoneNumber': xPhoneNumber, 'xpwalletID': vsys_id, 'vamount': "0", 'vtranid': "0"
               };

               //  doUrlPost("xindex_manual.aspx", "", "0", vsys_id, xname, "", "", "", xaddress, "", xname, xemail, xPhoneNumber, "", "", "", "", "")
               OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_ApplicantAgent.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);


              











           }
           $scope.change = function (aa) {

            

               if (aa == "File/Tp Number") {

                   $scope.checked2 = true;
                   $scope.checked = false;
                   $scope.checked4 = true;

               }

               else if (aa == "Rtm Number") {
                   $scope.checked2 = false;
                   $scope.checked = true;
                   $scope.checked4 = true;
               }

               else {
                   $scope.checked2 = false;
                   $scope.checked = false;
                   $scope.checked4 = false;

               }


           }



           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }



           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }
          
           $scope.varray44 = [{ Transaction_Status: 'FORM 22', Transaction_Status2: 'FORM 22-CHANGE OF APPLICANT NAME' }, { Transaction_Status: 'FORM 19', Transaction_Status2: 'FORM 19-CHANGE OF APPLICANT ADDRESS' }, { Transaction_Status: 'FORM 26', Transaction_Status2: 'FORM 26-AMENDMENT (CLERICAL ERRORS IN TRADEMARK TITLE)' }, { Transaction_Status: 'FORM 12', Transaction_Status2: 'FORM 12-RENEWAL (RENEWAL OF REGISTRATION OF TRADE MARK (REGULATION 66))' }

           , { Transaction_Status: 'FORM 16', Transaction_Status2: 'FORM 16-MERGER (JOINT REQUEST TO THE REGISTRAR BY REGISTERED PROPRIETOR AND TRANSFEREE TO REGISTER THE TRANSFEREE ...' }

           , { Transaction_Status: 'FORM 17', Transaction_Status2: 'ASSIGNMENT (REQUEST TO THE REGISTRAR TO REGISTER A SUBSEQUENT PROPRIETOR OF A TRADE MARK ...' }

            , { Transaction_Status: 'CHANGEAGENT', Transaction_Status2: 'RECORDAL OF CHANGE OF AGENT' }

            , { Transaction_Status: 'FORM 47', Transaction_Status2: 'REGISTERED USERS' }];

           $rootScope.HeaderMessage = "Document";
           $rootScope.count = '00';

           $rootScope.count2 = '24';

           $rootScope.count22 = '32';

       });

       app.controller('ViewBasketTmController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $filter) {

          
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }



           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }


           $rootScope.HeaderMessage = "Purchases Unused";
           $rootScope.count = '00';

           $rootScope.count2 = '0';

           $rootScope.count22 = '21';
         
           $scope.submitForm2 = function () {

               $window.history.back();


           }

           $scope.dashboard2 = function () {

               if (localStorageService.get("ViewBasketDetails") != null) {
                   var detail2 = localStorageService.get("ViewBasketDetails");
                   
                   if ((detail2.item_code == "T002") || (detail2.item_code == "T102")) {

                       $location.path("/ApplicationFileToo2");

                   }

                   else {
                       var detail2 = localStorageService.get("ViewBasketDetails");
                       var Registration = localStorageService.get("user");
                       var xapplicant_addy = detail2.address;
                       var xtransid = detail2.new_transID
                       var xamt = detail2.init_amt
                       var xagent = Registration.Sys_ID;
                       var xgt ="xpay";

                       var xapplicant_name = detail2.xname;

                       var xapplicant_email = detail2.xemail;

                       var xapplicant_no = detail2.xmobile

                       var xapplicant_addy = detail2.address;

                       var xagent2 = Registration.Sys_ID;

                       var xagentname = Registration.Surname

                       var xagentemail = Registration.Email

                       var xagentpnumber = Registration.PhoneNumber

                       var xproduct_title = detail2.product_title

                       var xitem_code = detail2.item_code

                       var xpc = detail2.item_code

                       var xhwalletID = detail2.xid

                       var xfee_detailsID = detail2.fee_detailsID;

                       var param = {
                           'transID': xtransid, 'amt': xamt, 'agt': xagent, 'xgt': xgt, 'applicantname': xapplicant_name, 'applicantemail': xapplicant_email, 'applicantpnumber': xapplicant_no, 'applicant_addy': xapplicant_addy, 'agent': xagent,
                           'agentname': xagentname, 'agentemail': xagentemail, 'agentpnumber': xagentpnumber, 'product_title': xproduct_title, 'item_code': xitem_code, 'pc': xpc, 'hwalletID': xhwalletID, 'fee_detailsID': xfee_detailsID
                       };
                       OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/gf/xindex.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                    
                     

                   }


                   function postwith(to, p) {
                       var myForm = document.createElement("form");
                       myForm.method = "post";
                       myForm.target = "map";
                       myForm.action = to;
                       for (var k in p) {
                           var myInput = document.createElement("input");
                           myInput.setAttribute("name", k);
                           myInput.setAttribute("value", p[k]);
                           myForm.appendChild(myInput);
                       }
                       document.body.appendChild(myForm);
                       map = window.open("", "Map", "status=0,title=0,height=600,width=800,scrollbars=1");

                       if (map) {
                           myForm.submit();
                           document.body.removeChild(myForm);
                       } else {
                           alert('You must allow popups for this map to work.');
                       }
                      
                      
                   }

               }
           }
           $scope.EditRow = function (row) {
               $rootScope.Details = row;
               localStorageService.set("ViewBasketDetails", row);

               if (row.product_title == "" || row.product_title == undefined) {

                   swal("", "Please Enter Product Title", "error")
                   return;
               }




               authService.getPwalletCount(row.new_transID).then(function (data, status) {

                   if ((data > 0) ) {

                       swal("", "Application Already Exist", "error")
                       return;
                   }

                   else {
                      

                           $location.path("/Confirmbasketdetails");

                       

                       //$location.path("/app/Confirmbasketdetails");

                   }


               });





           }
        


           $scope.Registration = localStorageService.get("user");
           var id = $scope.Registration.xid;

           authService.getBasket2("tm", id).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });


       

       







       });

       app.controller('ViewBasketPtController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $filter) {


           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.Recordal = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $rootScope.HeaderMessage = "Purchases Unused";
           $rootScope.count = '00';
           $rootScope.count2 = '0';
           $rootScope.count22 = '22';

           $scope.submitForm3 = function () {

               var detail2 = localStorageService.get("ViewBasketDetails");

               if ((detail2.item_code == "P001") || (detail2.item_code == "P002") || (detail2.item_code == "P102")) {

                   var detail2 = localStorageService.get("ViewBasketDetails");
                   var Registration = localStorageService.get("user");
                   var xapplicant_addy = detail2.address;
                   var xtransid = detail2.new_transID
                   var xamt = detail2.init_amt
                   var xagent = Registration.Sys_ID;
                   var xgt = "xpay";

                   var xapplicant_name = detail2.xname;

                   var xapplicant_email = detail2.xemail;

                   var xapplicant_no = detail2.xmobile

                   var xapplicant_addy = detail2.address;

                   var xagent2 = Registration.Sys_ID;

                   var xagentname = Registration.Surname

                   var xagentemail = Registration.Email

                   var xagentpnumber = Registration.PhoneNumber

                   var xproduct_title = detail2.product_title

                   var xitem_code = detail2.item_code

                   var xpc = detail2.item_code

                   var xhwalletID = detail2.xid

                   var xfee_detailsID = detail2.fee_detailsID;

                   var param = {
                       'transID': xtransid, 'amt': xamt, 'agt': xagent, 'xgt': xgt, 'applicantname': xapplicant_name, 'applicantemail': xapplicant_email, 'applicantpnumber': xapplicant_no, 'applicant_addy': xapplicant_addy, 'agent': xagent,
                       'agentname': xagentname, 'agentemail': xagentemail, 'agentpnumber': xagentpnumber, 'product_title': xproduct_title, 'item_code': xitem_code, 'pc': xpc, 'hwalletID': xhwalletID, 'fee_detailsID': xfee_detailsID
                   };
                   OpenWindowWithPost("http://88.150.164.30/EinaoTestEnvironment.Patent/xindex.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);

               }

               else if (((detail2.item_code != "P001") || (detail2.item_code != "P002") || (detail2.item_code != "P102") || (detail2.item_code != "P016") || (detail2.item_code != "P015") || (detail2.item_code != "P014"))) {
                   var detail2 = localStorageService.get("ViewBasketDetails");
                   var Registration = localStorageService.get("user");
                   var xapplicant_addy = detail2.address;
                   var xtransid = detail2.new_transID
                   var xamt = detail2.init_amt
                   var xagent = Registration.Sys_ID;
                   var xgt = "xpay";

                   var xapplicant_name = detail2.xname;

                   var xapplicant_email = detail2.xemail;

                   var xapplicant_no = detail2.xmobile

                   var xapplicant_addy = detail2.address;

                   var xagent2 = Registration.Sys_ID;

                   var xagentname = Registration.Surname

                   var xagentemail = Registration.Email

                   var xagentpnumber = Registration.PhoneNumber

                   var xproduct_title = detail2.product_title

                   var xitem_code = detail2.item_code

                   var xpc = detail2.item_code

                   var xhwalletID = detail2.xid

                   var xfee_detailsID = detail2.fee_detailsID;

                   var param = {
                       'transID': xtransid, 'amt': xamt, 'agt': xagent, 'xgt': xgt, 'applicantname': xapplicant_name, 'applicantemail': xapplicant_email, 'applicantpnumber': xapplicant_no, 'applicant_addy': xapplicant_addy, 'agent': xagent,
                       'agentname': xagentname, 'agentemail': xagentemail, 'agentpnumber': xagentpnumber, 'product_title': xproduct_title, 'item_code': xitem_code, 'pc': xpc, 'hwalletID': xhwalletID, 'fee_detailsID': xfee_detailsID
                   };
                   OpenWindowWithPost("http://88.150.164.30/EinaoTestEnvironment.Patent/xindex_ren.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);



               }

               else {
                   swal("", "Invalid Selection  Can't Proceed", "error");
                }



           }
           $scope.submitForm2 = function () {

               $window.history.back();


           }
           $scope.EditRow = function (row) {
               $rootScope.Details = row;
               localStorageService.set("ViewBasketDetails", row);

               if (row.product_title == "" || row.product_title == undefined) {

                   swal("", "Please Enter Product Title", "error")
                   return;
               }
               $location.path("/ConfirmBasketPt");


           }


         
           $scope.Registration = localStorageService.get("user");
           var id = $scope.Registration.xid;

           authService.getBasket2("pt", id).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });


       

        







       });

       app.controller('ViewBasketDsController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $filter) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;

               $rootScope.Recordal = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }


           $rootScope.HeaderMessage = "Purchases Unused";
           $rootScope.count = '00';
           $rootScope.count2 = '0';

           $rootScope.count22 = '23';

           $scope.submitForm3 = function () {

               var detail2 = localStorageService.get("ViewBasketDetails");

               if ((detail2.item_code == "D002") || (detail2.item_code == "D003") || (detail2.item_code == "D102")) {

                   var detail2 = localStorageService.get("ViewBasketDetails");
                   var Registration = localStorageService.get("user");
                   var xapplicant_addy = detail2.address;
                   var xtransid = detail2.new_transID
                   var xamt = detail2.init_amt
                   var xagent = Registration.Sys_ID;
                   var xgt = "xpay";

                   var xapplicant_name = detail2.xname;

                   var xapplicant_email = detail2.xemail;

                   var xapplicant_no = detail2.xmobile

                   var xapplicant_addy = detail2.address;

                   var xagent2 = Registration.Sys_ID;

                   var xagentname = Registration.Surname

                   var xagentemail = Registration.Email

                   var xagentpnumber = Registration.PhoneNumber

                   var xproduct_title = detail2.product_title

                   var xitem_code = detail2.item_code

                   var xpc = detail2.item_code

                   var xhwalletID = detail2.xid

                   var xfee_detailsID = detail2.fee_detailsID;
                  
                   var param = {
                       'transID': xtransid, 'amt': xamt, 'agt': xagent, 'xgt': xgt, 'applicantname': xapplicant_name, 'applicantemail': xapplicant_email, 'applicantpnumber': xapplicant_no, 'applicant_addy': xapplicant_addy, 'agent': xagent,
                       'agentname': xagentname, 'agentemail': xagentemail, 'agentpnumber': xagentpnumber, 'product_title': xproduct_title, 'item_code': xitem_code, 'pc': xpc, 'hwalletID': xhwalletID, 'fee_detailsID': xfee_detailsID
                   };
                   OpenWindowWithPost("http://88.150.164.30/EinaoTestEnvironment.Design/xindex.aspx" , "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);

               }

               else if (((detail2.item_code != "D002") || (detail2.item_code != "D003") || (detail2.item_code != "D102") )) {
                   var detail2 = localStorageService.get("ViewBasketDetails");
                   var Registration = localStorageService.get("user");
                   var xapplicant_addy = detail2.address;
                   var xtransid = detail2.new_transID
                   var xamt = detail2.init_amt
                   var xagent = Registration.Sys_ID;
                   var xgt = "xpay";

                   var xapplicant_name = detail2.xname;

                   var xapplicant_email = detail2.xemail;

                   var xapplicant_no = detail2.xmobile

                   var xapplicant_addy = detail2.address;

                   var xagent2 = Registration.Sys_ID;

                   var xagentname = Registration.Surname

                   var xagentemail = Registration.Email

                   var xagentpnumber = Registration.PhoneNumber

                   var xproduct_title = detail2.product_title

                   var xitem_code = detail2.item_code

                   var xpc = detail2.item_code

                   var xhwalletID = detail2.xid

                   var xfee_detailsID = detail2.fee_detailsID;

                   var param = {
                       'transID': xtransid, 'amt': xamt, 'agt': xagent, 'xgt': xgt, 'applicantname': xapplicant_name, 'applicantemail': xapplicant_email, 'applicantpnumber': xapplicant_no, 'applicant_addy': xapplicant_addy, 'agent': xagent,
                       'agentname': xagentname, 'agentemail': xagentemail, 'agentpnumber': xagentpnumber, 'product_title': xproduct_title, 'item_code': xitem_code, 'pc': xpc, 'hwalletID': xhwalletID, 'fee_detailsID': xfee_detailsID
                   };
                   OpenWindowWithPost(" http://88.150.164.30/EinaoTestEnvironment.Design/xindex_ren.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);



               }

               else {
                   swal("", "Invalid Selection  Can't Proceed", "error");
               }



           }

           $scope.submitForm2 = function () {

               $window.history.back();


           }
           $scope.EditRow = function (row) {
               $rootScope.Details = row;
               localStorageService.set("ViewBasketDetails", row);

               if (row.product_title == "" || row.product_title == undefined) {

                   swal("", "Please Enter Product Title", "error")
                   return;
               }
               $location.path("/ConfirmBasketDs");


           }


           $scope.dashboard = function () {

               $ionicHistory.goBack();
           }
           $scope.Registration = localStorageService.get("user");
           var id = $scope.Registration.xid;

           authService.getBasket2("ds", id).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });


          








       });

       app.controller('ApplicationFileToo2Controller', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window, $sce, $filter) {
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;
               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }
           
           
           $scope.device2 = true;

           $scope.GetStates13 = function (Logo) {



               if (Logo == "2") {
                   $scope.device2 = false;

               }

               else {
                   $scope.device2 = true;

               }
           }
    
           $rootScope.HeaderMessage = "Purchases Unused";
           $rootScope.count = '00';

           $rootScope.count2 = '0';

           $rootScope.count22 = '21';

           $scope.files = [];
           $scope.$on("fileSelected", function (event, args) {
               $scope.$apply(function () {
                   //add the file object to the scope's files collection
                   var pq = args;
                 
                   $scope.files.push(args.file);
               });
           });
           $scope.vfile = true;
           $scope.vfile2 = false;
           $scope.submitForm2 = function () {
               $scope.vfile = false;
               $scope.vfile2 = true;

           }

           $scope.submitForm = function (pp) {
               //   alert($scope.files2)
               //alert("class=" + $scope.vclass2)
               if (pp) {
                   //  var myWindow = window.open(window.location.href + '?printerFriendly=true', id, "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,height=600,left = 240,top = 212");
                   var myWindow = window.open('', id, "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,height=600,left = 240,top = 212");
                   authService.getPwalletCount($rootScope.Details.new_transID).then(function (data, status) {

                       if ((data > 0)) {

                           swal("", "Application Already Exist", "error")
                           return;
                       }

                       else {



                           var AgentsData = {
                               Applicant_name: $scope.appname,
                               Applicant_Address: $scope.address,
                               Applicant_Email: $scope.xemail,
                               Applicant_Phone: $scope.xtelephone,
                               Trading_As: "",
                               Nationality: $scope.country,
                               Trademark_Type: $scope.Trademark_Type,
                               Title_Of_Trademark: $scope.title_of_product,
                               Rtm_No: "",
                               Application_No: "",
                               Validationid: $rootScope.Details.new_transID,
                               Application_Date: "",
                               Trademark_Class: $scope.vclass2,
                               Goods_Desc: $scope.nice_class_desc,
                               Logo_Desc: $scope.Logo,
                               Txt_Discalimer: $scope.txt_discalimer,
                               Agent_Code: $scope.xcode,
                               Rep_Xname: $scope.xrep_xname,
                               Agent_Nationality: "",
                               Agent_Rep_Nationality: "",
                               Agent_State: "",
                               rep_address: $scope.rep_address,
                               Rep_telephone: $scope.rep_xtelephone,
                               Rep_email: $scope.rep_xemail,
                               Cert_publicationdate: "",
                               cert_details: "",
                               amount: '0',
                               Application_Type: 'T002'




                           };

                           var formData = new FormData();


                           for (var i = 0; i < $scope.files.length; i++) {
                               if ($scope.files[i].typeoffile == 'logo_pic') {

                                   formData.append("FileUpload", $scope.files[i].file[0]);

                               }

                               if ($scope.files[i].typeoffile == 'auth_doc') {
                                   formData.append("FileUpload2", $scope.files[i].file[0]);

                               }

                               if ($scope.files[i].typeoffile == 'sup_doc1') {
                                   formData.append("FileUpload3", $scope.files[i].file[0]);

                               }

                               if ($scope.files[i].typeoffile == 'sup_doc2') {
                                   formData.append("FileUpload4", $scope.files[i].file[0]);

                               }

                           }


                           formData.append("vv", JSON.stringify(AgentsData));





                           authService.PostAll(formData).then(function (data, status) {
                               //  var formData2 = new FormData2();
                               var content = JSON.parse(data);

                               //window.open(
                               //    serviceBaseCld + "tm_ark_repc2b.aspx?0001234445=" + content,
                               //     '_blank' // <- This is what makes it open in a new window.
                               //   );
                               myWindow.location.href = serviceBaseCld + "tm_ark_repc2b.aspx?0001234445=" + content;
                               // myWindow.document.write(serviceBaseCld + "tm_ark_repc2b.aspx?0001234445=" + content);
                               myWindow.focus();

                               swal("", "Record Submited Sucessfully", "success")



                           });
                       }

                   });







               }


           }

   
           $scope.dashboard = function () {

               //  $ionicHistory.goBack();
           }



           $rootScope.Details = localStorageService.get("ViewBasketDetails");
           $scope.Registration = localStorageService.get("user");
           $scope.appname = $rootScope.Details.xname
           $scope.address = $rootScope.Details.address
           $scope.xtelephone = $rootScope.Details.xmobile
           $scope.xemail = $rootScope.Details.xemail
           $scope.title_of_product = $rootScope.Details.product_title

           $scope.xcode = $scope.Registration.Sys_ID
           $scope.xrep_xname = $scope.Registration.Surname
           $scope.rep_address = $scope.Registration.CompanyAddress
           $scope.rep_xtelephone = $scope.Registration.PhoneNumber
           $scope.rep_xemail = $scope.Registration.Email


           var id = $scope.Registration.xid;
           $scope.varray = [{ name: 'LOCAL', id: '1' }, { name: 'FOREIGN', id: '2' }]

           $scope.vaplication = [{ name: 'T001', id: 'T001' }, { name: 'T003', id: 'T003' }, { name: 'T004', id: 'T004' }]

           $scope.classtrademark = [{ name: 'DEVICE', id: '1' }, { name: 'WORD MARK', id: '2' }, { name: 'WORD AND DEVICE', id: '3' }]

           $scope.GetStates2 = function (dd) {
               var countryId = dd;


               if (countryId == '160') {
                   $scope.Trademark_Type = "1";

               }

               else {

                   $scope.Trademark_Type = "2";
               }

               authService.getState(countryId).then(function (data, status) {
                   $scope.dd = data;
                   $scope.states = data;
               });


           }
           authService.GetCountry().then(function (data, status) {
               $scope.countries = data;

           });

           authService.GetClass().then(function (data, status) {
               $scope.dd = data;
               $scope.vclass = data;
           });












       });


       app.controller('ReturnPageController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window, $uibModal, $timeout) {


           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {

               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                 //  $location.path("/logout");

                 //  return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $scope.submitForm3 = function () {

               $window.print();



           }

           $rootScope.HeaderMessage = "Make Payment";
           $rootScope.isFee = true;


       //    localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
        //   var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '32';


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }





           $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

           var Shopping_card = $scope.Shopping_card3;

           $scope.applicant = localStorageService.get("applicant");
           var applicant2 = $scope.applicant
           $scope.agent = localStorageService.get("user");
           var agent2 = $scope.agent
           $scope.twallet = localStorageService.get("twallet");
           var twallet2 = $scope.twallet;

           $scope.itemsByPage = 100;
           $scope.ListAgent = $scope.Shopping_card3;

           $scope.displayedCollection = [].concat($scope.ListAgent);

           $scope.vTotal = 0;

           angular.forEach($scope.Shopping_card3, function (item) {

               item.amt = item.amt * item.qty;
               $scope.vTotal = $scope.vTotal + parseFloat(item.amt);

               //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


           });


           authService.ReturnUrl().then(function (data, status) {
               $scope.Returnurl = data;
               var xname5 = localStorageService.get("Documenttype");
               var transid = localStorageService.get("Documentid");
               $scope.twallet = localStorageService.get("twallet");
               var transactionid = $scope.twallet.transID;
               var vTotal = 0;

               var vTotal2 = data;

               

               angular.forEach($scope.Shopping_card3, function (item) {

                   item.amt = item.amt * item.qty;
                   vTotal = vTotal + parseFloat(item.amt);

                   //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


               });

               if (data.ResponseCode == "00") {

                   if (localStorageService.get("Documentid2") != null) {

                       var pid = localStorageService.get("Documentid2");


                       authService.UpdateCertificate(pid, $scope.twallet.transID).then(function (data, status) {
                           swal("", "Payment SuccessFul", "success")


                           localStorageService.set("baskets", null)

                           localStorageService.set("Shopping_card2", null)

                           localStorageService.set("applicant", null)

                           localStorageService.set("twallet", null)

                           localStorageService.set("InterSwitchPostFields", null)


                       });

                   }

                   else if (localStorageService.get("Documentid") != null) {

                       authService.GetUpdatePayment($scope.twallet.transID).then(function (data, status) {



                           swal({
                               title: "PAYMENT SUCCESS",
                               text: "Your Payment was Successful and an invoice has been sent to your email . Kindly proceed to Form now",
                               type: "success",
                               showCancelButton: false,
                               confirmButtonColor: "#DD6B55", confirmButtonText: "PROCEED!",
                               cancelButtonText: "No!",
                               closeOnConfirm: true,
                               closeOnCancel: true
                           },
               function (isConfirm) {
                   if (isConfirm) {

                       if (xname5 == "FORM 22") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 22'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_ApplicantName.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }


                       if (xname5 == "FORM 19") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 19'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_ApplicantAddress.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }


                       if (xname5 == "FORM 26") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 26'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_Rectification.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }



                       if (xname5 == "FORM 12") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 12'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_Renewal.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }


                       if (xname5 == "FORM 16") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 16'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_Assignment2.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }


                       if (xname5 == "FORM 17") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 17'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/Change_Assignment3.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }


                       if (xname5 == "FORM 47") {
                           var param = {
                               'transID': transid, 'vamount': vTotal2.Amount, 'vtranid': transactionid, 'vtype': 'FORM 47'
                           };
                           OpenWindowWithPost("http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/RegisteredUser.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile", param);
                           // doUrlPost(serviceBaseCld + "/admin/tm/Change_ApplicantName.aspx", xname2, xname3, xname4)
                       }






                   } else {
                       //swal("Cancelled", "Action Canceled :)", "error");
                   }
               });

                       });


                       localStorageService.set("baskets", null)

                       localStorageService.set("Shopping_card2", null)

                       localStorageService.set("applicant", null)

                       localStorageService.set("twallet", null)

                       localStorageService.set("InterSwitchPostFields", null)

                       localStorageService.set("Documentid", null);

                       localStorageService.set("Documenttype", null);


                   }

                   else {

                       $scope.vshow = true;
                       $scope.vshow2 = false;

                       swal("", "Payment SuccessFul", "success")


                       localStorageService.set("baskets", null)

                       localStorageService.set("Shopping_card2", null)

                       localStorageService.set("applicant", null)

                       localStorageService.set("twallet", null)

                       localStorageService.set("InterSwitchPostFields", null)

                   }
               }

               else {

                   $scope.vshow = false;
                   $scope.vshow2 = true;

                   swal("", "Payment Not SuccessFul", "error")


                   localStorageService.set("baskets", null)

                   localStorageService.set("Shopping_card2", null)

                   localStorageService.set("applicant", null)

                   localStorageService.set("twallet", null)

                   localStorageService.set("InterSwitchPostFields", null)
               }

              
            //   alert("response =" + data.ResponseCode)
               //  localStorageService.set("InterSwitchPostFields", data);

               //   $location.path("/app/PaymentDetail");
              // document.getElementById('form2').submit();


           });


       });

       app.controller('RegisterController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window, $uibModal, $timeout) {

           var urlIpobase ="http://88.150.164.30/EinaoTestEnvironment.IPO/";
        
         
           $scope.$on('$viewContentLoaded', function () {

               $scope.items = ['Corporate'];
            //   GetCountries();
               // alert($rootScope.Sys_ID)

               //Here your view content is fully loaded !!
           });

           $scope.change2 = function () {

               GetCountries();
           }
           $scope.change = function (pp) {
              
               var url7 =urlIpobase + 'Handlers/EmailCount.ashx';
               
               var kk2 = pp;
             //  var kkk = $('#VEMAIL').val();

               var AgentsData = {
                   Email: pp

               }

               var formData = new FormData();

               formData.append("vv", JSON.stringify(AgentsData));

               $http.post(url7, formData, {
                   transformRequest: angular.identity,
                   headers: { 'Content-Type': undefined }
               })
               .success(function (response) {

                   var dd = parseInt(response);

                   if (dd > 0) {
                       swal("","Email Already Exist","error")

                       $scope.vemail = "";


                   }
                   else {


                   }

               })
               .error(function () {

                   swal("error")
               });

           };

           $scope.submitForm2 = function (isValid) {
               $scope.processing = true;
               // check to make sure the form is completely valid

               var kkk = $('#VEMAIL').val();



               // var kkk2 = checkemail(kkk, $http);





               var error = $scope.userForm.$error;
               angular.forEach(error.pattern, function (field) {
                   if (field.$invalid) {
                       var fieldName = field.$name;
                       alert(fieldName)
                   }
               });

               if (isValid) {
                 
                   var formData = new FormData();



                   var totalFiles = document.getElementById("cac2").files.length;
                   if (totalFiles == 0) {
                       alert("Upload File")
                       //  self.cac("");

                       return;

                   }

                   else {

                       var ext = $('#cac').val().split('.').pop().toLowerCase();

                       if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) > -1) {
                           alert('invalid extension!');
                           return;
                       }

                   }
                   var totalFiles2 = document.getElementById("Letter_Intro").files.length;

                   if (totalFiles2 == 0) {
                       alert("Upload File")
                       //  self.loi("");

                       return;

                   }

                   else {

                       var ext = $('#Letter_Intro').val().split('.').pop().toLowerCase();

                       if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) > -1) {
                           alert('invalid extension!');
                           return;
                       }

                   }

                   var totalFiles3 = document.getElementById("passport").files.length;

                   if (totalFiles3 == 0) {
                       alert("Upload File")
                       //   self.passport("");
                    
                       return;

                   }

                   else {

                       var ext = $('#passport').val().split('.').pop().toLowerCase();

                       if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
                           alert('invalid extension!');
                         
                           return;
                       }

                   }

                   for (var i = 0; i < totalFiles; i++) {
                       var file = document.getElementById("cac").files[i];



                       formData.append("FileUpload", file);
                   }

                   for (var i = 0; i < totalFiles2; i++) {
                       var file = document.getElementById("Letter_Intro").files[i];

                       formData.append("FileUpload2", file);
                   }

                   for (var i = 0; i < totalFiles3; i++) {
                       var file = document.getElementById("passport").files[i];

                       formData.append("FileUpload3", file);
                   }





                   var AgentsData = {


                       AccountType: $scope.AccountType,
                       FirstName: $scope.firstname,
                       Surname: $scope.surname,
                       Nationality: $scope.country,
                       State: $scope.state,
                       dob: $scope.date,
                       CompName: $scope.CompName,
                       CompAddress: $scope.CompAddress,
                       CompEmail: $scope.CompEmail,
                       CompPhone: $scope.CompPhone,
                       CompPerson: $scope.CompPerson,
                       ContactPhone: $scope.ContactPhone,
                       DobIncorp: $scope.DobIncorp,
                       Email: $scope.vemail,

                       password: $scope.password



                   };

                   formData.append("vv", JSON.stringify(AgentsData));
                   //    ajaxindicatorstart('Submitting Record.. please wait..');
                   var url7 = urlIpobase + 'Handlers/SaveAgent.ashx';
                  
                   var url9 = urlIpobase + 'Handlers/SaveAgent.ashx';

                   // var url9 = "http://localhost:4556/Handlers/SaveAgent.ashx";

                   var dataObj = {
                       vv: JSON.stringify(AgentsData),
                       employees: $scope.employees,
                       headoffice: $scope.headoffice
                   };



                   $http.post(url9, formData, {
                       transformRequest: angular.identity,
                       headers: { 'Content-Type': undefined }
                   })
               .success(function (response) {

                   //  ajaxindicatorstop();


                   authService.SaveUser($scope.vemail).then(function (data, status) {
                     
                       swal("", "You have successfully submitted your form,please check your email for next steps", "success")
                       $scope.processing = false;

                   });

                 

               })
               .error(function () {
                   var dd = "aa";
                 //  ajaxindicatorstop();
                //   swal("error")
                   $scope.processing = false;
               });








               }

           };
          
      
           function GetCountries() {
               $http({
                   method: 'GET',
                   url: urlIpobase + 'Handlers/Getcountry.ashx'
               }).success(function (data, status, headers, config) {
                   var dd = data;
                   $scope.countries = data;
               }).error(function (data, status, headers, config) {
                   $scope.message = 'Unexpected Error';
               });
           }

           $scope.GetStates2 = function () {

           }


           $scope.GetStates = function () {
               var countryId = $scope.country;
               var formData = new FormData();
               formData.append("vid", countryId);
               if (countryId) {

                   $http.post(urlIpobase + 'Handlers/GetState.ashx', formData, {

                       transformRequest: angular.identity,
                       headers: { 'Content-Type': undefined }
                   })
         .success(function (response) {

             //  ajaxindicatorstop();

             var kk = response
             $scope.states = kk;
            // $scope.states = data;

         })
         .error(function (aa) {
             var data = aa
             // ajaxindicatorstop();
            // swal("error")
         });
                
               }
               else {
                   $scope.states = null;
               }
           }

       });

       app.controller('MinvoiceController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window, $uibModal, $timeout)
       {
           //test 


           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                 //  $location.path("/logout");

                 //  return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }


           $scope.submitForm2 = function () {

               $window.history.back();


           }


           $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

           var Shopping_card = $scope.Shopping_card3;

           $scope.applicant = localStorageService.get("applicant");
           var applicant2 = $scope.applicant
           $scope.agent = localStorageService.get("user");
           var agent2 = $scope.agent
           $scope.twallet = localStorageService.get("twallet");
           var twallet2 = $scope.twallet

           authService.ProceedToPayment(applicant2, Shopping_card, agent2, twallet2).then(function (data, status) {
               var dd = data;
               localStorageService.set("InterSwitchPostFields", data);


               $scope.InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");
               var InterSwitchPostFields2 = $scope.InterSwitchPostFields


               $scope.tech_amt = 0.0;
               $scope.init_amt = 0.0;

               angular.forEach($scope.Shopping_card3, function (item) {

                   $scope.tech_amt = $scope.tech_amt + ( parseFloat(item.tech_amt) * parseInt(item.qty) );
                   $scope.init_amt = $scope.init_amt + (parseFloat(item.init_amt) * parseInt(item.qty));


               });
               $scope.tech_amt = $scope.tech_amt * 100;
               $scope.init_amt = $scope.init_amt * 100;


               authService.formx(applicant2, Shopping_card, agent2, twallet2, InterSwitchPostFields2).then(function (data, status) {
                   var dd = data;
                   $rootScope.vdata = data;
                   //  localStorageService.set("InterSwitchPostFields", data);
                 //  $timeout($scope.callAtTimeout(), 10000);







               });



           });


           $scope.submitForm3 = function () {
          
                 $window.print();


           }
             $rootScope.HeaderMessage = "Make Payment";
             $rootScope.isFee = true;


           //  localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
            // var aap = localStorageService.get("count");

           // alert(aap)
             $rootScope.count = '00';

             $rootScope.count2 = '32';


           $scope.Shopping_card3 = localStorageService.get("Shopping_card2")

           $scope.applicant = localStorageService.get("applicant");
           $scope.agent = localStorageService.get("user");
           $scope.twallet = localStorageService.get("twallet");

           $scope.itemsByPage = 100;
           $scope.ListAgent = $scope.Shopping_card3;

           $scope.displayedCollection = [].concat($scope.ListAgent);

           $scope.vTotal = 0;

           angular.forEach($scope.Shopping_card3, function (item) {

               item.amt = item.amt * item.qty;
               $scope.vTotal = $scope.vTotal + parseFloat(item.amt);

            //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


           });

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }




           $scope.callAtTimeout = function () {
               $rootScope.modalInstance.close('a');


               var Shopping_card = []
               Shopping_card = localStorageService.get("Shopping_card2");
               var applicant = localStorageService.get("applicant");
               var agent = localStorageService.get("user");
               var twallet = localStorageService.get("twallet");

               var InterSwitchPostFields = localStorageService.get("InterSwitchPostFields");






               authService.PaymentDetail(applicant, Shopping_card, agent, twallet, InterSwitchPostFields).then(function (data, status) {
                   var dd = data;
                   //  localStorageService.set("InterSwitchPostFields", data);

                   //   $location.path("/app/PaymentDetail");
                   $rootScope.showmodal = false;
                   document.getElementById('form2').submit();


               });
               //  $location.path("/Formx");
             

           }

           $scope.submitForm = function () {
              
               $rootScope.showmodal = true;

               $rootScope.modalInstance=$uibModal.open({

                   ariaLabelledBy: 'modal-title-bottom',
                   ariaDescribedBy: 'modal-body-bottom',
                   templateUrl: 'myModalContent.html',
                   size: 'sm',
                   controller: function ($scope) {
                       $scope.name = 'bottom';

                      
                   }
               }
)
             //  document.getElementById('form2').submit();

               $timeout($scope.callAtTimeout(), 30000);

         







           }



      
       });

      
       app.controller('FeeController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $window) {
          
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;

           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
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

           $rootScope.HeaderMessage = "Make Payment";
           $rootScope.isFee = true;
         
           $rootScope.count = '00';
           $rootScope.count2 = '32';

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }




        

         //  localStorageService.set("count", '32');


        //   localStorageService.set("baskets", $rootScope.htmlPopover);
         //  var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '32';

         


         
           $scope.createContact = function (u) {
               $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
             //  $scope.modal.hide();
           };





          


           if (localStorageService.get("Shopping_card2") != null) {

               var cart3 = localStorageService.get("Shopping_card2");

               $scope.Shopping_card2 = cart3;
           }

           else {

               $scope.Shopping_card2 = [] ;
           }



           $scope.vcount = 0;
           $scope.submitForm = function () {
               var vno = 0;
               //angular.forEach($scope.Shopping_card2, function (item) {
               //    var User_Status = new Object();
               //    item.amt = parseFloat(item.amt) * parseFloat(item.qty);
               //    item.sn = vno + 1;
               //    vno = vno + 1;

               //});
               localStorageService.set("Shopping_card2", $scope.Shopping_card2);
              $location.path("/SelectedItem");




           }

       
           $scope.showbtn2 = function (row) {

               if (row.showbtn) {

                   return true;
               }

               else {

                   return false;
               }

           }

           $scope.submitForm2 = function () {

               $window.history.back();


           }



           $scope.EditRow = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }

               if (isNumber(row.qt_code)) {


               }

               else {
                   swal("", "Quantity Field Invalid", "error");
                   return;

               }

               if (row.qt_code == "" || parseInt(row.qt_code) <= 0) {

                   swal("", "Quantity Field Invalid", "error");
                   return;
               }
               var tot = 0;
               var abc = $rootScope.TotalCount;
              
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) + (parseFloat(row.amt) * parseInt(row.qt_code));

               //  $rootScope.TotalCount = $filter('currency')($rootScope.TotalCount);


              
               angular.forEach($scope.displayedCollection, function (item) {
                   var User_Status = new Object();
                  
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;
                       Shopping_card.sn = item.sn;

                       $scope.Shopping_card2.push(Shopping_card);
                       tot = tot + parseInt(item.qt_code);
                       $rootScope.vcount = parseInt($rootScope.vcount) + tot;
                       $rootScope.TrademarkCount = parseInt($rootScope.TrademarkCount) + tot ;
                      


                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
                      
                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
                       vbasket.Accreditation = $rootScope.Accreditation;
                       vbasket.Recordal = $rootScope.Recordal;
                       vbasket.TotalCount = $rootScope.TotalCount;
                       vbasket.vcount = $rootScope.vcount;
                       vbasket.vcount = $rootScope.vcount;
                       
                       localStorageService.set("baskets", vbasket);

                      


                   }







               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

           }


           $scope.EditRow3 = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }

               if (isNumber(row.qt_code)) {


               }

               else {
                   swal("", "Quantity Field Invalid", "error");
                   return;

               }

               if (row.qt_code == "" || parseInt(row.qt_code) <= 0) {

                   swal("", "Quantity Field Invalid", "error");
                   return;
               }
               var tot = 0;
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) + (parseFloat(row.amt) * parseInt(row.qt_code));
               angular.forEach($scope.displayedCollection2, function (item) {
                   var User_Status = new Object();
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;
                       Shopping_card.sn = item.sn;

                       $scope.Shopping_card2.push(Shopping_card);
                       tot = tot + parseInt(item.qt_code);
         
                       $rootScope.vcount = parseInt($rootScope.vcount) + tot;
                       $rootScope.PatentCount = parseInt($rootScope.PatentCount) + tot;

                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
                       vbasket.Accreditation = $rootScope.Accreditation;
                       vbasket.Recordal = $rootScope.Recordal;
                       vbasket.TotalCount = $rootScope.TotalCount;
                       vbasket.vcount = $rootScope.vcount;
                       localStorageService.set("baskets", vbasket);
                        

                   }







               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

           }



           $scope.EditRow4 = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }


               var tot = 0;
               $rootScope.vcount = parseInt($rootScope.vcount) - parseInt(row.qt_code);
               $rootScope.PatentCount = parseInt($rootScope.PatentCount) - parseInt(row.qt_code);
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) - (parseFloat(row.amt) * parseInt(row.qt_code));
              

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
             
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
               vbasket.Accreditation = $rootScope.Accreditation;
               vbasket.Recordal = $rootScope.Recordal;
               vbasket.TotalCount = $rootScope.TotalCount;
               vbasket.vcount = $rootScope.vcount;
               localStorageService.set("baskets", vbasket);
               angular.forEach($scope.displayedCollection2, function (item) {
                   var User_Status = new Object();
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = true;
                       item.showbtn2 = false;

                       item.qt_code = "";


                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;

                       var index = $scope.Shopping_card2.indexOf(Shopping_card);
                       $scope.Shopping_card2.splice(index, 1);
                      
                       // alert($scope.Shopping_card2.length)

                   }


                   //if (item.description == "Acceptance") {

                   //    User_Status.online_id = item.oai_no;
                   //    User_Status.Status = "Acceptance"
                   //    User_Status.Recordid = item.RecordalID;

                   //    event2s.push(User_Status)
                   //    vcount = vcount + 1;
                   //    //alert(item.oai_no)
                   //}






               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

           }


           $scope.EditRow5 = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }

               if (isNumber(row.qt_code)) {


               }

               else {
                   swal("", "Quantity Field Invalid", "error");
                   return;

               }

               if (row.qt_code == "" || parseInt(row.qt_code) <= 0) {

                   swal("", "Quantity Field Invalid", "error");
                   return;
               }
               var tot = 0;
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) + (parseFloat(row.amt) * parseInt(row.qt_code));
               angular.forEach($scope.displayedCollection3, function (item) {
                   var User_Status = new Object();
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;
                       Shopping_card.sn = item.sn;

                       $scope.Shopping_card2.push(Shopping_card);
                       tot = tot + parseInt(item.qt_code);
                       $rootScope.vcount = parseInt($rootScope.vcount) + tot;
                       $rootScope.DesignCount = parseInt($rootScope.DesignCount) + tot;
                      

                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
                       localStorageService.set("baskets", $rootScope.htmlPopover);
                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
                       vbasket.Accreditation = $rootScope.Accreditation;
                       vbasket.Recordal = $rootScope.Recordal;
                       vbasket.TotalCount = $rootScope.TotalCount;
                       vbasket.vcount = $rootScope.vcount;
                       localStorageService.set("baskets", vbasket);
                   }







               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

           }



           $scope.EditRow6 = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }

               var tot = 0;
               $rootScope.vcount = parseInt($rootScope.vcount) - parseInt(row.qt_code);
               $rootScope.DesignCount = parseInt($rootScope.DesignCount) - parseInt(row.qt_code);
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) - (parseFloat(row.amt) * parseInt(row.qt_code));

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
              
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
               vbasket.Accreditation = $rootScope.Accreditation;
               vbasket.Recordal = $rootScope.Recordal;
               vbasket.TotalCount = $rootScope.TotalCount;
               vbasket.vcount = $rootScope.vcount;
               localStorageService.set("baskets", vbasket);
               angular.forEach($scope.displayedCollection3, function (item) {
                   var User_Status = new Object();
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = true;
                       item.showbtn2 = false;

                       item.qt_code = "";


                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;

                       var index = $scope.Shopping_card2.indexOf(Shopping_card);
                       $scope.Shopping_card2.splice(index, 1);
                      
                       // alert($scope.Shopping_card2.length)

                   }


                   //if (item.description == "Acceptance") {

                   //    User_Status.online_id = item.oai_no;
                   //    User_Status.Status = "Acceptance"
                   //    User_Status.Recordid = item.RecordalID;

                   //    event2s.push(User_Status)
                   //    vcount = vcount + 1;
                   //    //alert(item.oai_no)
                   //}






               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

           }


           $scope.showbtn3 = function (row) {

               if (row.showbtn2) {

                   return true;
               }

               else {

                   return false;
               }


           }


           $scope.EditRow2 = function (row) {

               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   $scope.Shopping_card2 = cart3;
               }

               var tot = 0;
               $rootScope.vcount = parseInt($rootScope.vcount) - parseInt(row.qt_code);
               $rootScope.TotalCount = parseFloat($rootScope.TotalCount) - (parseFloat(row.amt) * parseInt(row.qt_code));
               $rootScope.TrademarkCount = parseInt($rootScope.TrademarkCount) - parseInt(row.qt_code);

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
             
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
               vbasket.Accreditation = $rootScope.Accreditation;
               vbasket.Recordal = $rootScope.Recordal;
               vbasket.TotalCount = $rootScope.TotalCount;
               vbasket.vcount = $rootScope.vcount;
               localStorageService.set("baskets", vbasket);
               angular.forEach($scope.displayedCollection, function (item) {
                   var User_Status = new Object();
                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = true;
                       item.showbtn2 = false;

                       item.qt_code = "";


                       var Shopping_card = new Object();
                       Shopping_card.amt = item.amt;
                       Shopping_card.init_amt = item.init_amt;
                       Shopping_card.item_code = item.item_code;
                       Shopping_card.item_desc = item.xdesc;
                       Shopping_card.qty = item.qt_code;
                       Shopping_card.tech_amt = item.tech_amt;
                       Shopping_card.xid = item.xid;

                       var index = $scope.Shopping_card2.indexOf(Shopping_card);
                       $scope.Shopping_card2.splice(index, 1);
                       //  tot = tot + parseInt(item.qt_code);

                     //  $rootScope.vcount = parseInt($rootScope.vcount) - parseInt(row.qt_code);
                       // alert($scope.Shopping_card2.length)

                   }


                   //if (item.description == "Acceptance") {

                   //    User_Status.online_id = item.oai_no;
                   //    User_Status.Status = "Acceptance"
                   //    User_Status.Recordid = item.RecordalID;

                   //    event2s.push(User_Status)
                   //    vcount = vcount + 1;
                   //    //alert(item.oai_no)
                   //}






               });

               localStorageService.set("Shopping_card2", $scope.Shopping_card2);

              
         

           }

           $scope.showbtn3 = function (row) {

               if (row.showbtn2) {

                   return true;
               }

               else {

                   return false;
               }


           }


           $scope.EditTrademark = function (row) {
               angular.forEach($scope.displayedCollection, function (item) {
                   var User_Status = new Object();

                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       item.qt_code = row.qty


                   }


               });


           }


           $scope.EditPatent = function (row) {
               angular.forEach($scope.displayedCollection2, function (item) {
                   var User_Status = new Object();

                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       item.qt_code = row.qty


                   }


               });


           }


           $scope.EditDesign = function (row) {
               angular.forEach($scope.displayedCollection3, function (item) {
                   var User_Status = new Object();

                   if (item.item_code == row.item_code && item.sn == row.sn) {
                       item.showbtn = false;
                       item.showbtn2 = true;

                       item.qt_code = row.qty


                   }


               });


           }

           authService.GetFee().then(function (data, status) {
               var dd = data;

               $scope.itemsByPage = 6;
               $scope.ListAgent = dd;

               $scope.displayedCollection = [].concat($scope.ListAgent);


               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                 //  $scope.Shopping_card2 = cart3;


                   angular.forEach(cart3, function (item) {
                  
                       $scope.EditTrademark(item);






                   });
               }


           });

           authService.GetFee2().then(function (data, status) {
               var dd = data;

               $scope.itemsByPage = 6;
               $scope.ListAgent2 = dd;

               $scope.displayedCollection2 = [].concat($scope.ListAgent2);



               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   //  $scope.Shopping_card2 = cart3;


                   angular.forEach(cart3, function (item) {

                       $scope.EditPatent(item);






                   });
               }


           });

           authService.GetFee3().then(function (data, status) {
               var dd = data;

               $scope.itemsByPage = 6;
               $scope.ListAgent3 = dd;

               $scope.displayedCollection3 = [].concat($scope.ListAgent3);


               if (localStorageService.get("Shopping_card2") != null) {

                   var cart3 = localStorageService.get("Shopping_card2");

                   //  $scope.Shopping_card2 = cart3;


                   angular.forEach(cart3, function (item) {

                       $scope.EditDesign(item);






                   });
               }


           });



           //for (var key in kq) {

           //    if (kq[key] == "ADMIN") {

           //        $rootScope.isAdmin = true;
           //    }


           //    if (kq[key] == "PARTNER") {

           //        $rootScope.isInstitution = true;
           //    }


           //    // alert($rootScope.Roles[key])
           //}




       
       });


       app.controller('AssignRolesController', function ($scope, $http, $rootScope, localStorageService, authService, $state, $location, $filter) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               $location.path("/#")

           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
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

           $scope.DelRole = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd.Subscription_Code).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }

           $scope.DelRole2 = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }


         

           var kq = localStorageService.get("access_right");
           //for (var key in kq) {

           //    if (kq[key] == "ADMIN") {

           //        $rootScope.isAdmin = true;
           //    }


           //    if (kq[key] == "PARTNER") {

           //        $rootScope.isInstitution = true;
           //    }


           //    // alert($rootScope.Roles[key])
           //}
          
           var kq = localStorageService.get("access_right");
           for (var key in kq) {

               if (kq[key] == "ADMIN") {

                   $rootScope.isAdmin = true;
               }
               // alert($rootScope.Roles[key])
           }


           authService.Get_Role2().then(function (data, status) {

               $scope.itemsByPage = 50;
               $scope.Roles = data;
               //   $scope.displayedCollection = [].concat($scope.ListAgent);

           },
             function (response) {
                 //  ajaxindicatorstop();

                 var errors = [];
                 for (var key in response.data.modelState) {
                     for (var i = 0; i < response.data.modelState[key].length; i++) {
                         errors.push(response.data.modelState[key][i]);
                     }
                 }
                 $scope.message = "Failed to register user due to:" + errors.join(' ');
             });


           $scope.change = function (dd2) {
             //  $location.path("/AssignRole")
               // $state.transitionTo('AssignRole');
               authService.AssignedUser(dd2).then(function (data, status) {

                   $scope.itemsByPage = 50;
                   $scope.ListAgent = data;
                   $scope.displayedCollection = [].concat($scope.ListAgent);
                   //  $state.transitionTo("AssignRole.Data")


                   $state.transitionTo('AssignRole.Data');
                   //  $location.path("/AssignRole/Data")


               },
            function (response) {
                //  ajaxindicatorstop();

                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                $scope.message = "Failed to register user due to:" + errors.join(' ');
            });

           }
           $scope.submitForm = function (vform, isValid) {

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       username: vform.user_name,
                       rolename: vform.role2

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.assignRoles(JSON.stringify(AgentsData)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           swal("Role Assigned  Successfully");

                       }


                       //   $location.path("/")
                       //  startTimer();

                   },
               function (response) {
                   //  ajaxindicatorstop();

                   var errors = [];
                   for (var key in response.data.modelState) {
                       for (var i = 0; i < response.data.modelState[key].length; i++) {
                           errors.push(response.data.modelState[key][i]);
                       }
                   }
                   $scope.message = "Failed to register user due to:" + errors.join(' ');
               });


               }




           }



       });

       app.controller('ApplicantController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter) {

           if ( localStorageService.get("Documentid") != null ||  localStorageService.get("Documentid2") != null ){
               localStorageService.set("Documentid",null);

               localStorageService.set("Documenttype", null);
               localStorageService.set("Documentid2", null);

               localStorageService.set("baskets", null)

               localStorageService.set("Shopping_card2", null)

               localStorageService.set("applicant", null)

               localStorageService.set("twallet", null)

               localStorageService.set("InterSwitchPostFields", null)



           }
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Make Payment";
        
           $rootScope.isFee = true;
       
          // localStorageService.set("count", '32');

           $rootScope.count22 = '22b';
          
         //  var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';
           $rootScope.count2 = '32';
           $scope.ApplicantForm = {};

           if (localStorageService.get("applicant") != null) {
               var ddx2 = localStorageService.get("applicant");
              

               $scope.ApplicantForm.firstname = ddx2.firstname;
               $scope.ApplicantForm.Lastname = ddx2.lastname;
               $scope.ApplicantForm.Address = ddx2.address;
               $scope.ApplicantForm.Email = ddx2.email;
               $scope.ApplicantForm.Phonenumber = ddx2.mobile;



           }

           else {

               $scope.ApplicantForm = {};
           }



           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.DesignCount = 0;


               $rootScope.Accreditation = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;


               $rootScope.Recordal = aap2.Recordal;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }
         



        


           $scope.submitForm = function (aa) {

             //  $location.path("/Fee");


               if ((aa)) {
                   
                   var Applicant = new Object();
                   Applicant.applicantname = $scope.ApplicantForm.firstname + " " + $scope.ApplicantForm.Lastname;
                   Applicant.firstname = $scope.ApplicantForm.firstname;
                   Applicant.lastname = $scope.ApplicantForm.Lastname;
                   Applicant.address = $scope.ApplicantForm.Address;
                   Applicant.email = $scope.ApplicantForm.Email;
                   Applicant.mobile = $scope.ApplicantForm.Phonenumber;

                   localStorageService.set("applicant", Applicant);


                   $location.path("/Fee");
               }
               else {

                   swal("", "ALL FIELD MUST BE FILLED", "error")
                   return;

               


               }


           }





       });

       app.controller('PaymentTypeController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter) {

           if (localStorageService.get("Documentid") != null || localStorageService.get("Documentid2") != null) {
               localStorageService.set("Documentid", null);

               localStorageService.set("Documenttype", null);
               localStorageService.set("Documentid2", null);

               localStorageService.set("baskets", null)

               localStorageService.set("Shopping_card2", null)

               localStorageService.set("applicant", null)

               localStorageService.set("twallet", null)

               localStorageService.set("InterSwitchPostFields", null)



           }
           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Make Payment";

           $rootScope.isFee = true;

           // localStorageService.set("count", '32');

           $rootScope.count22 = '22b';

           //  var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';
           $rootScope.count2 = '32';
           $scope.ApplicantForm = {};

           $rootScope.aa = {}

           $scope.varray43 = [{ Transaction_Status: 'Fresh', Transaction_Status2: 'Fresh' }, { Transaction_Status: 'Recordal', Transaction_Status2: 'Recordal' }];



     



           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.DesignCount = 0;


               $rootScope.Accreditation = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;


               $rootScope.Recordal = aap2.Recordal;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }




           $scope.Ddx3 = function (aa) {
               if (aa == "Fresh") {

                   $location.path("/Applicant");
               }

               else {

                   $location.path("/Recordal");
               }

           }


       





       });

       app.controller('UpdateRegistrationController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Profile";

           $rootScope.isFee = true;

           // localStorageService.set("count", '32');

         //  $rootScope.count22 = '22b';

           //  var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';
           $rootScope.count2 = '38';
          


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Accreditation = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }







           $scope.Registration = localStorageService.get("user");




           $scope.submitForm = function (aa) {
               var pp = $scope.Registration;


               swal({
                   title: "Are You Sure You want To Update Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
               function (isConfirm) {
                   if (isConfirm) {
                       authService.UpdateRegistration(pp).then(function (data, status) {
                           var dd = data;
                           localStorageService.set("user", data);
                           swal("", "Update SuccessFul", "success")

                           //  $location.path("/PaymentDetail");



                       });


                   }

               });


           }




       });


       app.controller('TrademarkPaymentReportController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Purchases Report";

           $rootScope.isFee = true;

           localStorageService.set("count", '10');

           $rootScope.count22 = '25';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';

           $rootScope.count2 = '10';
           $scope.ApplicantForm = {};

         


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.Accreditation = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $scope.submitForm3 = function () {

               $window.print();


           }

           $scope.vchange = function (vrow) {
               $scope.vdata = vrow;
               $scope.select = true;
               $rootScope.modalInstance = $uibModal.open({

                   ariaLabelledBy: 'modal-title-bottom',
                   ariaDescribedBy: 'modal-body-bottom',
                   templateUrl: 'myModalContent2.html',
                   scope: $scope,
                   size: 'lg',
                   controller: function ($scope, $uibModalInstance, authService) {
                       $scope.name = 'bottom';
                       var akp2 = localStorageService.get("user");
                       $scope.agent = localStorageService.get("user");
                       authService.getPaymentReport2(vrow.newtransID, akp2.xid).then(function (data, status) {
                           $scope.itemsByPage = 6;
                           $scope.data2 = data
                           $scope.ListAgent2 = data.fee_details;

                           $scope.displayedCollection2 = [].concat($scope.ListAgent2);

                           $scope.vTotal = 0;
                           $scope.vTotal = $scope.vTotal + parseFloat($scope.data2.InterSwitchPostField.isw_conv_fee);
                          
                           //added
                           angular.forEach(data.fee_details, function (item) {

                               item.amt = item.tot_amt ;
                               $scope.vTotal = $scope.vTotal + parseFloat(item.amt);

                               //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


                           });



                       });

                       $scope.ok = function () {
                           $uibModalInstance.close('a');
                       };

                   }
               }
)
           }



           var akp = localStorageService.get("user");
           authService.getPaymentReport("tm", akp.xid).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });






       });


       app.controller('TrademarkStatusController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
               $rootScope.user = localStorageService.get("user")




               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Status";

           $rootScope.isFee = true;

           localStorageService.set("count", '13');

           $rootScope.count22 = '28';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';

           $rootScope.count2 = '13';
           $scope.ApplicantForm = {};




           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;


               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }


           $scope.submitForm3 = function () {

               $window.print();


           }

        
           $scope.varray44 = [{ Transaction_Status: 'TransactionId', Transaction_Status2: 'TransactionId' }, { Transaction_Status: 'TpNumber', Transaction_Status2: 'TpNumber' }];

           $scope.vshow = false;
           $scope.Getstatus = "";
           $scope.SelectedValue = "";



           $scope.Ddx3 = function () {

               $("input#SelectedValue").val("");
               $("#Getstatus").val("").change();
               $scope.vshow = false;


           }
           $scope.Ddx = function (dxp, dxp2) {


               if (dxp == "TransactionId") {

                   authService.getTrademarkStatus(dxp2).then(function (data, status) {
                       $scope.dd = data;
                       if (data.vcount > 0) {
                           $scope.vshow = true;

                       }

                       else {

                           swal("", "Record Not Found", "error");
                           $scope.vshow = false;

                       }

                   });

               }

               if (dxp == "TpNumber") {

                   authService.getTrademarkStatus2(dxp2).then(function (data, status) {
                       $scope.dd = data;
                       if (data.vcount > 0) {
                           $scope.vshow = true;

                       }

                       else {

                           swal("", "Record Not Found", "error");
                           $scope.vshow = false;

                       }

                   });

               }

           }



          
          






       });

       app.controller('DesignStatusController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
               $rootScope.user = localStorageService.get("user")




               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Status";

           $rootScope.isFee = true;

           localStorageService.set("count", '13');

           $rootScope.count22 = '30';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count2 = '00';
           $rootScope.count = '13';
           $scope.ApplicantForm = {};




           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;
               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $scope.submitForm3 = function () {

               $window.print();


           }


           $scope.varray44 = [{ Transaction_Status: 'TransactionId', Transaction_Status2: 'TransactionId' }, { Transaction_Status: 'TpNumber', Transaction_Status2: 'TpNumber' }];

           $scope.vshow = false;
           $scope.Getstatus = "";
           $scope.SelectedValue = "";



           $scope.Ddx3 = function () {

               $("input#SelectedValue").val("");
               // $("#Getstatus").val("").change();
               $scope.vshow = false;


           }
           $scope.Ddx = function (dxp2) {




               authService.getDesignStatus(dxp2).then(function (data, status) {
                   $scope.dd = data;
                   if (data.vcount > 0) {
                       $scope.vshow = true;

                   }

                   else {

                       swal("", "Record Not Found", "error");
                       $scope.vshow = false;

                   }

               });





           }










       });

       app.controller('PatentStatusController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
               $rootScope.user = localStorageService.get("user")




               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Status";

           $rootScope.isFee = true;

           localStorageService.set("count", '13');

           $rootScope.count22 = '29';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';
           $rootScope.count2 = '13';
           $scope.ApplicantForm = {};




           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.TotalCount = 0;
               $rootScope.Accreditation = 0;
               $rootScope.vcount = 0;;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

              
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }


           $scope.submitForm3 = function () {

               $window.print();


           }



           $scope.vshow = false;
           $scope.Getstatus = "";
           $scope.SelectedValue = "";



           $scope.Ddx3 = function () {

               $("input#SelectedValue").val("");
               // $("#Getstatus").val("").change();
               $scope.vshow = false;


           }
           $scope.Ddx = function (dxp2) {




               authService.getPatentStatus(dxp2).then(function (data, status) {
                   $scope.dd = data;
                   if (data.vcount > 0) {
                       $scope.vshow = true;

                   }

                   else {

                       swal("", "Record Not Found", "error");
                       $scope.vshow = false;

                   }

               });





           }












       });

       app.controller('DesignPaymentReportController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Purchases Report";

           $rootScope.isFee = true;

           localStorageService.set("count", '10');

           $rootScope.count22 = '27';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';
           $rootScope.count2 = '10';
           $scope.ApplicantForm = {};




           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

                $rootScope.Accreditation = 0;

               $rootScope.Recordal = 0;


               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $scope.submitForm3 = function () {

               $window.print();


           }

           $scope.vchange = function (vrow) {
               $scope.vdata = vrow;
               $scope.select = true;
               $rootScope.modalInstance = $uibModal.open({

                   ariaLabelledBy: 'modal-title-bottom',
                   ariaDescribedBy: 'modal-body-bottom',
                   templateUrl: 'myModalContent2.html',
                   scope: $scope,
                   size: 'lg',
                   controller: function ($scope, $uibModalInstance, authService) {
                       $scope.name = 'bottom';
                       var akp2 = localStorageService.get("user");
                       $scope.agent = localStorageService.get("user");
                       authService.getPaymentReport2(vrow.newtransID, akp2.xid).then(function (data, status) {
                           $scope.itemsByPage = 6;
                           $scope.data2 = data
                           $scope.ListAgent2 = data.fee_details;

                           $scope.displayedCollection2 = [].concat($scope.ListAgent2);

                           $scope.vTotal = 0;
                           $scope.vTotal = $scope.vTotal + parseFloat($scope.data2.InterSwitchPostField.isw_conv_fee);

                           //added
                           angular.forEach(data.fee_details, function (item) {

                               item.amt = item.tot_amt;
                               $scope.vTotal = $scope.vTotal + parseFloat(item.amt);

                               //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


                           });



                       });

                       $scope.ok = function () {
                           $uibModalInstance.close('a');
                       };

                   }
               }
)
           }



           var akp = localStorageService.get("user");
           authService.getPaymentReport("ds", akp.xid).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });






       });

       app.controller('PatentPaymentReportController', function ($scope, $http, $rootScope, localStorageService, authService, $location, $sce, $filter, $uibModal, $window) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
               return;
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }

               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")





               //  authService2.CheckAccess();

           }
           $rootScope.HeaderMessage = "Purchases Report";

           $rootScope.isFee = true;

           localStorageService.set("count", '10');

           $rootScope.count22 = '26';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '00';

           $rootScope.count2 = '10';
           $scope.ApplicantForm = {};




           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.Recordal = 0;

               $rootScope.Accreditation = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;


               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.Recordal = aap2.Recordal;

               $rootScope.Accreditation = aap2.Accreditation;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/>  Recordal (' + $rootScope.Recordal + ') <br/>  Accreditation (' + $rootScope.Accreditation + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           $scope.submitForm3 = function () {

               $window.print();


           }

           $scope.vchange = function (vrow) {
               $scope.vdata = vrow;
               $rootScope.modalInstance = $uibModal.open({

                   ariaLabelledBy: 'modal-title-bottom',
                   ariaDescribedBy: 'modal-body-bottom',
                   templateUrl: 'myModalContent2.html',
                   scope: $scope,
                   size: 'lg',
                   controller: function ($scope, $uibModalInstance, authService) {
                       $scope.name = 'bottom';
                       var akp2 = localStorageService.get("user");
                       $scope.agent = localStorageService.get("user");
                       authService.getPaymentReport2(vrow.newtransID, akp2.xid).then(function (data, status) {
                           $scope.itemsByPage = 6;
                           $scope.data2 = data
                           $scope.ListAgent2 = data.fee_details;

                           $scope.displayedCollection2 = [].concat($scope.ListAgent2);

                           $scope.vTotal = 0;
                           $scope.vTotal = $scope.vTotal + parseFloat($scope.data2.InterSwitchPostField.isw_conv_fee);

                           //added
                           angular.forEach(data.fee_details, function (item) {

                               item.amt = item.tot_amt;
                               $scope.vTotal = $scope.vTotal + parseFloat(item.amt);

                               //   $scope.vTotal = $scope.vTotal + parseFloat(item.amt);


                           });



                       });

                       $scope.ok = function () {
                           $uibModalInstance.close('a');
                       };

                   }
               }
)
           }



           var akp = localStorageService.get("user");
           authService.getPaymentReport("pt", akp.xid).then(function (data, status) {
               $scope.itemsByPage = 30;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });






       });



       app.controller('RolesController', function ($scope, $http, $rootScope, localStorageService, authService, $state, $location, $filter) {

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $location.path("/login");
           }

           else {
               var vtokendate = localStorageService.get("access_tokenexpire")
               var vtokendate2 = new Date(vtokendate);

               var vtokendate3 = new Date();
               var tdate = dates.compare(vtokendate2, vtokendate3);

               if (tdate < 0) {
                   $location.path("/logout");

                   return;

               }
               $rootScope.agentRole = localStorageService.get("agentRole");
               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }

         
           authService.Get_Role().then(function (data, status) {

               $scope.itemsByPage = 10;
               $scope.ListAgent = data;
               $scope.displayedCollection = [].concat($scope.ListAgent);

               if (localStorageService.get("username") == null) {


                   $location.path("/login");
               }

               else {

                   authService.GetTopMenu().then(function (data, status) {

                       $scope.itemsByPage = 100;
                       $scope.ListAgent2 = data;
                       $scope.displayedCollection2 = [].concat($scope.ListAgent2);

                       $state.transitionTo('Role.Detail');

                      

                   },
      function (response) {


          var errors = [];

          $scope.message = "Failed to register user due to:" + errors.join(' ');
      });

               


               }

           },
             function (response) {
                 //  ajaxindicatorstop();

                 var errors = [];
               
                 //$scope.message = "Failed to register user due to:" + errors.join(' ');
             });


           $scope.dialogShown = false;


           $scope.EditRow2 = function (dd) {
               $scope.VEmail = "";
               authService.GetTopMenu2(dd).then(function (data, status) {

                   $rootScope.itemsByPage = 100;
                   $rootScope.ListAgent4 = data;
                   //  $rootScope.VROLENAME = data[0].RoleName

                   $rootScope.VROLENAME = dd;
                   $rootScope.displayedCollection4 = [].concat($rootScope.ListAgent4);



                   // $state.transitionTo('Role.Detail');

               },
           function (response) {
               //  ajaxindicatorstop();

               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });

               $scope.dialogShown = true;



           }

           $scope.EditRow3 = function (dds) {

               var event2s = []
               var vcount = 0;
               var pp7 = $rootScope.VROLENAME;
               angular.forEach($rootScope.displayedCollection4, function (item) {
                   var Topmenu2 = new Object();
                   Topmenu2.Menu_Code = item.Menu_Code;


                   Topmenu2.View = item.View;
                   Topmenu2.CreateNew = item.CreateNew;
                   Topmenu2.UpadateNew = item.UpadateNew;
                   Topmenu2.DeleteNew = item.DeleteNew;
                   Topmenu2.RoleName = pp7;

                   event2s.push(Topmenu2)


               });

               var formData = new FormData();

               var AgentsData = {


                   Name: pp7

               };

               var AgentsData2 = {


                   bb: AgentsData,
                   cc: event2s

               };




               authService.SaveRoles2(JSON.stringify(AgentsData2)).then(function (data, status) {

                   $scope.savedSuccessfully = true;
                   $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";


                   $location.path("/Roles");
                   // $state.transitionTo('Role');
                   swal("Role Created  Successfully");



                   location.reload(true)





                   //   $location.path("/")
                   //  startTimer();

               },
           function (response) {
               //  ajaxindicatorstop();

               var errors = [];
               for (var key in response.data.modelState) {
                   for (var i = 0; i < response.data.modelState[key].length; i++) {
                       errors.push(response.data.modelState[key][i]);
                   }
               }
               $scope.message = "Failed to register user due to:" + errors.join(' ');
           });
           }

      

           $scope.DelRole = function (dd) {

               swal({
                   title: "Are You Sure You want To Delete Record",
                   text: "",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55", confirmButtonText: "YES",
                   cancelButtonText: "No, cancel please!",
                   closeOnConfirm: true,
                   closeOnCancel: true
               },
    function (isConfirm) {
        if (isConfirm) {



            authService.DeleteRole(dd).then(function (data, status) {

                location.reload(true)
            });

            //   window.location.assign("profile.aspx");


        }

    });


           }

           $scope.submitForm = function (vform, isValid) {

               var event2s = []
               var vcount = 0;
               angular.forEach($scope.displayedCollection2, function (item) {
                   var Topmenu = new Object();
                   Topmenu.Menu_Code = item.Menu_Code;


                   Topmenu.View = item.SelectMenu;
                   Topmenu.CreateNew = item.CreateMenu;
                   Topmenu.UpadateNew = item.UpdateMenu;
                   Topmenu.DeleteNew = item.DeleteMenu;
                   Topmenu.RoleName = vform.role_name;

                   event2s.push(Topmenu)







               });

               if (isValid) {
                   var formData = new FormData();

                   var AgentsData = {


                       Name: vform.role_name

                   };

                   var AgentsData2 = {


                       bb: AgentsData,
                       cc: event2s

                   };

                   formData.append("CreateRoleBindingModel", JSON.stringify(AgentsData));


                   authService.SaveRoles(JSON.stringify(AgentsData2)).then(function (data, status) {

                       $scope.savedSuccessfully = true;
                       $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";

                       if (data.status == "200") {
                           $location.path("/Roles");
                           // $state.transitionTo('Role');
                           swal("Role Created  Successfully");

                           $state.transitionTo('Role.Detail');

                           location.reload(true)


                       }


                       //   $location.path("/")
                       //  startTimer();

                   },
               function (response) {
                   //  ajaxindicatorstop();

                   var errors = [];
                   for (var key in response.data.modelState) {
                       for (var i = 0; i < response.data.modelState[key].length; i++) {
                           errors.push(response.data.modelState[key][i]);
                       }
                   }
                   $scope.message = "Failed to register user due to:" + errors.join(' ');
               });


               }




           }



       });

       app.controller('logoutController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $location, $state, $filter) {
           //   $facebook.parse();
         
           localStorageService.set("username", null);
           localStorageService.set("access2", null);
           localStorageService.set("Shopping_card2", null);
           localStorageService.set("applicant", null)
           localStorageService.set("agentRole", null)
           $rootScope.islogin = false;

           $rootScope.islogout = true;
           localStorageService.set("access_token", null);
           localStorageService.set("access_right", null);
           localStorageService.set("baskets", null);

           localStorageService.set("loginuser", null);

           localStorageService.set("Email", null);


           localStorageService.set("user", null);


          
           localStorageService.set("vurl", null);
           localStorageService.set("vurl2", null);
           authService2.checkaccess2();
          

           $location.path("/#")
         


       });

       app.controller('ContactController', function ($scope, $http, $rootScope, localStorageService, authService2, $location, $filter) {


        

           if (localStorageService.get("count") == null) {
               $rootScope.count = 3;

           }

           else {
               $rootScope.count = localStorageService.get("count")

           }

           var kq = localStorageService.get("access_right");
         

           if (localStorageService.get("username") == null) {
               //  alert("username=" + localStorageService.get("username"))

               $rootScope.islogin = false;

               $rootScope.islogout = true;
           }

           else {
              

               $rootScope.islogin = true;

               $rootScope.islogout = false;
               $rootScope.username = localStorageService.get("username")
           }


           localStorageService.set("test", "testing local storage");

           //  alert(localStorageService.get("test"))

           $scope.vlogin2 = false;
           $scope.vlogin = true;

           $scope.GetClass = function () {
               var serviceBaseIpo = 'http://ipo.cldng.com';
               $http({
                   method: 'GET',
                   url: serviceBaseIpo + '/Handlers/GetCldClass.ashx'
               }).success(function (data, status, headers, config) {
                   var dd = data;
                   $scope.vclass = data;
               }).error(function (data, status, headers, config) {
                   $scope.message = 'Unexpected Error';
               });

           }



           $scope.submitForm = function (vform) {
             


               var pp = authService2.save(vform);

            //   $scope.GetClass();
           
           
         //   $window.location.reload();



           }


          



       }







  );
       
     
       function OpenWindowWithPost2(url, windowoption, name) {

           window.open(url, name, windowoption);
       }
       function OpenWindowWithPost(url, windowoption, name, params) {
           var form = document.createElement("form");
           form.setAttribute("method", "post");
           form.setAttribute("action", url);
           form.setAttribute("target", name);
           for (var i in params) {
               if (params.hasOwnProperty(i)) {
                   var input = document.createElement('input');
                   input.type = 'hidden';
                   input.name = i;
                   input.value = params[i];
                   form.appendChild(input);
               }
           }
           document.body.appendChild(form);
           //note I am using a post.htm page since I did not want to make double request to the page
           //it might have some Page_Load call which might screw things up.
           window.open("post.htm", name, windowoption);
           form.submit();
           document.body.removeChild(form);
       }

       function isNumber(n) {
           return !isNaN(parseFloat(n)) && isFinite(n);
       }


       var dates = {
           convert: function (d) {
               // Converts the date in d to a date-object. The input can be:
               //   a date object: returned without modification
               //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
               //   a number     : Interpreted as number of milliseconds
               //                  since 1 Jan 1970 (a timestamp) 
               //   a string     : Any format supported by the javascript engine, like
               //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
               //  an object     : Interpreted as an object with year, month and date
               //                  attributes.  **NOTE** month is 0-11.
               return (
                   d.constructor === Date ? d :
                   d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                   d.constructor === Number ? new Date(d) :
                   d.constructor === String ? new Date(d) :
                   typeof d === "object" ? new Date(d.year, d.month, d.date) :
                   NaN
               );
           },
           compare: function (a, b) {
               // Compare two dates (could be of any type supported by the convert
               // function above) and returns:
               //  -1 : if a < b
               //   0 : if a = b
               //   1 : if a > b
               // NaN : if a or b is an illegal date
               // NOTE: The code inside isFinite does an assignment (=).
               return (
                   isFinite(a = this.convert(a).valueOf()) &&
                   isFinite(b = this.convert(b).valueOf()) ?
                   (a > b) - (a < b) :
                   NaN
               );
           },
           inRange: function (d, start, end) {
               // Checks if date in d is between dates in start and end.
               // Returns a boolean or NaN:
               //    true  : if d is between start and end (inclusive)
               //    false : if d is before start or after end
               //    NaN   : if one or more of the dates is illegal.
               // NOTE: The code inside isFinite does an assignment (=).
               return (
                    isFinite(d = this.convert(d).valueOf()) &&
                    isFinite(start = this.convert(start).valueOf()) &&
                    isFinite(end = this.convert(end).valueOf()) ?
                    start <= d && d <= end :
                    NaN
                );
           }
       }


     

}(window));


