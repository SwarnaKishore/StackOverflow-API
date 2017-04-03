
   api.controller('articleSearchController',function ($scope, $log)
   {
     var slider = document.getElementById('datesRange');
     noUiSlider.create(slider, {
      start: [1900, 2000],
      connect: true,
      step: 1,
      range: {
        'min': 1980,
        'max': 2016
      },
      format: wNumb({
        decimals: 0
      })
     });



   });
