app.controller('ApplicationFileToo2Controller', function ($scope, $http, $rootScope, localStorageService, $location, authService) {

    $scope.device2 = true;

    $scope.GetStates13 = function (Logo) {



        if (Logo == "2") {
            $scope.device2 = false;

        }

        else {
            $scope.device2 = true;

        }
    }
    





    $scope.submitForm = function () {
        //   alert($scope.files2)
        //alert("class=" + $scope.vclass2)

        if ($scope.Logo == "" || $scope.Trademark_Type == "" || $scope.vclass2 == "" || $scope.Logo == undefined || $scope.Trademark_Type == undefined || $scope.vclass2 == undefined) {
            swal("", "All Required Field Must be Entered ", "error")
            return;
        }


        if ($scope.Logo == "2") {

            if ($scope.files3 == "" || $scope.files3 == undefined) {
                swal("", "Required File must be Uploaded", "error")
                return;
            }

        }

        if ($scope.files2 == "" || $scope.files2 == undefined || $scope.files3 == "" || $scope.files3 == undefined) {
            swal("", "Required File must be Uploaded", "error")
            return;
        }



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


        formData.append("vv", JSON.stringify(AgentsData));





        authService.PostAll(formData).then(function (data, status) {






        });




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
