(function(){
    function profileCtrlFn($scope){
        //var vm = this;
         $scope.type="image";
        
         $scope.upload = function(){
             
            console.log( $scope.fileLoc)
            $scope.url =  "https://petapixel.com/assets/uploads/2014/09/nx300m_1.jpg";
            console.log($scope.url);
        }
    }
    angular.module("profile")
    .controller("profileCtl",["$scope",profileCtrlFn])
})();