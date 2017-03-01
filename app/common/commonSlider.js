(function(){
    
    function cmSliderFn(){
        var c = "hey"
         
        return{
            template:"<h1>Range :{{user}}</h1>",
            controller:function($scope){
                $scope.user = abc;
            },
            restrict:"A,E",
            //require:'ngModel',
            link: function(scope,element,attrs,ctrl){
                
                element.slider({
                  range: true,
                  min: 0,
                  max: 500,
                  values: [ 75, 300 ],
                  slide: function( event, ui ) {
                    var rangeSlide = "$" + ui.values[0] + " - $" + ui.values[1];
                      console.log(rangeSlide);
                     
                     
                  }
                });
                ctrl.abc = 'hi';
                console.log(ctrl);
            }
             
        }
       
    }
    
    angular.module("common")
    .directive("cmSlider",[cmSliderFn]);
})();