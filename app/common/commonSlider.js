    (function(){

        function cmSliderFn($compile){
             var snippet = "<h2>Hello :{{rangeSlide}}</h2>";
            return{
                restrict:"A,E",
                link: function(scope,element,attrs){
                    var range = element.slider({
                      range: true,
                      min: 0,
                      max: 500,
                      values: [ 75, 300 ],
                      slide: function( event, ui ) {
                        scope.rangeSlide = "$" + ui.values[0] + " - $" + ui.values[1];
                          scope.$apply();
                      }
                        });
                    var content = $compile(snippet)(scope);
                    element.append(content);
                }

            }

        }
        angular.module("common")
        .directive("cmSlider",["$compile",cmSliderFn]);
    })();