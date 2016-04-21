(function () {
    'use strict';

    angular.module('marcoApp').controller('marcoAppCtrl', ['$scope', '$translate',
        function ($scope, $translate) {
            
            $scope.changeLanguage = changeLanguage;

            function changeLanguage(langKey) {
                $translate.use(langKey);
            }

        }]);

})();