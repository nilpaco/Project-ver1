'use strict';

angular.module('ver1App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


