(function(){
    function profilePictureFn($compile){
        return{
            link:function(scope,element,attrs){
                var snippet="";
                if(scope.type=="image"){
                    snippet = "<img src='{{url}}' />";
                }
                else if(scope.type=="video"){
                    snippet = '<video width="400" controls><source src="{{url}}" type="video/mp4"></video>';
                }
                var content = $compile(snippet)(scope);
                element.append(content);
            }
        }
    }
    angular.module("profile")
    .directive("profilePicture",["$compile",profilePictureFn]);
})();