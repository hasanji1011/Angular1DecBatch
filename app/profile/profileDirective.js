(function(){
    
    function userProfileFn(){
        return{
            templateUrl:"app/profile/profile.tpl.html",
            link:function(scope,elelemt,attrs){
                elelemt.on('click','button',function(){
                    //console.log("hi");
                })
            }
        }
    }
    angular.module("profile")
    .directive("userProfile",[userProfileFn]);
})();