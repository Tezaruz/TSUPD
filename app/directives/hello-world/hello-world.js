/**
 * Created by Данила on 12.01.2016.
 */

module.exports = function(ngModule){
    ngModule.directive('helloWorld', helloWorldFn);
    function helloWorldFn() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'directives/hello-world/hello-world.html',
            controllerAs: 'vm',
            controller: function () {
                var vm=this;
                vm.val='helloWorld';
            }
        }
    }
};