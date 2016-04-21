var app = angular.module('APP', []);

app.controller('MainHead', function( $scope ){
    $scope.title = 'eGadget';
});

app.controller('Warpper', function( $scope ) {
    $scope.view = {
        getView : function( i ) {
            return "section/" + i + ".html";
        }
    }
});