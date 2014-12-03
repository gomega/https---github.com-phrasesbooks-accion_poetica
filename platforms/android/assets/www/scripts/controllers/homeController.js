'use strict';
angular.module('accionApp')
.controller('homeController', function ($scope,$http) {
    
  		$scope.uploadFile = function() {
              $http({
                      method: 'POST',
                      url: 'http://www.phrasesbooks.hol.es/api/upload_file/format/json',
                      headers: {
                          'Content-Type': 'multipart/form-data'
                      },
                      data: {
                          userfile: $scope.file
                      },
                      transformRequest: function (data, headersGetter) {
                          var formData = new FormData();
                          angular.forEach(data, function (value, key) {
                              formData.append(key, value);
                          });
                          var headers = headersGetter();
                          delete headers['Content-Type'];
                          return formData;
                      }
                  }).success(function (data) {
                    console.log(data);
                  }).error(function (data, status) {

                });
              }; 

 }).directive('file', function () {
        return {
            scope: {
                file: '='
            },
            link: function (scope, el, attrs) {
                el.bind('change', function (event) {
                    var file = event.target.files[0];
                    scope.file = file ? file : undefined;
                    scope.$apply();
                });
            }
      };
});