angular.module('CardsAgainstAssembly')
  .controller('rateController', rateController);

function rateController(){
  var vm = this;
  vm.rate = 7;
  vm.max = 10;
  vm.isReadOnly = false;

  vm.hoveringOver = function(value) {
    vm.overStar = value;
    vm.percent = 100 * (value/vm.max);
  };

  vm.ratingStates = [
    {stateOn: 'glyphicon-star',
    stateOff: 'glyphicon-star-empty'}
  ];

};
