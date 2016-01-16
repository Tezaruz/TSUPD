/**
 * Created by Данила on 12.01.2016.
 */


module.exports = function(ngModule){
    ngModule.directive('helloWorld', helloWorldFn);
    function helloWorldFn() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/directives/hello-world/hello-world.html',
            controllerAs: 'vm',
            controller: function () {
                let vm=this;
                vm.val='helloWorld';
                let apples = 5; // (*)

                if (true) {
                    let apples = 10;

                    alert(apples); // 10 (внутри блока)
                }

                alert(apples); // 5 (снаружи блока значение не изменилось)
            }
        }
    }
};