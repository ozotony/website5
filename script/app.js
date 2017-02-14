(function (window) {

    'use strict';

    var app = angular.module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule', 'ngModal', 'angular-loading-bar', 'ngMessages', 'app2', 'smart-table', 'vAccordion', 'ngSanitize', 'ngDialog']);





    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);

  
    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
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

                                     .state('ViewBasketTm', {
                                         url: '/ViewBasketTm',
                                         templateUrl: "partial/ViewBasketTm.html",
                                         controller: 'ViewBasketTmController',
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

                     .state('ConfirmBasketDs', {
                         url: '/ConfirmBasketDs',
                         templateUrl: "partial/ConfirmBasketDs.html",
                         controller: 'ViewBasketDsController'
                     

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

                     .state('Minvoice', {
                         url: '/Minvoice',
                         templateUrl: "partial/Minvoice.html",
                         controller: 'MinvoiceController'
                         

                     })

                      .state('ReturnPage', {
                          url: '/ReturnPage',
                          templateUrl: "partial/ReturnPage.html",
                          controller: 'ReturnPageController'


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

    


    
       app.controller('Home3Controller', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $sce, $filter, $location) {
           
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

               $rootScope.username = localStorageService.get("username")

               //   authService2.checkaccess2();

               var ddx = localStorageService.get("Email");
               // alert("inside logged")

               $scope.itemsByPage = 50;
               $scope.ListAgent = ddx.data;
               $scope.displayedCollection = [].concat($scope.ListAgent);




           }

           $rootScope.HeaderMessage = "Mails";

           $rootScope.isFee = true;
           //  if (localStorageService.get("Email") != null) {
           $rootScope.count22 = '22b';
          

           //   }

             localStorageService.set("count", '3');

             var aap = localStorageService.get("count");

             if (localStorageService.get("baskets") == null) {

                 $rootScope.TrademarkCount = 0;

                 $rootScope.PatentCount = 0;

                 $rootScope.DesignCount = 0;

                 $rootScope.TotalCount = 0;
                 $rootScope.vcount = 0;

                 $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
             }

             else {

                 var aap2 = localStorageService.get("baskets");
                 $rootScope.TrademarkCount = aap2.TrademarkCount;

                 $rootScope.PatentCount = aap2.PatentCount;

                 $rootScope.DesignCount = aap2.DesignCount;

                 $rootScope.TotalCount = aap2.TotalCount;
                 $rootScope.vcount = aap2.vcount;;
                 $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

             }

       // alert(aap)
           $rootScope.count = '3';
         
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

           if (localStorageService.get("count") == null) {
               $rootScope.count = 3;

           }

           else {
               $rootScope.count = localStorageService.get("count")

           }


          
          
         

           $scope.submitForm = function (vform,pp) {



               var pp = authService2.save(vform);


               //   $window.location.reload();



           }
      
         
  
       });


       app.controller('AgentAccreditationController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $sce, $filter, $location) {

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

           $rootScope.HeaderMessage = "Account Settings";

           $rootScope.isFee = true;
           //  if (localStorageService.get("Email") != null) {
           $rootScope.count22 = '24';


           //   }

           localStorageService.set("count", '7');

           var aap = localStorageService.get("count");

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }

           // alert(aap)
           $rootScope.count = '7';

           $scope.oneAtATime = true;

     




           authService.GetAgentStatus().then(function (data, status) {
               var dd = data;
              
               $scope.itemsByPage = 10;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);


           });



         

          
           









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

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }






           localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '32';

         


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


       app.controller('GetAgentMailController', function ($scope, $http, $rootScope, localStorageService, authService, authService2, $location) {


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

     

       app.controller('TopMenuController', function ($scope, $http, $rootScope, localStorageService, authService,  $state, $location) {

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

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

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

       app.controller('ViewBasketTmController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window) {

          
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

           $rootScope.HeaderMessage = "Purchases";
           $rootScope.count = '0';
           $rootScope.count22 = '21';
         
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




               authService.getPwalletCount(row.new_transID).then(function (data, status) {

                   if ((data > 0) && (row.item_code == "T002")) {

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
               $scope.itemsByPage = 6;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });


       

       







       });

       app.controller('ViewBasketPtController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window) {


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

           $rootScope.HeaderMessage = "Purchases";
           $rootScope.count = '0';
           $rootScope.count22 = '22';

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
               $scope.itemsByPage = 6;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



           });


       

        







       });

       app.controller('ViewBasketDsController', function ($scope, $http, $rootScope, localStorageService, $location, authService, $window) {

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

           $rootScope.HeaderMessage = "Purchases";
           $rootScope.count = '0';
           $rootScope.count22 = '23';

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
               $scope.itemsByPage = 6;

               $scope.ListAgent = data;

               $scope.displayedCollection = [].concat($scope.ListAgent);



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
                   $location.path("/logout");

                   return;

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


           localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '32';


           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

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
               if (data.ResponseCode == "00") {

                   $scope.vshow = true;
                   $scope.vshow2 = false;

                   swal("","Payment SuccessFul","success")
               }

               else {

                   $scope.vshow = false;
                   $scope.vshow2 = true;

                   swal("", "Payment Not SuccessFul", "error")
               }

               localStorageService.set("baskets", null)

               localStorageService.set("Shopping_card2", null)

               localStorageService.set("applicant", null)

               localStorageService.set("twallet", null)

               localStorageService.set("InterSwitchPostFields", null)
            //   alert("response =" + data.ResponseCode)
               //  localStorageService.set("InterSwitchPostFields", data);

               //   $location.path("/app/PaymentDetail");
              // document.getElementById('form2').submit();


           });


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
                   $location.path("/logout");

                   return;

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

               //var content = document.getElementById(aa).innerHTML
               //var pwin = window.open('', 'print_content');
               //pwin.document.open();
               //pwin.document.write('<html><body onload="window.print()" ><style>.divLast { border-width: 2px;border-bottom-width:2px; border-bottom-color:black; border-bottom-style: solid;}' + content + '</body></html>');
               //pwin.document.close();


           }
             $rootScope.HeaderMessage = "Make Payment";
             $rootScope.isFee = true;


             localStorageService.set("count", '32');


           //   localStorageService.set("baskets", $rootScope.htmlPopover);
             var aap = localStorageService.get("count");

           // alert(aap)
             $rootScope.count = '32';


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

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

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
         
         

           if (localStorageService.get("baskets") == null) {

               $rootScope.TrademarkCount = 0;

               $rootScope.PatentCount = 0;

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount =0;;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

           }




        

           localStorageService.set("count", '32');


        //   localStorageService.set("baskets", $rootScope.htmlPopover);
           var aap = localStorageService.get("count");

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
                      

                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
                      
                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
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
                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
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
              
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
             
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
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
                      
                       $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
                       localStorageService.set("baskets", $rootScope.htmlPopover);
                       var vbasket = new Object();
                       vbasket.TrademarkCount = $rootScope.TrademarkCount;
                       vbasket.PatentCount = $rootScope.PatentCount;
                       vbasket.DesignCount = $rootScope.DesignCount;
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
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
              
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
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
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ')  <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');
             
               var vbasket = new Object();
               vbasket.TrademarkCount = $rootScope.TrademarkCount;
               vbasket.PatentCount = $rootScope.PatentCount;
               vbasket.DesignCount = $rootScope.DesignCount;
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


       app.controller('AssignRolesController', function ($scope, $http, $rootScope, localStorageService, authService,  $state, $location) {

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
       
           localStorageService.set("count", '32');

           $rootScope.count22 = '22b';

           var aap = localStorageService.get("count");

           // alert(aap)
           $rootScope.count = '32';
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

               $rootScope.DesignCount = 0;

               $rootScope.TotalCount = 0;
               $rootScope.vcount = 0;

               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $rootScope.TotalCount + '  </div> ');
           }

           else {

               var aap2 = localStorageService.get("baskets");
               $rootScope.TrademarkCount = aap2.TrademarkCount;

               $rootScope.PatentCount = aap2.PatentCount;

               $rootScope.DesignCount = aap2.DesignCount;

               $rootScope.TotalCount = aap2.TotalCount;
               $rootScope.vcount = aap2.vcount;;
               $rootScope.htmlPopover = $sce.trustAsHtml('<div style="color: white ">Trademark (' + $rootScope.TrademarkCount + ') <br/>  Patent (' + $rootScope.PatentCount + ') <br/> Design (' + $rootScope.DesignCount + ') <br/> <hr class="hr3" /> <br/> Total &nbsp; ' + $filter('currency')($rootScope.TotalCount, '', 2) + '  </div> ');

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



       app.controller('RolesController', function ($scope, $http, $rootScope, localStorageService, authService,  $state, $location) {

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

       app.controller('logoutController', function ($scope, $http, $rootScope, localStorageService, authService,authService2, $location, $state) {
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

       app.controller('ContactController', function ($scope, $http, $rootScope, localStorageService, authService2, $location) {


        

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

               $scope.GetClass();
           
           
         //   $window.location.reload();



           }


          



       }







  );
       
     

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


