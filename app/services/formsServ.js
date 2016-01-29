/**
 * Created by Danila on 27.01.2016.
 */

import ngResource from 'angular-resource';

export default ngModule => {

    angular.module('formService', [ngResource]).
    factory('Form', function($resource){
        return $resource('app/json/form:formId:type', {isInput:'@isInput',formId:'@id', type:'.json'}, {
            getData: {method:'GET', params:{}, isArray:false}
        });
    });
    angular.module('gormFieldsService', [ngResource]).
    factory('Fields', function($resource){
        return $resource('app/json/fields.json', {isInput:'@isInput',fieldsId:'@id', type:'.json'}, {
            getData: {method:'GET', params:{}, isArray:false}
        });
    });


};

