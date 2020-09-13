(function () {
// "use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  // List of shopping items
  var register=false;
    var userList=[];

  service.addUser = function(newUser) {
    NewUser = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      MobileNo: newUser.MobileNo,
      email: newUser.email,
      favouriteItem: newUser.favouriteItem,
    };

   userList.push(NewUser);
  };

  service.getUserList = function() {
    return userList;
  };

  }
})();
