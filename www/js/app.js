angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('IndexCtrl', function ($scope) {

  $scope.find = function (time, chosenWeek) {
    document.getElementById("search-by-hour").blur();
    $scope.circular = getCircularInfoByHour(2, chosenWeek, time);
  };
  $scope.find();

  $scope.chosenWeek = '0';
});
