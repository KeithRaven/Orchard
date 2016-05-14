angular.module("AsyncShapes").directive('rvContentItem', function ($http, $templateCache, $compile, $parse, $timeout) {
    return {
        restrict: 'AE',
        scope: {
            contentItemId: '@',
            displayType: '@',
            resourceUrl: '@'
        },
        link: function (scope, iElement, iAttrs) {


            var tempContentItemId = '',
                tempItemDisplayType,
                itemIdTimeout;

            function updateContent(resourceUrl) {

                    $http.get(resourceUrl).then(function (response) {

                        scope.model = response.data;

                        $http.get(scope.model.templates.angular, { cache: $templateCache }).success(function (tplContent) {

                            iElement.html(tplContent);
                            $compile(iElement.contents())(scope);
                         
                        });
                    });

         
            }

            function buildResourceUrl(contentItemId,displayType) {
                
                if (!contentItemId || !displayType) {
                    return;
                }

                if (itemIdTimeout) $timeout.cancel(itemIdTimeout);

                tempContentItemId = contentItemId;
                tempItemDisplayType = displayType;

                var resourceUrl = '/api/raven.api/item/' + contentItemId + '/' + displayType;

                itemIdTimeout = $timeout(function () { updateContent(resourceUrl) },150);
            }

            scope.navigate = function (resourceUrl) {
                scope.$emit('navigate', { resourceUrl: resourceUrl });
            };

            scope.$watch('contentItemId', function (newValue) {
                buildResourceUrl(newValue, scope.displayType);
            });

            scope.$watch('displayType', function (newValue) {
                buildResourceUrl(scope.contentItemId, newValue);
            });

            scope.$watch('resourceUrl', function (newValue) {
                if (!newValue)
                    return;

                updateContent(newValue);
            });
          
        }
    }
});