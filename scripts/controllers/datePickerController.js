angular.module('CardsAgainstAssembly')
  .controller('DatePickerController', DatePickerController);

function DatePickerController(){
  var vm = this;

  vm.today = function(){
    vm.dt = new Date();
  };
  vm.today();

  vm.clear = function(){
    vm.dt = null;
  };

  vm.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  // function disabled(data) {
  //   var date = data.date,
  //     mode = data.mode;
  //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  // }

  vm.toggleMin = function() {
    vm.options.minDate = vm.options.minDate ? null : new Date();
  };
  vm.toggleMin();

  vm.setDate = function(year, month, day) {
    vm.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate()+ 1);
  vm.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data){
    var date = data.date,
      mode = data.mode;
    if (mode === 'day'){
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < vm.events.length; i++){
        var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

        if(dayToCheck === currentDay) {
          return vm.events[i].status;
        }
      }
    }
    return '';
  }

};
