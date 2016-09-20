angular.module('CardsAgainstAssembly')
  .directive('rating', rating)

  function rating(){
    var directive = {
      scope: {
        question: '@'
      },
      restrict: 'EA',
      templateUrl: './templates/rateDirective.html',
      replace: true
    };
    return directive;
  }
