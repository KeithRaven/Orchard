angular.module("AsyncShapes", ["ngSanitize"]);

angular.module("AsyncShapes").controller('AsyncShapesCntrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {


    $scope.updateItem = function (id) {

        $http.get('/OrchardLocal/api/raven.api/Detail/' + id).then(function (response) {
            $scope.model = response.data;
        });

    };



    
}]);