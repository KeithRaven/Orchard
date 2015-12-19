angular.module("AsyncShapes").directive('rvContentItem', function ($http, $templateCache, $compile, $parse) {
    return {
        restrict: 'AE',
        scope: {
            contentItemId: '@',
            displayType: '@'
        },
        link: function (scope, iElement, iAttrs) {



            function UpdateContent(contentItemId, displayType) {

                if (!contentItemId || !displayType) {
                    return;
                }

                $http.get('/api/raven.api/' + scope.displayType + '/' + scope.contentItemId).then(function (response) {

                    scope.model = response.data;

                    $http.get(scope.model.templateUrl, { cache: $templateCache }).success(function (tplContent) {
                        iElement.replaceWith($compile(tplContent)(scope));
                    });

                });

            }

            scope.$watch('contentItemId', function(newValue){
                UpdateContent(newValue,scope.displayType);
            });

            scope.$watch('displayType', function(newValue){
                UpdateContent(scope.contentItemId,newValue);
            });

         
        }
    }
});