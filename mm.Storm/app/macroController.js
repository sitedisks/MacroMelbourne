(function () {
    'use strict';

    angular.module('macroApp').controller('macroAppCtrl', ['$scope', '$translate',
        function ($scope, $translate) {
            
            $scope.changeLanguage = changeLanguage;

            function changeLanguage(langKey) {
                $translate.use(langKey);
            }

        }]);

})();