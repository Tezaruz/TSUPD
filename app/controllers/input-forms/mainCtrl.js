/**
 * Created by Danila on 20.01.2016.
 */

module.exports = function (ngModule) {
    require('bootstrap-webpack');
    require('./forms.css');
    require('angular-ui-grid/ui-grid.js');
    require('angular-ui-grid/ui-grid.css');
    let uibs = require('angular-ui-bootstrap');
    let inputFormsCntrls = angular.module('inputFormsCntrls',
        [
            require('angular-formly'),
            require('angular-formly-templates-bootstrap'),
            uibs,
            //require('angular-ui-grid'),
            'ui.grid',
            'ui.grid.autoResize',
            //'ui.grid.pagination',
            //'ui.grid.selection',
            'ui.grid.edit',
            'ui.grid.cellNav',
            'ui.grid.rowEdit',
            //'ui.grid.treeView',
            'ui.grid.exporter',
            'formService'
        ]);
    inputFormsCntrls.run(function (formlyConfig) {
        formlyConfig.setType({
            name: 'ui-grid',
            template: require('./ui-grid-template.html'),
            wrapper: ['bootstrapLabel', 'bootstrapHasError']
        }/*,{
            name: 'dropzone',
            template: '<div ui-grid="{ data: model[options.key],
            columnDefs: to.columnDefs, onRegisterApi: to.onRegisterApi}"
             ui-grid-auto-resize ui-grid-cellnav ui-grid-edit ui-grid-row-edit
              ui-grid-tree-view ui-grid-exporter></div>',
            wrapper: ['bootstrapLabel', 'bootstrapHasError']

        }*/);
    });
    let mainCntrlFun = function (Form) {
        let vm = this;
        vm.model = {};
        vm.name = Form.getData({isInput: false}, function (data) {
            vm.name = data.formName;
            vm.fields = data.fields;
            vm.fields.forEach(function (item){
                    if(item.type=="ui-grid")
                        vm.model[item.key]=data[item.key];
                    console.log(item.list);
                }
            )

        });
        vm.val = '123qwe123';


        vm.options = {
            formState: {
                uiGridCtrl: function ($scope) {
                    $scope.to.onRegisterApi = function (gridApi) {
                        vm.gridApi = gridApi;
                    };
                }
            }
        };

        //fileloader
        vm.gridOpts = {};



    };
    inputFormsCntrls.controller('mainCntrl', mainCntrlFun);
   //Нет в жизни халявы. Никто не придёт, ничего не даст, и за вас не сделает, особенно, когда вы слабый и у вас ничего нет.
}