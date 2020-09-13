(function() {

  angular.module('public')
    .controller('signupController', signupController)


  signupController.$inject = ['SignupService','MenuService'];
  function signupController(SignupService,MenuService) {
        var $ctrl=this;
        var signupCtrl = this;
        signupCtrl.dish = false;
        signupCtrl.dish2 = false;

      signupCtrl.submit = function() {
      var userList = {
        firstName: signupCtrl.user.firstName,
        lastName: signupCtrl.user.lastName,
        MobileNo: signupCtrl.user.MobileNo,
        email: signupCtrl.user.email,
        favouriteItem: signupCtrl.user.favouriteItem,
      }

    MenuService.searchForShortName(signupCtrl.user.favouriteItem)
      .then(function (data) {
        userList.favouriteItem = data;
        SignupService.addUser(userList);
        signupCtrl.dish = true;
        signupCtrl.dish2 = false;
      },

      function (error) {
        signupCtrl.dish2 = true;
        signupCtrl.dish = false;
      });
    };
  }

})();
