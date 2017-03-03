(function(){
    
    function cmCustomSelectFn(){
        return{
            link:function(scope,element,attrs){
                setTimeout(function(){
                    element.selectric();
                },100)
            }
        }
    }
    
    angular.module("common")
    .directive("cmCustomSelect",[cmCustomSelectFn]);
})();