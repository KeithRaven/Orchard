angular.module("AsyncShapes").directive('rvContentItem', function ($http, $templateCache, $compile, $parse, $timeout) {
    return {
        restrict: 'AE',
        scope: {
            contentItemId: '@',
            displayType: '@'
        },
        link: function (scope, iElement, iAttrs) {


            var tempContentItemId = '',
                tempItemDisplayType,
                itemIdTimeout;

            function UpdateContent(contentItemId, displayType) {

                if (!contentItemId || !displayType) {
                    return;
                }

                if (itemIdTimeout) $timeout.cancel(itemIdTimeout);

                tempContentItemId = contentItemId;
                tempItemDisplayType = displayType;

                itemIdTimeout = $timeout(function () {

                    $http.get('/api/raven.api/item/' + scope.contentItemId + '/' + scope.displayType ).then(function (response) {

                        scope.model = response.data;

                        $http.get(scope.model.templates.angular, { cache: $templateCache }).success(function (tplContent) {

                            iElement.html(tplContent);
                            $compile(iElement.contents())(scope);
                         
                        });
                    });

                }, 150);

            }

            scope.$watch('contentItemId', function (newValue) {
                UpdateContent(newValue,scope.displayType);
            });

            scope.$watch('displayType', function(newValue){
                UpdateContent(scope.contentItemId,newValue);
            });

          
        }
    }
});