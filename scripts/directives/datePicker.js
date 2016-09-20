angular.module('CardsAgainstAssembly')
  .directive('datePicker', datePicker)

  function datePicker(){
    var directive = {
      restrict: 'EA',
      templateUrl:'./templates/datePickerDirective.html',
      replace: true
    };
    return directive;
  }
