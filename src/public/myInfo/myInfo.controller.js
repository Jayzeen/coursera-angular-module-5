(function () {
  "use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController)

MyInfoController.$inject = ['user'];
function MyInfoController(user) {
  var $ctrl = this;
  $ctrl.user = user;

  if ($ctrl.user!= 0) {
    $ctrl.firstName = $ctrl.user.firstName;
    $ctrl.lastName = $ctrl.user.lastName;
    $ctrl.MobileNo = $ctrl.user.MobileNo;
    $ctrl.email = $ctrl.user.email;
    $ctrl.favouriteItem = $ctrl.user.favouriteItem;
  } else {
    // console.log("No users");
  }

}

})();
