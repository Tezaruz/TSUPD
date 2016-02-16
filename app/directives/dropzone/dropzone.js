/**
 * Created by Danila on 02.02.2016.
 */

////сделать открытие окна explorer при нажатии

module.exports = function (ngModule) {

    const ELEMID="dropzoneInput";
    let XLSX = require('xlsx');
    require('./dropzone.css');

    let parseExcel = function(files,$scope,$elm){
        var i, f;
        for (i = 0, f = files[i]; i != files.length; ++i) {
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (evt) {
                $scope.$apply(function () {
                    var data = evt.target.result;

                    var workbook = XLSX.read(data, {type: 'binary'});

                    var headerNames = XLSX.utils.sheet_to_json(
                        workbook.Sheets[workbook.SheetNames[0]],
                        {header: 1}
                    )[0];

                    var data = XLSX.utils.sheet_to_json(
                        workbook.Sheets[
                            workbook.SheetNames[0]
                            ]
                    );

                    $scope.opts.columnDefs = [];
                    headerNames.forEach(function (h) {
                        $scope.opts.columnDefs.push({field: h});
                    });

                    $scope.opts.data = data;

                    $elm.val(null);
                });
            };
            reader.readAsBinaryString(f);
        }
    };

    ngModule.directive("dropzone", [function () {

        return {
            restrict: 'C',
            template:require('./drop-zone-template.html'),
            scope: {
                opts: '='
            },
            link: function ($scope, $elm) {
                let handleEvent = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'copy';
                };
                $elm.on('dragenter', handleEvent);
                $elm.on('dragover', handleEvent);
                $elm.on('drop', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    parseExcel(evt.dataTransfer.files,$scope,$elm);

                });
                $elm.on('click', function(evt){
                    let elem = document.getElementById(ELEMID);
                    if(elem && document.createEvent) {
                        let event = document.createEvent("MouseEvents");
                        event.initEvent("click", true, false);
                        event.cancelBubble=true;
                        elem.dispatchEvent(event);
                    }
                });
            }
        }
    }]);


};